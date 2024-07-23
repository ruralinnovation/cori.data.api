import React, {
    createContext,
    ReactElement,
    // useContext,
    useEffect,
    useState
} from "react";
import axios, { AxiosInstance } from 'axios';
import { fetchAuthSession, JWT } from "@aws-amplify/auth";
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

const BASE_URL = "http://localhost:8000"; // `${import.meta.env.VITE_CORI_DATA_API}`;
// TODO: From now on must pass dev/prod API url in as param to ApiContextProvider because:
// cori.data.api/lib/@cori-risi/cotexts/ApiContextProvider.tsx:22
//     const BASE_URL = `${import.meta.env.VITE_CORI_DATA_API}`;
//                               ^^^^
//     SyntaxError: Cannot use 'import.meta' outside a module
//

const apiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

interface ApiContextType {
    apiClient: AxiosInstance;
    authenticated: boolean;
    // authenticated_user: User | null;
    // autoSignOut: (() => void) | null;
    baseURL: string;
    token: JWT | null;
    data: any;
    setData: ((newData: any) => void) | null;
}

const initState: ApiContextType = {
    apiClient: apiClient,
    authenticated: false,
    // authenticated_user: null,
    // autoSignOut: null,
    baseURL: BASE_URL,
    token: null,
    data: {},
    setData: null
};

export const ApiContext = createContext<ApiContextType | null>(initState);

// let hasAuthSession = false;
// let hasAuthUser = false;
// let hasAuthClient = false;

export default function ApiContextProvider (props: { children?: ReactElement, baseURL?: string, token?: string }) {

    // const amplifyContext = useContext(AmplifyContext);
    // const authenticator = useAuthenticator();
    // const userState = useSelector(selectUser);
    // const dispatch = useDispatch();

    // const [ authenticated_user, setAuthenticatedUser ] = useState<User>(userState);

    const [ state, setState ] = useState<ApiContextType | null>(initState);

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
        //
        //                         apiClient.interceptors.request.use(
        //                             (config) => {
        //                                 const accessToken = tokens.idToken!.toString();
        //                                 if (!!accessToken) {
        //                                     config.headers.Authorization = `Bearer ${accessToken}`;
        //                                 }
        //                                 if (!!props.baseURL) {
        //                                     config.baseURL = props.baseURL;
        //                                 }
        //                                 return config;
        //                             },
        //                             (error) => Promise.reject(error)
        //                         );
        //
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
        //                     user.then((u) => {
        //                         if (!hasAuthUser) {
        //
        //                             // console.log("Initial userState:", userState);
        //                             // console.log("user type:", u.constructor.name);
        //
        //                             hasAuthUser = true;
        //
        //                             console.log("API User is authenticated:", hasAuthSession);
        //                             console.log("API User:", u);
        //
        //                             // function updateUser (u: User) {
        //                             //     try {
        //                             //         if (!!u.userId) {
        //                             //             console.log("Update userId:", u.userId);
        //                             //             dispatch(updateUserId(u.userId));
        //                             //         }
        //                             //         if (!!u.userId && !!u.username) {
        //                             //             console.log("Update username:", u.username);
        //                             //             dispatch(updateUserName(u.username));
        //                             //         }
        //                             //
        //                             //         if (!!tokens.idToken) {
        //                             //             console.log("Update user tokens:", tokens);
        //                             //             dispatch(updateUserTokens(JSON.stringify(tokens)));
        //                             //         }
        //                             //
        //                             //     } catch (e: any) {
        //                             //         console.error(e);
        //                             //     }
        //                             //
        //                             //     // setState({
        //                             //     //     apiClient: (!!hasAuthClient) ? apiClient : axios.create({
        //                             //     //         baseURL: props.baseURL || BASE_URL,
        //                             //     //         headers: {
        //                             //     //             'Content-Type': 'application/json',
        //                             //     //             'Authorization': `Bearer ${accessToken}`,
        //                             //     //         },
        //                             //     //     }),
        //                             //     //     authenticated: true,
        //                             //     //     authenticated_user: u,
        //                             //     //     baseURL: props.baseURL || BASE_URL,
        //                             //     //     autoSignOut: signOut,
        //                             //     //     token: tokens.idToken,
        //                             //     //     data: {
        //                             //     //         ...state.data,
        //                             //     //     }
        //                             //     // });
        //                             //
        //                             //     setAuthenticatedUser(u);
        //                             // }
        //
        //                             // updateUser(u);
        //                         }
        //                     });
        //                 }
        //             }
        //         })
        //         .catch((e: any) => {
        //             console.log("API Session ERROR:", e);
        //         });
        //
        // } else {

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
                apiClient: apiClient,
                authenticated: false,
                // authenticated_user: authenticated_user,
                // autoSignOut: autoSignOut,
                baseURL: props.baseURL || BASE_URL,
                token: null,
                data: {},
                setData
            });
        // }

    }, []);

    return (<>
        <ApiContext.Provider value={state}>
            {/*<ApolloGraphQLProviderRedux aws_amplify_token={token} setReady={setReady}>*/}
                {props.children}
            {/*</ApolloGraphQLProviderRedux>*/}
        </ApiContext.Provider>
    </>);
}
