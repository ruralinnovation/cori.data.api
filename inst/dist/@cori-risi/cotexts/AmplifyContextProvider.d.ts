import React, { ReactElement } from "react";
type AmplifyContextType = {
    domain?: string;
    region?: string;
    identityPoolId?: string;
    userPoolId?: string;
    userPoolClientId?: string;
};
export declare const AmplifyContext: React.Context<AmplifyContextType | null>;
export default function AmplifyContextProvider(props: {
    children?: ReactElement;
    domain?: string;
    region?: string;
    identityPoolId?: string;
    userPoolId?: string;
    userPoolClientId?: string;
}): React.JSX.Element;
export {};
//# sourceMappingURL=AmplifyContextProvider.d.ts.map