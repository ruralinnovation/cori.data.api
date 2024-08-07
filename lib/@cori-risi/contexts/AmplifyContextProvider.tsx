import React, {
    createContext,
    ReactElement,
    useEffect,
    useState
} from "react";
import {Amplify, ResourcesConfig} from "aws-amplify";

import amplifyconfig from './amplifyconfiguration.json';

import { User } from "../models";

Amplify.configure(amplifyconfig);

// let hasAuthSession = false;
// let hasAuthUser = false;
// let hasAuthClient = false;

type AmplifyContextType = {
    // authenticated_user: User | null;
    domain?: string;
    region?: string;
    identityPoolId?: string;
    userPoolId?: string;
    userPoolClientId?: string;
    // TODO:
    // updateUser: Function
};

const initAmplifyContext: AmplifyContextType = {
    // authenticated_user: null,
    domain: undefined,
    region: undefined,
    identityPoolId: undefined,
    userPoolId: undefined,
    userPoolClientId: undefined,
};

/**
 * This is the configuration context for an Amplify app that uses authentication to connect
 * to the [CORI Data API](https://cori-data-api.ruralinnovation.us/){target=_blank}.
 */
export const AmplifyContext = createContext<AmplifyContextType | null>(initAmplifyContext);

/**
 * This component provides the configuration context to an Amplify/React app, which is particularly useful to one that requires
 * authentication in order to access the [CORI Data API](https://cori-data-api.ruralinnovation.us/){target=_blank}.
 * Other than the `children` prop, the parameters are
 * [AWS Cognito](https://us-east-1.console.aws.amazon.com/cognito/v2/home?region=us-east-1){target=_blank}
 * values that are passed so that the Amplify configuration method can use the specified User pool
 * and Identity pool to authenticate users (including the `cori-risi-public` user).
 *
 * ```ts
 * import { AmplifyContextProvider } from "@cori-risi/cori.data.api";
 *
 * // ...
 *
 * <AmplifyContextProvider domain={import.meta.env.VITE_COGNITO_DOMAIN}
 *                         region={import.meta.env.VITE_REGION}
 *                         identityPoolId={import.meta.env.VITE_IDENTITY_POOL_ID}
 *                         userPoolId={import.meta.env.VITE_USER_POOL_ID}
 *                         userPoolClientId={import.meta.env.VITE_USER_POOL_CLIENT_ID} >
 *     <App />
 * </AmplifyContextProvider>
 * ```
 *
 *  @param props.domain s- domain for the Cognito Hosted UI and/or OAuth 2.0 endpoints
 *  @param props.region - AWS region where Cognito service is hosted
 *  @param props.identityPoolId - Cognito Identity pool ID
 *  @param props.userPoolId - Cognito User pool ID
 *  @param props.userPoolClientId - ACognito User pool App client ID (App clients are the user pool authentication resources attached to your app).
 */
export default function AmplifyContextProvider (props: {
    children?: ReactElement | ReactElement[],
    domain?: string,
    region?: string,
    identityPoolId?: string,
    userPoolId?: string,
    userPoolClientId?: string
}) {

    // const userState = useSelector(selectUser);
    // const dispatch = useDispatch();

    // const [ authenticated_user, setAuthenticatedUser ] = useState<User>(userState);

    const [ state, setState ] = useState<AmplifyContextType | null>((!!props.domain
        && !!props.region
        && !!props.identityPoolId
        && !!props.userPoolId
        && !!props.userPoolClientId
    ) ?
        {
            // authenticated_user: null,
            ...props
        } :
        initAmplifyContext);

    useEffect(() => {
        if (!!props.domain
            && !!props.region
            && !!props.identityPoolId
            && !!props.userPoolId
            && !!props.userPoolClientId
        ) {

            const {
                domain,
                region,
                identityPoolId,
                userPoolId,
                userPoolClientId
            } = props;

            console.log("Configuring Amplify context with props:", {
                domain,
                region,
                identityPoolId,
                userPoolId,
                userPoolClientId
            });

            // Ex. Auth data structure:
            //     Auth: {
            //         Cognito: {
            //             userPoolClientId: "5eusi16g0o2q1g1rr5ehgudodm",
            //             userPoolId: "us-east-1_QeA4600FA",
            //             userPoolEndpoint: "authcori.auth.us-east-1.amazoncognito.com",
            //             identityPoolId: "us-east-1:2194a76a-fa3d-4c33-999e-e3c4b2b049ee",
            //             loginWith: { // Optional
            //                 oauth: {
            //                     domain: 'authcori.auth.us-east-1.amazoncognito.com',
            //                         scopes: ['email', 'openid', 'profile'],
            //                         redirectSignIn: ["http://localhost:3000", "http://localhost:5173", "http://localhost:5174"],
            //                         redirectSignOut: ["http://localhost:3000/", "http://localhost:5173/", "http://localhost:5174/"],
            //                         responseType: 'code',
            //                 },
            //                 username: true,
            //                     email: true, // Optional
            //                     phone: false, // Optional
            //
            //             },
            //             // signUpVerificationMethod: "",
            //             // userAttributes: "",
            //             // mfa: "",
            //             // passwordFormat: "",
            //         },
            //         region: config.region,
            //         oauth: {
            //             scope: ['email', 'openid', 'profile'],
            //                 redirectSignIn: '',
            //                 redirectSignOut: '',
            //                 responseType: 'code',
            //                 mandatorySignIn: true,
            //         },
            //     },

            const aws_original_auth_config = {
                "Auth": {
                    "domain": domain,
                    "region": region,
                    "identityPoolRegion": region,
                    "identityPoolId": identityPoolId,
                    "userPoolId": userPoolId,
                    // "userPoolClientId": userPoolClientId,
                    "userPoolWebClientId": userPoolClientId,
                    "clientId": userPoolClientId,
                    "oauth": {
                        "domain": domain,
                        // "scope": [ "email", "profile", "openid", "aws.cognito.signin.user.admin" ],
                        // "scope": [ "email", "openid", "profile" ],
                        // "scope": [ "email" ],
                        "scope": ["openid"],
                        "redirectSignIn": window.location.protocol + "//" + window.location.hostname + ((!!window.location.port) ? ":" + window.location.port : ""),
                        "redirectSignOut": window.location.protocol + "//" + window.location.hostname + ((!!window.location.port) ? ":" + window.location.port : "") + "/",
                        "responseType": ("code" as "code")  // ... or "token", note that REFRESH token will only
                                                            // be generated when the responseType is "code"
                    }
                }
            };

            Amplify.configure(({
                // TODO: Why is this so ridiculous and how can these options be
                //       specified exclusively in amplifyconfiguration.json ???
                ...Amplify.getConfig(),
                Auth: {
                    ...Amplify.getConfig().Auth!,
                    Cognito: {
                        ...Amplify.getConfig().Auth!.Cognito!,
                        ...aws_original_auth_config.Auth,
                        loginWith: {
                            ...Amplify.getConfig().Auth!.Cognito!.loginWith!,
                            oauth: {
                                ...Amplify.getConfig().Auth!.Cognito!.loginWith!.oauth!,
                                ...aws_original_auth_config.Auth.oauth,
                                redirectSignIn: [
                                    aws_original_auth_config.Auth.oauth.redirectSignIn
                                ],
                                redirectSignOut: [
                                    aws_original_auth_config.Auth.oauth.redirectSignOut
                                ],
                                responseType: (aws_original_auth_config.Auth.oauth.responseType as "code"),
                                scopes: [
                                    ...aws_original_auth_config.Auth.oauth.scope
                                ]
                            },
                            username: true,
                        },
                        userPoolClientId: aws_original_auth_config.Auth.clientId
                    }
                }
            }) as ResourcesConfig);

            // const session: Promise<AuthSession> = fetchAuthSession();
            //
            // session
            //     .then((sess) => {
            //
            //         if (!hasAuthSession) {
            //
            //             const tokens = sess.tokens!;
            //
            //             console.log("API tokens:", tokens);
            //
            //             if (!!tokens && tokens.hasOwnProperty("idToken")) {
            //
            //                 hasAuthSession = true;
            //
            //                 console.log("API Session is authenticated:", hasAuthSession);
            //                 console.log("API Session config:", sess);
            //
            //                 console.log("idToken:", tokens.idToken!);
            //                 setState({
            //                     // authenticated_user: authenticated_user,
            //                     domain,
            //                     region,
            //                     identityPoolId,
            //                     userPoolId,
            //                     userPoolClientId,
            //                     token: tokens.idToken!
            //                 });
            //
            //                 const user: Promise<User> = getCurrentUser();
            //
            //
            //
            //
            //                 user.then((u) => {
            //                     if (!hasAuthUser) {
            //
            //                         // console.log("Initial userState:", userState);
            //
            //                         hasAuthUser = true;
            //
            //                         console.log("API User is authenticated:", hasAuthSession);
            //                         console.log("API User:", u);
            //                         console.log("API User type:", u.constructor.name);
            //
            //                         // function updateUser (u: User) {
            //                         //     try {
            //                         //         if (!!u.userId) {
            //                         //             console.log("Update userId:", u.userId);
            //                         //             dispatch(updateUserId(u.userId));
            //                         //         }
            //                         //         if (!!u.userId && !!u.username) {
            //                         //             console.log("Update username:", u.username);
            //                         //             dispatch(updateUserName(u.username));
            //                         //         }
            //                         //
            //                         //         if (!!tokens.idToken) {
            //                         //             console.log("Update user tokens:", tokens);
            //                         //             dispatch(updateUserTokens(JSON.stringify(tokens)));
            //                         //         }
            //                         //
            //                         //     } catch (e: any) {
            //                         //         console.error(e);
            //                         //     }
            //                         //
            //                         //     setState({
            //                         //         authenticated_user: u,
            //                         //         domain,
            //                         //         region,
            //                         //         identityPoolId,
            //                         //         userPoolId,
            //                         //         userPoolClientId,
            //                         //         token: tokens.idToken!
            //                         //     });
            //                         //
            //                         //     setAuthenticatedUser(u);
            //                         // }
            //
            //                         // updateUser(u);
            //                     }
            //                 });
            //             }
            //         }
            //     });

            setState({
                // authenticated_user: authenticated_user,
                domain,
                region,
                identityPoolId,
                userPoolId,
                userPoolClientId
            });
        }

    }, []);


    return (<>
        <AmplifyContext.Provider value={state}>
            {props.children}
        </AmplifyContext.Provider>
    </>);

}
