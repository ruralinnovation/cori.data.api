/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:8000"; // `${import.meta.env.VITE_CORI_DATA_API}`;
// TODO: From now on must pass dev/prod API url in as param to ApiContextProvider because:
// cori.data.api/lib/@cori-risi/cotexts/ApiContextProvider.tsx:22
//     const BASE_URL = `${import.meta.env.VITE_CORI_DATA_API}`;
//                               ^^^^
//     SyntaxError: Cannot use 'import.meta' outside a module
//
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});
const initState = {
    apiClient: apiClient,
    authenticated: false,
    // authenticated_user: null,
    // autoSignOut: null,
    baseURL: BASE_URL,
    token: null,
    data: {},
    setData: null
};
const ApiContext = createContext(initState);
// let hasAuthSession = false;
// let hasAuthUser = false;
// let hasAuthClient = false;
function ApiContextProvider(props) {
    const [state, setState] = useState(initState);
    function setData(newData) {
        const currentState = state;
        setState(Object.assign(Object.assign({}, currentState), { token: props.token || null, data: Object.assign(Object.assign({}, currentState.data), newData), setData: setData }));
    }
    useEffect(() => {
        // if (
        //     amplifyContext !== null
        //     && !!amplifyContext .domain
        //     && !!amplifyContext .region
        //     && !!amplifyContext .identityPoolId
        //     && !!amplifyContext .userPoolId
        //     && !!amplifyContext .userPoolClientId
        // ) {
        //
        //     const session = fetchAuthSession();
        //     const user: Promise<User> = getCurrentUser();
        //
        //     session
        //         .then((sess) => {
        //
        //             if (!hasAuthSession) {
        //
        //                 hasAuthSession = true;
        //
        //                 console.log("API Session is authenticated:", hasAuthSession);
        //                 console.log("API Session config:", sess);
        //
        //                 const {
        //                     // signIn,
        //                     // signUp,
        //                     // forceNewPassword,
        //                     // confirmResetPassword,
        //                     // confirmSignIn,
        //                     // confirmSignUp,
        //                     // confirmVerifyUser,
        //                     // forgotPassword,
        //                     // setupTotp,
        //                     // verifyUser,
        //                     signOut
        //                 } = authenticator;
        //
        //                 const tokens = sess.tokens!;
        //
        //                 console.log("API tokens:", tokens);
        //
        //                 if (!!tokens.idToken && !hasAuthClient) {
        //
        //                     hasAuthClient = true;
        //
        //                     // const autoSignOut = () => {
        //                     //     signOut();
        //                     //     window.alert("Please refresh this session by clicking the browser's reload button!");
        //                     //     (window as any).location = window.location.protocol + "//" + window.location.host + window.location.pathname;
        //                     // };
        //
        //                     try {
        apiClient.interceptors.request.use((config) => {
            const accessToken = props.token || null;
            if (!!accessToken && accessToken !== null) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            if (!!props.baseURL) {
                config.baseURL = props.baseURL;
            }
            return config;
        }, (error) => Promise.reject(error));
        //                         setState({
        //                             apiClient: apiClient,
        //                             authenticated: true,
        //                             // authenticated_user: authenticated_user,
        //                             // autoSignOut: autoSignOut,
        //                             baseURL: props.baseURL || BASE_URL,
        //                             token: tokens.idToken,
        //                             data: {},
        //                             setData
        //                         });
        //
        //                         // TODO: Use autoSignOut to prompt user to refresh session on API error
        //                         // const remoteAPIStartTime = performance.now();
        //                         // apiClient.get(...)
        //                         //     .then(response => ...)
        //                         //     .catch(error => {
        //                         //             const remoteAPIEndTime = performance.now();
        //                         //
        //                         //             (window as any)["remoteAPIExecutionTime"] = remoteAPIEndTime - remoteAPIStartTime;
        //                         //             console.debug(`Remote API Call Execution took   ${(window as any)["remoteAPIExecutionTime"]} ms`);
        //                         //
        //                         //             if (error.hasOwnProperty("code")) {
        //                         //                 console.log("Error code:", error.code!);
        //                         //                 if (error.code! === "ERR_BAD_REQUEST"
        //                         //                     || error.code! === "ERR_NETWORK"
        //                         //                 ) {
        //                         //                     autoSignOut();
        //                         //
        //                         //                 } else if (error.code === 'ERR_NAME_NOT_RESOLVED') {
        //                         //                     console.error('Invalid baseURL:', apiClient.defaults.baseURL);
        //                         //                     // Handle invalid baseURL error
        //                         //                 }
        //                         //             } else {
        //                         //                 console.log(error.toString());
        //                         //             }
        //                         //         });
        //
        //                     } catch (e: any) {
        //                         console.log("Axios Error:", e);
        //                     }
        //
        //                 }
        //             }
        //         })
        //         .catch((e: any) => {
        //             console.log("API Session ERROR:", e);
        //         });
        //
        // } else {
        apiClient.interceptors.request.use((config) => {
            if (!!props.baseURL) {
                config.baseURL = props.baseURL;
            }
            return config;
        }, (error) => Promise.reject(error));
        setState({
            apiClient: apiClient,
            authenticated: false,
            // authenticated_user: authenticated_user,
            // autoSignOut: autoSignOut,
            baseURL: props.baseURL || BASE_URL,
            token: props.token || null,
            data: {},
            setData
        });
        // }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(ApiContext.Provider, { value: state }, props.children)));
}

export { ApiContext, ApiContextProvider as default };
//# sourceMappingURL=ApiContextProvider.js.map
