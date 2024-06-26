// react-context.js
import { createContext, useEffect, useState, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';

interface CDAContextType {
    root: Root | null,
    useRef: typeof useRef
}

const defaultCDAContext: CDAContextType = {
    root: null,
    useRef: useRef
};

export const CDAContext = createContext<CDAContextType>(defaultCDAContext);

export default function CDAContextWrapper({ children }: any) {
    const [ context, setContext ] = useState<CDAContextType>(defaultCDAContext);

    useEffect(() => {
        if (!context.root) {
            console.log("UPDATE CDAContextWrapper root!")
            setContext({
                root: createRoot(document.getElementById('root')!),
                useRef: useRef
            });
        }
    // }, [context]);
    }, []);

    return (
        <CDAContext.Provider value={context}>
            {children}
        </CDAContext.Provider>
    );
}

export function wrapComponent<T>(WrappedComponent: T) {
    return () => {
        return (
            <CDAContextWrapper>
                {WrappedComponent}
            </CDAContextWrapper>
        );
    };
}
