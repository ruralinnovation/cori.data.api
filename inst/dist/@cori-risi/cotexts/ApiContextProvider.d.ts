import React, { ReactElement } from "react";
import { AxiosInstance } from 'axios';
import "./styles/ApiContextProvider.css";
interface ApiContextType {
    apiClient: AxiosInstance;
    baseURL: string;
    data: any;
    setData: ((newData: any) => void) | null;
}
export declare const ApiContext: React.Context<ApiContextType | null>;
export default function ApiContextProvider(props: {
    children?: ReactElement;
    baseURL?: string;
}): React.JSX.Element;
export {};
//# sourceMappingURL=ApiContextProvider.d.ts.map