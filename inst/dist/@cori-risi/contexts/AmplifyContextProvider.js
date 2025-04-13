/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import * as React from 'react';
import { createContext, useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json.js';

Amplify.configure(amplifyconfig);
const initAmplifyContext = {
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
const AmplifyContext = createContext(initAmplifyContext);
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
function AmplifyContextProvider(props) {
    // const userState = useSelector(selectUser);
    // const dispatch = useDispatch();
    // const [ authenticated_user, setAuthenticatedUser ] = useState<User>(userState);
    const [state, setState] = useState((!!props.domain
        && !!props.region
        && !!props.identityPoolId
        && !!props.userPoolId
        && !!props.userPoolClientId) ? Object.assign({}, props) :
        initAmplifyContext);
    useEffect(() => {
        if (!!props.domain
            && !!props.region
            && !!props.identityPoolId
            && !!props.userPoolId
            && !!props.userPoolClientId) {
            const { domain, region, identityPoolId, userPoolId, userPoolClientId } = props;
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
                        // "scope": [ "email", "openid", "profile" ],
                        "scope": [
                            "openid",
                            "email",
                            "phone",
                            "profile",
                            "aws.cognito.signin.user.admin"
                        ],
                        "redirectSignIn": window.location.protocol + "//" + window.location.hostname + ((!!window.location.port) ? ":" + window.location.port : ""),
                        "redirectSignOut": window.location.protocol + "//" + window.location.hostname + ((!!window.location.port) ? ":" + window.location.port : "") + "/",
                        "responseType": "code" // ... or "token", note that REFRESH token will only
                        // be generated when the responseType is "code"
                    }
                }
            };
            Amplify.configure((Object.assign(Object.assign({}, Amplify.getConfig()), { Auth: Object.assign(Object.assign({}, Amplify.getConfig().Auth), { Cognito: Object.assign(Object.assign(Object.assign({}, Amplify.getConfig().Auth.Cognito), aws_original_auth_config.Auth), { loginWith: Object.assign(Object.assign({}, Amplify.getConfig().Auth.Cognito.loginWith), { oauth: Object.assign(Object.assign(Object.assign({}, Amplify.getConfig().Auth.Cognito.loginWith.oauth), aws_original_auth_config.Auth.oauth), { redirectSignIn: [
                                    aws_original_auth_config.Auth.oauth.redirectSignIn
                                ], redirectSignOut: [
                                    aws_original_auth_config.Auth.oauth.redirectSignOut
                                ], responseType: aws_original_auth_config.Auth.oauth.responseType, scopes: [
                                    ...aws_original_auth_config.Auth.oauth.scope
                                ] }), username: true }), userPoolClientId: aws_original_auth_config.Auth.clientId }) }) })));
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
    return (React.createElement(React.Fragment, null,
        React.createElement(AmplifyContext.Provider, { value: state }, props.children)));
}

export { AmplifyContext, AmplifyContextProvider as default };
//# sourceMappingURL=AmplifyContextProvider.js.map
