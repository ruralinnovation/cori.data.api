declare const initialState: {
    user: {
        userId: string;
        username: string;
        tokens: null;
    };
};
type AppState = typeof initialState;
export default AppState;
export { initialState };
