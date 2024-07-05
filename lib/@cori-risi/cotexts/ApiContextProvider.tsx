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

const BASE_URL = `${import.meta.env.VITE_CORI_DATA_API}`;

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

export default function ApiContextProvider (props: { children?: ReactElement }) {

    // const authenticator: UseAuthenticator = useAuthenticator();
    // const userState: User = useSelector(selectUser);
    // const dispatch = useDispatch();

    // const [ authenticated_user, setAuthenticatedUser ] = useState<User>(userState);

    const [ state, setState ] = useState<ApiContextType | null>(initState);

    const setData = (newData: any) => {
        const currentState:  ApiContextType = state!;
        setState({
            ...currentState,
            data: {
                ...currentState.data,
                ...newData
            }
        });
    };

    useEffect(() => {

        setState({
            apiClient: apiClient,
            baseURL: BASE_URL,
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
