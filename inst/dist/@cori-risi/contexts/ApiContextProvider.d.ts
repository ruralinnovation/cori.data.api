import { ReactElement } from 'react';
import { AxiosInstance } from 'axios';

interface ApiContextType {
    apiClient: AxiosInstance;
    baseURL: string;
    data: any;
}
export declare const ApiContext: import('react').Context<ApiContextType | null>;
export default function ApiContextProvider(props: {
    children?: ReactElement;
}): import("react/jsx-runtime").JSX.Element;
export {};
