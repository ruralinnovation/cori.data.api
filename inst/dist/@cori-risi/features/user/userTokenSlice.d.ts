import { default as initialState } from '../../app/initialState.json';

export declare const userTokensSlice: import('@reduxjs/toolkit').Slice<null, {
    updateUserTokens: (tokens: null, action: {
        payload: any;
        type: string;
    }) => null;
}, "tokens", "tokens", import('@reduxjs/toolkit').SliceSelectors<null>>;
declare const _default: import('redux').Reducer<null>;
export default _default;
export declare const updateUserTokens: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "tokens/updateUserTokens">;
export declare const selectUserTokens: (state: (typeof initialState)) => null;
export declare const selectUser: (state: (typeof initialState)) => {
    userId: string;
    username: string;
    tokens: null;
};
