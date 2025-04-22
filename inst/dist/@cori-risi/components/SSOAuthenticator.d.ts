import * as React from "react";
import { ReactElement } from "react";
import '@aws-amplify/ui-react/styles.css';
import './styles/CustomAmplifyAuthenticator.css';
import './styles/images/loading.gif';
/**
 * This is a generalization of the Single Sign-On authentication component developed for the
 * [Calix Impact Tool](https://calix-impact-tool.ruralinnovation.us/){target=_blank}
 *
 * This component is best placed in `main.js` as part of the initial React root component mounting code:
 *
 * ```ts
 * import { SSOAuthenticator } from "@cori-risi/cori.data.api";
 *
 * import '@aws-amplify/ui-react/styles.css';
 * import "@cori-risi/cori.data.api/inst/dist/cori.data.api.css";
 *
 * // ...
 *
 * const AppWithAuthenticator = withAuthenticator(App, {
 *     formFields: signInFormFields,
 *     hideSignUp: true,
 *     loginMechanisms: ['username']
 * });
 *
 * export function renderToDom(container: HTMLElement) {
 *   createRoot(container).render(<React.StrictMode>
 *
 *       <AmplifyContextProvider
 *           domain={import.meta.env.VITE_COGNITO_DOMAIN}
 *           region={import.meta.env.VITE_REGION}
 *           identityPoolId={import.meta.env.VITE_IDENTITY_POOL_ID}
 *           userPoolId={import.meta.env.VITE_USER_POOL_ID}
 *           userPoolClientId={import.meta.env.VITE_USER_POOL_CLIENT_ID} >
 *           {(!!window.location.port && window.location.port.toString() === "5173") ? (
 *               <App />
 *           ) : (
 *               <SSOAuthenticator
 *                   provider={"IdentityProviderName"}
 *                   title={"App Title"}>
 *                   <AppWithAuthenticator />
 *               </SSOAuthenticator>
 *           ) : (
 *              <App />
 *           )}
 *       </AmplifyContextProvider>
 *
 *   </React.StrictMode>);
 * }
 *
 * ```
 *
 *  @param props.provider - name of the Identity Provider configured in AWS Cognito > Social and custom providers > Federated identity provider sign-in
 *  @param props.title - name of the application (should be same as the value of the title element in index.html)
 *  @param props.description - (optional) description or instructions to be displayed on authentication component
 *  @param props.logo - (optional) imported svg file (see example) to be displayed on authentication component
 */
export default function SSOAuthenticator(props: {
    children?: ReactElement;
    provider?: string;
    title?: string;
    description?: string;
    logo?: string;
}): React.JSX.Element;
//# sourceMappingURL=SSOAuthenticator.d.ts.map