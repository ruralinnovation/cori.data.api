import React, { ReactElement } from "react";
type AmplifyContextType = {
    domain?: string;
    region?: string;
    identityPoolId?: string;
    userPoolId?: string;
    userPoolClientId?: string;
};
/**
 * This is the configuration context for an Amplify app that uses authentication to connect
 * to the [CORI Data API](https://cori-data-api.ruralinnovation.us/){target=_blank}.
 */
export declare const AmplifyContext: React.Context<AmplifyContextType | null>;
/**
 * This component provides the configuration context to an Amplify/React app, which is particularly useful to one that requires
 * authentication in order to access the [CORI Data API](https://cori-data-api.ruralinnovation.us/){target=_blank}.
 * Other than the `children` prop, the parameters are
 * [AWS Cognito](https://us-east-1.console.aws.amazon.com/cognito/v2/home?region=us-east-1){target=_blank}
 * values that are passed so that the Amplify configuration method can use the specified User pool
 * and Identity pool to authenticate users (including the `cori-risi-public` user).
 *
 * ```ts
 * import { AmplifyContextProvider } from "@cori-risi/cori.data.api";
 *
 * // ...
 *
 * <AmplifyContextProvider domain={import.meta.env.VITE_COGNITO_DOMAIN}
 *                         region={import.meta.env.VITE_REGION}
 *                         identityPoolId={import.meta.env.VITE_IDENTITY_POOL_ID}
 *                         userPoolId={import.meta.env.VITE_USER_POOL_ID}
 *                         userPoolClientId={import.meta.env.VITE_USER_POOL_CLIENT_ID} >
 *     <App />
 * </AmplifyContextProvider>
 * ```
 *
 *  @param props.domain s- domain for the Cognito Hosted UI and/or OAuth 2.0 endpoints
 *  @param props.region - AWS region where Cognito service is hosted
 *  @param props.identityPoolId - Cognito Identity pool ID
 *  @param props.userPoolId - Cognito User pool ID
 *  @param props.userPoolClientId - ACognito User pool App client ID (App clients are the user pool authentication resources attached to your app).
 */
export default function AmplifyContextProvider(props: {
    children?: ReactElement<any, any> | ReactElement<any, any>[];
    domain?: string;
    region?: string;
    identityPoolId?: string;
    userPoolId?: string;
    userPoolClientId?: string;
}): React.JSX.Element;
export {};
//# sourceMappingURL=AmplifyContextProvider.d.ts.map