import React, {
    createContext,
    ReactElement,
    useEffect,
    useState
} from "react";
import axios, { AxiosInstance } from 'axios';
// import { fetchAuthSession, JWT } from "@aws-amplify/auth";
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

import "./styles/ApiContextProvider.css";

const BASE_URL = ""; // `${import.meta.env.VITE_CORI_DATA_API}`;
// TODO: From now on will pass API url in as param to ApiContextProvider because:
// cori.data.api/lib/@cori-risi/cotexts/ApiContextProvider.tsx:22
//     const BASE_URL = `${import.meta.env.VITE_CORI_DATA_API}`;

const apiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

interface ApiContextType {
    apiClient: AxiosInstance;
    // authenticated: boolean;
    // authenticated_user: User | null;
    // autoSignOut: (() => void) | null;
    baseURL: string;
    // token: JWT | null;
    data: any;
    setData: ((newData: any) => void) | null;
}

const initState: ApiContextType = {
    apiClient: apiClient,
    // authenticated: false,
    // authenticated_user: null,
    // autoSignOut: null,
    baseURL: BASE_URL,
    // token: null,
    data: {},
    setData: null
};

export const ApiContext = createContext<ApiContextType | null>(initState);

// let hasAuthSession = false;
// let hasAuthUser = false;
// let hasAuthClient = false;

export default function ApiContextProvider (props: { children?: ReactElement, baseURL?: string }) {

    // const authenticator: UseAuthenticator = useAuthenticator();
    // const userState: User = useSelector(selectUser);
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

        apiClient.interceptors.request.use(
            (config) => {
                // const accessToken = tokens.idToken!.toString();
                // if (!!accessToken) {
                //     config.headers.Authorization = `Bearer ${accessToken}`;
                // }
                if (!!props.baseURL) {
                    config.baseURL = props.baseURL;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        setState({
            apiClient: apiClient,
            baseURL: props.baseURL || BASE_URL,
            data: {},
            setData
        });

    }, []);

    return (<>
        <ApiContext.Provider value={state}>
            {/*<ApolloGraphQLProviderRedux aws_amplify_token={token} setReady={setReady}>*/}
                {props.children}
            {/*</ApolloGraphQLProviderRedux>*/}
        </ApiContext.Provider>
    </>);
}
