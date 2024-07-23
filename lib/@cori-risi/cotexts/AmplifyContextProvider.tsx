import React, {
    createContext,
    ReactElement,
    useEffect,
    useState
} from "react";
import {Amplify, ResourcesConfig} from "aws-amplify";

import amplifyconfig from './amplifyconfiguration.json';
import { AuthTokens, JWT } from "@aws-amplify/auth";
import { User } from "../models";

Amplify.configure(amplifyconfig);

type AWSCredentials = {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
    expiration?: Date;
};

type AuthSession = {
    tokens?: AuthTokens;
    credentials?: AWSCredentials;
    identityId?: string;
    userSub?: string;
};


type  AmplifyContextType = {
    domain?: string,
    region?: string,
    identityPoolId?: string,
    userPoolId?: string,
    userPoolClientId?: string,
    token: JWT | null;
};

const initAmplifyContext: AmplifyContextType = {
    domain: undefined,
    region: undefined,
    identityPoolId: undefined,
    userPoolId: undefined,
    userPoolClientId: undefined,
    token: null
};

export const AmplifyContext = createContext<AmplifyContextType | null>(initAmplifyContext);

let hasAuthSession = false;
let hasAuthUser = false;
let hasAuthClient = false;

export default function AmplifyContextProvider(props: {
    children?: ReactElement,
    domain?: string,
    region?: string,
    identityPoolId?: string,
    userPoolId?: string,
    userPoolClientId?: string,
    fetchAuthSession: Function,
    getCurrentUser: Function,
    signOut?: Function
}) {

    const [ state, setState ] = useState<AmplifyContextType | null>(initAmplifyContext);

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
                userPoolClientId,
                fetchAuthSession,
                getCurrentUser,
                signOut
            } = props;

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

            const session: Promise<AuthSession> = fetchAuthSession();
            const user: Promise<User> = getCurrentUser();

            session
                .then((sess) => {

                    if (!hasAuthSession) {

                        hasAuthSession = true;

                        console.log("API Session is authenticated:", hasAuthSession);
                        console.log("API Session config:", sess);

                        const tokens = sess.tokens!;

                        console.log("API tokens:", tokens);

                        setState({
                            domain,
                            region,
                            identityPoolId,
                            userPoolId,
                            userPoolClientId,
                            token: tokens.idToken!
                        });
                    }
                });

            setState({
                domain,
                region,
                identityPoolId,
                userPoolId,
                userPoolClientId,
                token: null
            });
        }

    }, []);


    return (
        <div className={"amplify-context"}>
            {props.children}
        </div>
    )

}
