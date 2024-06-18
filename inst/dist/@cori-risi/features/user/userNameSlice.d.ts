import { default as initialState } from '../../app/initialState.json';

export declare const userNameSlice: import('@reduxjs/toolkit').Slice<string, {
    updateUserName: (user_name: string, action: {
        payload: any;
        type: string;
    }) => string;
}, "username", "username", import('@reduxjs/toolkit').SliceSelectors<string>>;
declare const _default: import('redux').Reducer<string>;
export default _default;
export declare const updateUserName: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "username/updateUserName">;
export declare const selectUserName: (state: (typeof initialState)) => string;
export declare const selectUser: (state: (typeof initialState)) => {
    userId: string;
    username: string;
    tokens: null;
};
