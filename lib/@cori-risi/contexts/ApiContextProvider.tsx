import React, {
    createContext,
    ReactElement,
    // useContext,
    useEffect,
    useState
} from "react";
import axios, { AxiosInstance } from 'axios';
import { AuthTokens, JWT } from "@aws-amplify/auth";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     updateUserId,
//     updateUserName,
//     updateUserTokens,
//     selectUser
// } from "../features";
// import { User } from '../models';

import "./styles/ApiContextProvider.css";
import { User } from "../models";

const BASE_URL = "https://cori-data-api.ruralinnovation.us/"; // `${import.meta.env.VITE_CORI_DATA_API}`;
// TODO: From now on must pass dev/prod API url in as param to ApiContextProvider because:
// cori.data.api/lib/@cori-risi/cotexts/ApiContextProvider.tsx:22
//     const BASE_URL = `${import.meta.env.VITE_CORI_DATA_API}`;
//                               ^^^^
//     SyntaxError: Cannot use 'import.meta' outside a module
//

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

/**
 * This is the interface/type of the [`ApiContext`](../variables/ApiContext.md).
 *
 * @property apiClient Axios client for RESTful services
 * @property authenticated `true` if the ApiContextProvider has established an authenticated session
 * @property authenticated_user the current user state if the ApiContextProvider has established an authenticated session
 * @property autoSignOut a function that can be called to terminate the current session (if using authentication)
 * @property baseURL Base URL for RESTful service
 * @property token id token retrieved from Cognito which is used in requests made by the `apiClient`  (if using authentication)
 * @property data read-only data store
 * @property setData setter to update data store
 * @interface
 */
export interface ApiContextType {
    apiClient: AxiosInstance;
    authenticated: boolean;
    authenticated_user: User | null;
    autoSignOut: (() => void) | null;
    baseURL: string;
    token: JWT | null;
    data: any;
    setData: ((newData: any) => void);
}

const apiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

const apiData: any = {};

const initState: ApiContextType = {
    apiClient: apiClient,
    authenticated: false,
    authenticated_user: null,
    autoSignOut: null,
    baseURL: BASE_URL,
    token: null,
    data: {
        get: () => apiData,
        set: (newData: any) => {
            for (const d in newData) {
                if (newData.hasOwnProperty[d]) {
                    apiData[d] = newData;
                }
            }
        }
    },
    setData: (newData: any) => {
        for (const d in newData) {
            if (newData.hasOwnProperty[d]) {
                apiData[d] = newData;
            }
        }
    }
};

/**
 * This is the data/api context for a React app that uses network requests to fetch data from either a RESTful
 * service backend or a GraphQL service backend (both are available in the
 * [CORI Data API](https://cori-data-api.ruralinnovation.us/){target=_blank}). See
 * [`ApiContextType`](../interfaces/ApiContextType.md) for a list of props offered by this context.
 *
 * Note that GraphQL queries require a special client that can be instantiated by an additional context provider component
 * (i.e. [ApolloGraphQLProvider](https://github.com/ruralinnovation/amplify-bcat/tree/main/src/%40cori-risi/bcat/contexts){target=_blank}).
 *
 */
export const ApiContext = createContext<ApiContextType | null>(initState);

let hasAuthSession = false;
let hasAuthUser = false;
let hasAuthClient = false;

/**
 * This component provides the API/data service context ([`ApiContext`](../variables/ApiContext.md)) to a React
 * application. The following example assumes that the `App` component  has been configured by the
 * [`AmplifyContextProvider`](../functions/AmplifyContextProvider.md) to allow for authentication
 * with AWS Cognito, but this provider can also be used to setup an ApiContext with no authentication (by only using
 * the `baseURL` param/prop and disregarding the other props):
 *
 * ```ts
 * import {
 *     withAuthenticator,
 *     useAuthenticator,
 *     UseAuthenticator, useTheme, Heading
 * } from '@aws-amplify/ui-react';
 * import { fetchAuthSession } from "@aws-amplify/auth";
 * import { getCurrentUser } from "@aws-amplify/auth/cognito";
 * import { AmplifyContext, ApiContextProvider } from "@cori-risi/cori.data.api";
 *
 * // ...
 *
 * const App = () => {
 *
 *   const amplifyContext = useContext(AmplifyContext);
 *   const authenticator: UseAuthenticator = useAuthenticator();
 *
 *   // ...
 *
 *     return (
 *       <ApiContextProvider baseURL={import.meta.env.VITE_CORI_DATA_API}
 *                           fetchAuthSession={fetchAuthSession}
 *                           getCurrentUser={getCurrentUser}
 *                           signOut={authenticator.signOut} >
 *         <AppComponentsThatNeedAccessToAPI />
 *       </ApiContextProvider>
 *     );
 * }
 *
 * export default withAuthenticator(App, {
 *     ...
 * });
 * ```
 *
 *  @param props.baseURL - Base URL for the RESTful API endpoint, e.g., https://cori-data-api.ruralinnovation.us.
 *  @param props.fetchAuthSession - An optional function from the Amplify Auth package to start an authenticated session
 *  @param props.getCurrentUser - An optional function from the Amplify Cognito package to fetch the current authenticated user (if any)
 *  @param props.signOut - An optional function that is one of many destructured props contained in the Amplify authenticator context (returned by the useAuthenticator() hoook), used to sign out the current user.
 */
export default function ApiContextProvider (props: {
    children?: ReactElement<any, any> | ReactElement<any, any>[],
    baseURL?: string,
    fetchAuthSession?: Function,
    getCurrentUser?: Function,
    signOut?: Function
}) {

    // const [ authenticated_user, setAuthenticatedUser ] = useState<User | null>(null);
    // const userState = useSelector(selectUser);
    // const dispatch = useDispatch();

    const [ state, setState ] = useState<ApiContextType>({
        ...initState,
        baseURL: (!!props.baseURL) ? props.baseURL : BASE_URL,
        setData
    });

    function setData(newData: any) {
        const currentState: ApiContextType = state!;
        setState({
            ...currentState,
            data: {
                ...currentState.data,
                ...newData
            },
            setData: setData
        });
    }

    if (!!props.baseURL && props.baseURL.length > 0) {
        apiClient.interceptors.request.use(
            (config) => {
                config.baseURL = props.baseURL;
                console.log("API baseURL updated:", config.baseURL);
                return config;
            },
            (error) => Promise.reject(error)
        );
    }

    useEffect(() => {

        setState({
            ...state,
            autoSignOut: (!!props.signOut && typeof props.signOut === "function") ? () => {
                const { signOut } = props;
                (signOut!)();
                window.alert("Please refresh this session by clicking the browser's reload button!");
                (window as any).location = window.location.protocol + "//" + window.location.host + window.location.pathname;
            } : null,
            baseURL: (!!props.baseURL) ? props.baseURL : BASE_URL,
            // setData
        });

        if (!!props.fetchAuthSession) {

            const {
                fetchAuthSession
            } = props;

            const session: Promise<AuthSession> = fetchAuthSession();

            session
                .then((sess) => {

                    if (!hasAuthSession) {

                        const tokens = sess.tokens!;

                        console.log("API tokens:", tokens);

                        if (!!tokens && tokens.hasOwnProperty("idToken")) {

                            hasAuthSession = true;

                            console.log("API Session is authenticated:", hasAuthSession);
                            console.log("API Session config:", sess);

                            console.log("idToken:", tokens.idToken!);

                            apiClient.interceptors.request.use(
                                (config) => {
                                    const accessToken = tokens.idToken!;
                                    if (!!accessToken) {
                                        config.headers.Authorization = `Bearer ${accessToken}`;
                                    }
                                    if (!!props.baseURL) {
                                        config.baseURL = props.baseURL;
                                    }
                                    return config;
                                },
                                (error) => Promise.reject(error)
                            );

                            setState({
                                ...state,
                                authenticated: true,
                                autoSignOut: (!!props.signOut && typeof props.signOut === "function") ? () => {
                                    const { signOut } = props;
                                    (signOut!)();
                                    window.alert("Please refresh this session by clicking the browser's reload button!");
                                    (window as any).location = window.location.protocol + "//" + window.location.host + window.location.pathname;
                                } : null,
                                baseURL: props.baseURL || BASE_URL,
                                // setData,
                                token: tokens.idToken!
                            });

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

                                const user: Promise<User> = getCurrentUser();

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

                                            setState({
                                                ...state,
                                                authenticated: true,
                                                authenticated_user: u,
                                                autoSignOut: (!!props.signOut && typeof props.signOut === "function") ? () => {
                                                    const { signOut } = props;
                                                    (signOut!)();
                                                    window.alert("Please refresh this session by clicking the browser's reload button!");
                                                    (window as any).location = window.location.protocol + "//" + window.location.host + window.location.pathname;
                                                } : null,
                                                baseURL: props.baseURL || BASE_URL,
                                                // setData,
                                                token: tokens.idToken!
                                            });

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

    return (<>
        <ApiContext.Provider value={state}>
            {/*<ApolloGraphQLProviderRedux aws_amplify_token={token} setReady={setReady}>*/}
                {props.children}
            {/*</ApolloGraphQLProviderRedux>*/}
        </ApiContext.Provider>
    </>);
}
