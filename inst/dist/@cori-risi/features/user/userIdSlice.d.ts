import { default as initialState } from '../../app/initialState.json';

export declare const userIdSlice: import('@reduxjs/toolkit').Slice<string, {
    updateUserId: (user_id: string, action: {
        payload: any;
        type: string;
    }) => string;
}, "userId", "userId", import('@reduxjs/toolkit').SliceSelectors<string>>;
declare const _default: import('redux').Reducer<string>;
export default _default;
export declare const updateUserId: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "userId/updateUserId">;
export declare const selectUserId: (state: (typeof initialState)) => string;
export declare const selectUser: (state: (typeof initialState)) => {
    userId: string;
    username: string;
    tokens: null;
};
