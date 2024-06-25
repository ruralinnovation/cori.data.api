// react-context.js
import { createContext } from 'react';
import { createRoot } from 'react-dom/client';

const CDAContext = createContext({});

export default function CDAContextWrapper({ children }: any) {
    const root = createRoot(document.getElementById('root')!);

    return (
        <CDAContext.Provider value={root}>
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
