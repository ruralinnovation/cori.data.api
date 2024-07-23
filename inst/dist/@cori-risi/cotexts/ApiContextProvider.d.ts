import React, { ReactElement } from "react";
import { AxiosInstance } from 'axios';
import { JWT } from "@aws-amplify/auth";
import "./styles/ApiContextProvider.css";
interface ApiContextType {
    apiClient: AxiosInstance;
    authenticated: boolean;
    baseURL: string;
    token: JWT | null;
    data: any;
    setData: ((newData: any) => void) | null;
}
export declare const ApiContext: React.Context<ApiContextType | null>;
export default function ApiContextProvider(props: {
    children?: ReactElement;
    baseURL?: string;
    token?: JWT;
    signOut?: Function;
}): React.JSX.Element;
export {};
//# sourceMappingURL=ApiContextProvider.d.ts.map