import { useRef } from 'react';
import { Root } from 'react-dom/client';

interface CDAContextType {
    root: Root | null;
    useRef: typeof useRef;
}
export declare const CDAContext: import('react').Context<CDAContextType>;
export default function CDAContextWrapper({ children }: any): import("react/jsx-runtime").JSX.Element;
export declare function wrapComponent<T>(WrappedComponent: T): () => import("react/jsx-runtime").JSX.Element;
export {};
