// react-context.js
import { createContext, useEffect, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';

const CDAContext = createContext<Root | null>(null);

export default function CDAContextWrapper({ children }: any) {
    const [root, setRoot] = useState<Root | null>(null);

    useEffect(() => {
        if (!root) {
            console.log("UPDATE CDAContextWrapper root!")
            setRoot(createRoot(document.getElementById('root')!));
        }
    }, [root]);

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
