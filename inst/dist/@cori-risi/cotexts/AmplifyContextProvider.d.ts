import React, { ReactElement } from "react";
import { JWT } from "@aws-amplify/auth";
type AmplifyContextType = {
    domain?: string;
    region?: string;
    identityPoolId?: string;
    userPoolId?: string;
    userPoolClientId?: string;
    token: JWT | null;
};
export declare const AmplifyContext: React.Context<AmplifyContextType | null>;
export default function AmplifyContextProvider(props: {
    children?: ReactElement;
    domain?: string;
    region?: string;
    identityPoolId?: string;
    userPoolId?: string;
    userPoolClientId?: string;
    fetchAuthSession: Function;
    getCurrentUser: Function;
}): React.JSX.Element;
export {};
//# sourceMappingURL=AmplifyContextProvider.d.ts.map