import React, { ReactElement } from "react";
import { AxiosInstance } from 'axios';
import { JWT } from "@aws-amplify/auth";
import "./styles/ApiContextProvider.css";
import { User } from "../models";
/**
 * This is the interface/type of the [`ApiContext`](../variables/ApiContext.md).
 *
 * @property apiClient Axios client for RESTful services
 * @property authenticated `true` if the ApiContextProvider has established an authenticated session
 * @property authenticated_user the current user state if the ApiContextProvider has established an authenticated session
 * @property autoSignOut a function that can be called to terminate the current session (if using authentication)
 * @property baseURL Base URL for RESTful service
 * @property token id token retrieved from Cognito which is used in requests made by the `apiClient`  (if using authentication)
 * @property data read-only data store
 * @property setData setter to update data store
 * @interface
 */
export interface ApiContextType {
    apiClient: AxiosInstance;
    authenticated: boolean;
    authenticated_user: User | null;
    autoSignOut: (() => void) | null;
    baseURL: string;
    token: JWT | null;
    data: any;
    setData: ((newData: any) => void);
}
/**
 * This is the data/api context for a React app that uses network requests to fetch data from either a RESTful
 * service backend or a GraphQL service backend (both are available in the
 * [CORI Data API](https://cori-data-api.ruralinnovation.us/){target=_blank}). See
 * [`ApiContextType`](../interfaces/ApiContextType.md) for a list of props offered by this context.
 *
 * Note that GraphQL queries require a special client that can be instantiated by an additional context provider component
 * (i.e. [ApolloGraphQLProvider](https://github.com/ruralinnovation/amplify-bcat/tree/main/src/%40cori-risi/bcat/contexts){target=_blank}).
 *
 */
export declare const ApiContext: React.Context<ApiContextType | null>;
/**
 * This component provides the API/data service context ([`ApiContext`](../variables/ApiContext.md)) to a React
 * application. The following example assumes that the `App` component  has been configured by the
 * [`AmplifyContextProvider`](../functions/AmplifyContextProvider.md) to allow for authentication
 * with AWS Cognito, but this provider can also be used to setup an ApiContext with no authentication (by only using
 * the `baseURL` param/prop and disregarding the other props):
 *
 * ```ts
 * import {
 *     withAuthenticator,
 *     useAuthenticator,
 *     UseAuthenticator, useTheme, Heading
 * } from '@aws-amplify/ui-react';
 * import { fetchAuthSession } from "@aws-amplify/auth";
 * import { getCurrentUser } from "@aws-amplify/auth/cognito";
 * import { AmplifyContext, ApiContextProvider } from "@cori-risi/cori.data.api";
 *
 * // ...
 *
 * const App = () => {
 *
 *   const amplifyContext = useContext(AmplifyContext);
 *   const authenticator: UseAuthenticator = useAuthenticator();
 *
 *   // ...
 *
 *     return (
 *       <ApiContextProvider baseURL={import.meta.env.VITE_CORI_DATA_API}
 *                           fetchAuthSession={fetchAuthSession}
 *                           getCurrentUser={getCurrentUser}
 *                           signOut={authenticator.signOut} >
 *         <AppComponentsThatNeedAccessToAPI />
 *       </ApiContextProvider>
 *     );
 * }
 *
 * export default withAuthenticator(App, {
 *     ...
 * });
 * ```
 *
 *  @param props.baseURL - Base URL for the RESTful API endpoint, e.g., https://cori-data-api.ruralinnovation.us.
 *  @param props.fetchAuthSession - An optional function from the Amplify Auth package to start an authenticated session
 *  @param props.getCurrentUser - An optional function from the Amplify Cognito package to fetch the current authenticated user (if any)
 *  @param props.signOut - An optional function that is one of many destructured props contained in the Amplify authenticator context (returned by the useAuthenticator() hoook), used to sign out the current user.
 */
export default function ApiContextProvider(props: {
    children?: ReactElement;
    baseURL?: string;
    fetchAuthSession?: Function;
    getCurrentUser?: Function;
    signOut?: Function;
}): React.JSX.Element;
//# sourceMappingURL=ApiContextProvider.d.ts.map