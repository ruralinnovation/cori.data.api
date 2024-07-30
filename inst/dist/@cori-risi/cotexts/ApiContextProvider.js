/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React__default, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:8000"; // `${import.meta.env.VITE_CORI_DATA_API}`;
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});
const initState = {
    apiClient: apiClient,
    authenticated: false,
    authenticated_user: null,
    autoSignOut: null,
    baseURL: BASE_URL,
    token: null,
    data: {},
    setData: null
};
const ApiContext = createContext(initState);
let hasAuthSession = false;
let hasAuthUser = false;
function ApiContextProvider(props) {
    useState(null);
    // const userState = useSelector(selectUser);
    // const dispatch = useDispatch();
    const [state, setState] = useState(initState);
    function setData(newData) {
        const currentState = state;
        setState(Object.assign(Object.assign({}, currentState), { data: Object.assign(Object.assign({}, currentState.data), newData), setData: setData }));
    }
    useEffect(() => {
        apiClient.interceptors.request.use((config) => {
            if (!!props.baseURL) {
                config.baseURL = props.baseURL;
            }
            return config;
        }, (error) => Promise.reject(error));
        setState(Object.assign(Object.assign({}, state), { autoSignOut: (!!props.signOut && typeof props.signOut === "function") ? () => {
                const { signOut } = props;
                (signOut)();
                window.alert("Please refresh this session by clicking the browser's reload button!");
                window.location = window.location.protocol + "//" + window.location.host + window.location.pathname;
            } : null, baseURL: (!!props.baseURL) ? props.baseURL : BASE_URL, setData }));
        if (!!props.fetchAuthSession) {
            const { fetchAuthSession } = props;
            const session = fetchAuthSession();
            session
                .then((sess) => {
                if (!hasAuthSession) {
                    const tokens = sess.tokens;
                    console.log("API tokens:", tokens);
                    if (!!tokens && tokens.hasOwnProperty("idToken")) {
                        hasAuthSession = true;
                        console.log("API Session is authenticated:", hasAuthSession);
                        console.log("API Session config:", sess);
                        console.log("idToken:", tokens.idToken);
                        apiClient.interceptors.request.use((config) => {
                            const accessToken = tokens.idToken;
                            if (!!accessToken) {
                                config.headers.Authorization = `Bearer ${accessToken}`;
                            }
                            if (!!props.baseURL) {
                                config.baseURL = props.baseURL;
                            }
                            return config;
                        }, (error) => Promise.reject(error));
                        setState(Object.assign(Object.assign({}, state), { authenticated: true, autoSignOut: (!!props.signOut && typeof props.signOut === "function") ? () => {
                                const { signOut } = props;
                                (signOut)();
                                window.alert("Please refresh this session by clicking the browser's reload button!");
                                window.location = window.location.protocol + "//" + window.location.host + window.location.pathname;
                            } : null, baseURL: props.baseURL || BASE_URL, setData, token: tokens.idToken }));
                        // TODO: Use autoSignOut to prompt user to refresh session on API error
                        // const remoteAPIStartTime = performance.now();
                        // apiClient.get(...)
                        //     .then(response => ...)
                        //     .catch(error => {
                        //             const remoteAPIEndTime = performance.now();
                        //
                        //             (window as any)["remoteAPIExecutionTime"] = remoteAPIEndTime - remoteAPIStartTime;
                        //             console.debug(`Remote API Call Execution took   ${(window as any)["remoteAPIExecutionTime"]} ms`);
                        //
                        //             if (error.hasOwnProperty("code")) {
                        //                 console.log("Error code:", error.code!);
                        //                 if (error.code! === "ERR_BAD_REQUEST"
                        //                     || error.code! === "ERR_NETWORK"
                        //                 ) {
                        //                     autoSignOut();
                        //
                        //                 } else if (error.code === 'ERR_NAME_NOT_RESOLVED') {
                        //                     console.error('Invalid baseURL:', apiClient.defaults.baseURL);
                        //                     // Handle invalid baseURL error
                        //                 }
                        //             } else {
                        //                 console.log(error.toString());
                        //             }
                        //         });
                        if (!!props.getCurrentUser) {
                            const { getCurrentUser } = props;
                            const user = getCurrentUser();
                            user.then((u) => {
                                if (!hasAuthUser) {
                                    // console.log("Initial userState:", userState);
                                    hasAuthUser = true;
                                    console.log("API User is authenticated:", hasAuthSession);
                                    console.log("API User:", u);
                                    console.log("API User type:", u.constructor.name);
                                    // function updateUser (u: User) {
                                    //     try {
                                    //         if (!!u.userId) {
                                    //             console.log("Update userId:", u.userId);
                                    //             dispatch(updateUserId(u.userId));
                                    //         }
                                    //         if (!!u.userId && !!u.username) {
                                    //             console.log("Update username:", u.username);
                                    //             dispatch(updateUserName(u.username));
                                    //         }
                                    //
                                    //         if (!!tokens.idToken) {
                                    //             console.log("Update user tokens:", tokens);
                                    //             dispatch(updateUserTokens(JSON.stringify(tokens)));
                                    //         }
                                    //
                                    //     } catch (e: any) {
                                    //         console.error(e);
                                    //     }
                                    setState(Object.assign(Object.assign({}, state), { authenticated: true, authenticated_user: u, autoSignOut: (!!props.signOut && typeof props.signOut === "function") ? () => {
                                            const { signOut } = props;
                                            (signOut)();
                                            window.alert("Please refresh this session by clicking the browser's reload button!");
                                            window.location = window.location.protocol + "//" + window.location.host + window.location.pathname;
                                        } : null, baseURL: props.baseURL || BASE_URL, setData, token: tokens.idToken }));
                                    //     setAuthenticatedUser(u);
                                    // }
                                    // updateUser(u);
                                }
                            });
                        }
                    }
                }
            });
        }
    }, []);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(ApiContext.Provider, { value: state }, props.children)));
}

export { ApiContext, ApiContextProvider as default };
//# sourceMappingURL=ApiContextProvider.js.map
