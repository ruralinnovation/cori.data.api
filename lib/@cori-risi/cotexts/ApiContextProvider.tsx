import React, {
    createContext,
    ReactElement,
    // useContext,
    useEffect,
    useState
} from "react";
import axios, { AxiosInstance } from 'axios';
import { AuthTokens, JWT } from "@aws-amplify/auth";
// import { getCurrentUser } from "@aws-amplify/auth/cognito";
// import { useAuthenticator, UseAuthenticator } from "@aws-amplify/ui-react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     updateUserId,
//     updateUserName,
//     updateUserTokens,
//     selectUser
// } from "../features";
// import { User } from '../models';

// TODO: (maybe?) move the token retrieval code & state prop to AmplifyContextProvider
// import { AmplifyContext } from "./AmplifyContextProvider";

import "./styles/ApiContextProvider.css";
import { User } from "../models";
import { autoSignOut } from "../utils";

const BASE_URL = "http://localhost:8000"; // `${import.meta.env.VITE_CORI_DATA_API}`;
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

interface ApiContextType {
    apiClient: AxiosInstance;
    authenticated: boolean;
    authenticated_user: User | null;
    autoSignOut: (() => void) | null;
    baseURL: string;
    token: JWT | null;
    data: any;
    setData: ((newData: any) => void) | null;
}

const apiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

const initState: ApiContextType = {
    apiClient: apiClient,
    authenticated: false,
    authenticated_user: null,
    autoSignOut: null,
    baseURL: BASE_URL,
    token: null,
    data: {},
    setData: null
};

export const ApiContext = createContext<ApiContextType | null>(initState);

let hasAuthSession = false;
let hasAuthUser = false;
let hasAuthClient = false;

export default function ApiContextProvider (props: {
    children?: ReactElement,
    baseURL?: string,
    fetchAuthSession?: Function,
    getCurrentUser?: Function,
    signOut?: Function
}) {

    const [ authenticated_user, setAuthenticatedUser ] = useState<User | null>(null);
    // const userState = useSelector(selectUser);
    // const dispatch = useDispatch();

    const [ state, setState ] = useState<ApiContextType>(initState);

    function setData(newData: any) {
        const currentState:  ApiContextType = state!;
        setState({
            ...currentState,
            data: {
                ...currentState.data,
                ...newData
            },
            setData: setData
        });
    }

    useEffect(() => {

        apiClient.interceptors.request.use(
            (config) => {
                if (!!props.baseURL) {
                    config.baseURL = props.baseURL;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        setState({
            ...state,
            autoSignOut: (!!props.signOut && typeof props.signOut === "function") ? () => {
                const { signOut } = props;
                (signOut!)();
                window.alert("Please refresh this session by clicking the browser's reload button!");
                (window as any).location = window.location.protocol + "//" + window.location.host + window.location.pathname;
            } : null,
            baseURL: (!!props.baseURL) ? props.baseURL : BASE_URL,
            setData
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
                                setData,
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
                                                setData,
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
