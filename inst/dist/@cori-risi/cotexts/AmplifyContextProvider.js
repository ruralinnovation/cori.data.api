/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React, { createContext, useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json.js';

Amplify.configure(amplifyconfig);
const initAmplifyContext = {
    domain: undefined,
    region: undefined,
    identityPoolId: undefined,
    userPoolId: undefined,
    userPoolClientId: undefined,
};
const AmplifyContext = createContext(initAmplifyContext);
function AmplifyContextProvider(props) {
    const [state, setState] = useState(initAmplifyContext);
    useEffect(() => {
        if (!!props.domain
            && !!props.region
            && !!props.identityPoolId
            && !!props.userPoolId
            && !!props.userPoolClientId) {
            const { domain, region, identityPoolId, userPoolId, userPoolClientId } = props;
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
                        "responseType": "code" // ... or "token", note that REFRESH token will only
                        // be generated when the responseType is "code"
                    }
                }
            };
            Amplify.configure(Object.assign(Object.assign({}, Amplify.getConfig()), { Auth: Object.assign(Object.assign({}, Amplify.getConfig().Auth), { Cognito: Object.assign(Object.assign(Object.assign({}, Amplify.getConfig().Auth.Cognito), aws_original_auth_config.Auth), { loginWith: Object.assign(Object.assign({}, Amplify.getConfig().Auth.Cognito.loginWith), { oauth: Object.assign(Object.assign(Object.assign({}, Amplify.getConfig().Auth.Cognito.loginWith.oauth), aws_original_auth_config.Auth.oauth), { redirectSignIn: [
                                    aws_original_auth_config.Auth.oauth.redirectSignIn
                                ], redirectSignOut: [
                                    aws_original_auth_config.Auth.oauth.redirectSignOut
                                ], responseType: aws_original_auth_config.Auth.oauth.responseType, scopes: [
                                    ...aws_original_auth_config.Auth.oauth.scope
                                ] }), username: true }), userPoolClientId: aws_original_auth_config.Auth.clientId }) }) }));
            setState({
                domain,
                region,
                identityPoolId,
                userPoolId,
                userPoolClientId
            });
        }
    }, []);
    return (React.createElement("div", { className: "amplify-context" }, props.children));
}

export { AmplifyContext, AmplifyContextProvider as default };
//# sourceMappingURL=AmplifyContextProvider.js.map
