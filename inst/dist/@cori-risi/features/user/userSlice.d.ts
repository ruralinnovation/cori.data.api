import { default as initialState } from '../../app/initialState.json';

export declare const userSlice: import('@reduxjs/toolkit').Slice<{
    userId: string;
    username: string;
    tokens: null;
}, {
    updateUser: (user_state: import('immer').WritableDraft<{
        userId: string;
        username: string;
        tokens: null;
    }>, action: {
        payload: any;
        type: string;
    }) => import('immer').WritableDraft<{
        userId: string;
        username: string;
        tokens: null;
    }>;
}, "user", "user", import('@reduxjs/toolkit').SliceSelectors<{
    userId: string;
    username: string;
    tokens: null;
}>>;
declare const _default: import('redux').Reducer<{
    userId: string;
    username: string;
    tokens: null;
}>;
export default _default;
export declare const updateUser: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "user/updateUser">;
export declare const selectUser: (state: (typeof initialState)) => {
    userId: string;
    username: string;
    tokens: null;
};
