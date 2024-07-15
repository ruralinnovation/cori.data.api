import React, {
    createContext,
    ReactElement,
    useEffect,
    useState
} from "react";
import { Amplify } from "aws-amplify";

import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

type  AmplifyContextType = {
    domain?: string,
    region?: string,
    identityPoolId?: string,
    userPoolId?: string,
    userPoolClientId?: string,
};

const initAmplifyContext: AmplifyContextType = {
    domain: undefined,
    region: undefined,
    identityPoolId: undefined,
    userPoolId: undefined,
    userPoolClientId: undefined,
};

export const AmplifyContext = createContext<AmplifyContextType | null>(initAmplifyContext);

export default function AmplifyContextProvider(props: {
    children?: ReactElement,
    domain?: string,
    region?: string,
    userPoolId?: string,
    userPoolClientId?: string,
    identityPoolId?: string,

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
                userPoolClientId
            } = props;

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

            Amplify.configure({
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
            });

            setState({
                domain,
                region,
                identityPoolId,
                userPoolId,
                userPoolClientId
            });
        }

    }, []);


    return (
        <div className={"amplify-context"}>
            {props.children}
        </div>
    )

}
