import React, { createContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { AmplifyService } from '../services';
import ApolloGraphQLProvider from "./ApolloGraphQLProvider";
import ControlPanel from "../components/ControlPanel";
import GoogleSignIn from "../components/GoogleLoginButton";
import "./styles/ApiContextProvider.css";
import "../components/styles/ControlPanel.css"
import CustomAmplifyAuthenticator from "../components/CustomAmplifyAuthenticator";
import ApolloGraphQLProviderRedux from "./ApolloGraphQLProvider";

export const ApiContext = createContext({ authenticated_user: null });

export default function ApiContextProvider (props) {
    const [ authenticated_user, setAuthenticatedUser ] = useState(null);
    const [ config, setConfig ] = useState(null);
    const [ cognito, setCognito ] = useState({
        clientId: '',
        identityPoolId: '',
        userPoolId: '',
        domain: '',
        hostedAuthenticationUrl: '',
        logoutUrl: '',
    });
    const [ ready, setReady ] = useState(false);
    const [ state, setState ] = useState(null);
    const [ signOut, setSignOut ] = useState(null);
    const [ token, setToken ] = useState(null);

    useEffect(() => {
        console.log('Init Amplify config:', config);

        if (config === null) {
            const cfg = AmplifyService.configure(props.aws_config, setConfig);
            const cognito_cfg = {};

            for (const c in cognito) {
                if (cfg.Auth.hasOwnProperty(c)) {
                    cognito_cfg[c] = cfg.Auth[c];
                }
            }

            setCognito(cognito_cfg);

        } else {

            AmplifyService.setHubListener(setAuthenticatedUser)
                .then(() => {
                    console.log("Passed setAuthenticatedUser to AmplifyService");
                });

            AmplifyService.isAuthenticated()
                .then(authenticated => {
                    console.log('Authenticated ', authenticated);

                    if (authenticated) {
                        console.log("Get Amplify claims...");

                        AmplifyService.getClaims()
                            .then(claims => {
                                if (!claims) {
                                    console.log('No claims found');
                                    // AmplifyService.federatedLogin('Google');
                                } else if (authenticated_user === null) {
                                    setAuthenticatedUser({
                                        username: claims.username,
                                        userType: 'admin',
                                        groups: claims.groups,
                                        email: claims.email
                                    });
                                } else {
                                    setAuthenticatedUser({
                                        ...authenticated_user,
                                        username: claims.username,
                                        userType: 'admin',
                                        groups: claims.groups,
                                        email: claims.email
                                    });
                                }
                            })
                            .catch(err => {
                                console.log(err);
                                setAuthenticatedUser(null);
                            });

                        setReady(true);

                    } else {
                        // AmplifyService.federatedLogin('Google');
                        setAuthenticatedUser({
                            username: "",
                            userType: "",
                            groups: [],
                            email: "",
                        });
                    }
                })
                .catch(err => {
                    console.log('ERROR', err);
                });
        }

    }, [ config ]);

    useEffect(() => {
        console.log('Init Amplify cognito: ', cognito);

        if (!!cognito.clientId) return;
        else if (config !== null) {
            const cognito_cfg = {};

            for (const c in cognito) {
                if (config.Auth.hasOwnProperty(c)) {
                    cognito_cfg[c] = config.Auth[c];
                }
            }

            setCognito(cognito_cfg);
        }

    }, [ cognito ]);

    useEffect(() => {
        if (!!authenticated_user && authenticated_user !== null && token === null) {
            console.log("Attempt to get access token");

            AmplifyService.getIdToken()
                .then((t) => {
                    console.log("token:", t);

                    // TODO: set token and connect ApolloGraphQLProvider to CORI Data API /graphql endpoint
                    setToken(t);
                    // setReady(true);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [authenticated_user]);

    return (
        <AmplifyProvider>
            <ApiContext.Provider className={"controls"} value={state}>
                 <CustomAmplifyAuthenticator
                     authenticated_user={authenticated_user}
                     setAuthenticatedUser={setAuthenticatedUser}>
                     {(!!ready) ? (
                            <ApolloGraphQLProviderRedux aws_amplify_token={token} setReady={setReady}>
                                {props.children}
                            </ApolloGraphQLProviderRedux>
                     ) : (
                         <span>LOADING</span>
                     )}
                 </CustomAmplifyAuthenticator>
            </ApiContext.Provider>
        </AmplifyProvider>
    );
}
