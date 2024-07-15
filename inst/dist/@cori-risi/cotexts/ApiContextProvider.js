/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = ""; // `${import.meta.env.VITE_CORI_DATA_API}`;
// TODO: From now on will pass API url in as param to ApiContextProvider because:
// cori.data.api/lib/@cori-risi/cotexts/ApiContextProvider.tsx:22
//     const BASE_URL = `${import.meta.env.VITE_CORI_DATA_API}`;
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});
const initState = {
    apiClient: apiClient,
    // authenticated: false,
    // authenticated_user: null,
    // autoSignOut: null,
    baseURL: BASE_URL,
    // token: null,
    data: {},
    setData: null
};
const ApiContext = createContext(initState);
// let hasAuthSession = false;
// let hasAuthUser = false;
// let hasAuthClient = false;
function ApiContextProvider(props) {
    // const authenticator: UseAuthenticator = useAuthenticator();
    // const userState: User = useSelector(selectUser);
    // const dispatch = useDispatch();
    // const [ authenticated_user, setAuthenticatedUser ] = useState<User>(userState);
    const [state, setState] = useState(initState);
    function setData(newData) {
        const currentState = state;
        setState(Object.assign(Object.assign({}, currentState), { data: Object.assign(Object.assign({}, currentState.data), newData), setData: setData }));
    }
    useEffect(() => {
        apiClient.interceptors.request.use((config) => {
            // const accessToken = tokens.idToken!.toString();
            // if (!!accessToken) {
            //     config.headers.Authorization = `Bearer ${accessToken}`;
            // }
            if (!!props.baseURL) {
                config.baseURL = props.baseURL;
            }
            return config;
        }, (error) => Promise.reject(error));
        setState({
            apiClient: apiClient,
            baseURL: props.baseURL || BASE_URL,
            data: {},
            setData
        });
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(ApiContext.Provider, { value: state }, props.children)));
}

export { ApiContext, ApiContextProvider as default };
//# sourceMappingURL=ApiContextProvider.js.map
