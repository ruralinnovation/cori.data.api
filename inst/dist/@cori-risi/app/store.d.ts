import { default as AppState } from './AppState';

declare const store: import('@reduxjs/toolkit').EnhancedStore<{
    user: {
        userId: string;
        username: string;
        tokens: null;
    };
}, import('redux').UnknownAction, import('@reduxjs/toolkit').Tuple<[import('redux').StoreEnhancer<{
    dispatch: import('redux-thunk').ThunkDispatch<{
        user: {
            userId: string;
            username: string;
            tokens: null;
        };
    }, undefined, import('redux').UnknownAction>;
}>, import('redux').StoreEnhancer]>>;
export default store;
export type { AppState };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
