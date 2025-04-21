/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { signInWithRedirect, AuthError, fetchAuthSession } from 'aws-amplify/auth';
import '../../cori.data.api.js';
import '@aws-amplify/ui-react/styles.css';
import coriLogo from './Full-Logo_CORI_Dark-Teal.svg.js';
import { AmplifyContext } from '../contexts/AmplifyContextProvider.js';

let signInAttemptCount_local = 0;
let hasAuthSession_local = false;
/**
 * This is a generalization of the Single Sign-On authentication component developed for the
 * [Calix Impact Tool](https://calix-impact-tool.ruralinnovation.us/){target=_blank}
 *
 * This component is best placed in `main.js` as part of the React mounting code:
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
 *  @param provider - string name of the Identity Provider configured in AWS Cognito > Social and custom providers > Federated identity provider sign-in
 *  @param title - string name of the application (should be same as the value of the title element in index.html)
 *  @param description - string (optional) description or instructions to be displayed on authentication component
 *  @param logo - string imported svg file (see example)
 */
function SSOAuthenticator(props) {
    const amplifyContext = useContext(AmplifyContext);
    const [hasAuthSession, setAuthSession] = useState(false);
    const [signInAttemptCount, setSignInAttemptCount] = useState(0);
    const [visibility, setVisibility] = useState({ "visibility": "hidden" });
    useEffect(() => {
        setTimeout(async () => {
            // form data-amplify-form="" data-amplify-authenticator-signin="" method="post"
            const amplifyAuthenticatorForm = document.querySelector('form[data-amplify-form]');
            if (amplifyAuthenticatorForm !== null) {
                const brandingInformation = (document.getElementById("branding-info") === null) ?
                    document.createElement("div") : document.getElementById("branding-info");
                brandingInformation.id = "branding-info";
                brandingInformation.innerHTML = `            
  <span class="cori-logo"><img src="${(!!props.logo && props.logo !== null) ? props.logo : coriLogo}"  alt="${props.title + " Logo"}"/></span>
  <p></p>
  <br />
  <h4>${props.title}</h4>
`;
                console.log(amplifyAuthenticatorForm);
                (amplifyAuthenticatorForm).before(brandingInformation);
                const signInButton = amplifyAuthenticatorForm.querySelector('.amplify-button[type="submit"]');
                if (signInButton !== null && signInButton.innerHTML === "Sign in") {
                    signInButton.innerHTML = `Continue to authenticate with ${props.provider}`;
                    signInButton.onclick = async function () {
                        console.log("Sign In attempts: ", signInAttemptCount);
                        setSignInAttemptCount(1);
                        if (props.hasOwnProperty("provider") && props.provider.length > 0) {
                            const authResponse = await (signInWithRedirect({
                                provider: {
                                    custom: props.provider
                                }
                            })
                                .catch((error) => {
                                if (error instanceof AuthError) {
                                    console.log(error);
                                    if (error.name === 'UserAlreadyAuthenticatedException') ;
                                }
                            }));
                            console.log("Completed signInWithRedirect:", authResponse);
                        }
                    };
                    const amplifyFormFieldset = amplifyAuthenticatorForm.querySelector('fieldset.amplify-flex');
                    if (amplifyFormFieldset !== null) {
                        amplifyFormFieldset.style.display = "none";
                    }
                    const privacyInformation = (document.getElementById("privacy-info") === null) ?
                        document.createElement("div") :
                        document.getElementById("privacy-info");
                    privacyInformation.id = "privacy-info";
                    privacyInformation.innerHTML = `
                    <p></p>
                    <p>This Site uses cookies to offer you a better browsing experience and to analyze Site
                        traffic. By continuing to access the Site, you consent to our use of cookies and storage and use of
                        your data as provided in our <a href="http://ruralinnovation.us/privacy-policy/" target="_blank">Privacy Policy</a>.
                    </p>
                    <p></p>
`;
                    const footerLoader = document.querySelector('[data-amplify-footer]');
                    if (footerLoader !== null) {
                        footerLoader.style.background = "none";
                        // (footerLoader).after(privacyInformation!);
                        (footerLoader).before(privacyInformation);
                    }
                }
            }
            if (!!amplifyContext
                && !!amplifyContext.domain
                && !!amplifyContext.region
                && !!amplifyContext.identityPoolId
                && !!amplifyContext.userPoolId
                && !!amplifyContext.userPoolClientId
                && (!hasAuthSession && !hasAuthSession_local)) {
                console.log("Amplify configured with: ", Object.assign({}, Amplify.getConfig()));
                hasAuthSession_local = true;
                signInAttemptCount_local = 1;
                setAuthSession(hasAuthSession_local);
                if (window.location.search.match("code") !== null) {
                    if (window.location.search.match("error") === null)
                        await (fetchAuthSession()
                            .then((sess) => {
                            console.log(sess);
                            if (signInAttemptCount < 1) {
                                console.log("Previous sign-in attempts: ", signInAttemptCount);
                                setSignInAttemptCount(signInAttemptCount_local);
                                if (!!sess && sess.hasOwnProperty("tokens") && sess["tokens"].hasOwnProperty("idToken")) {
                                    /* If we CANNOT fetch a valid token (idToken) then present user with button to initiating SSO signin */
                                    setVisibility({
                                        "visibility": "visible"
                                    });
                                }
                            }
                        })
                            .catch((error) => {
                            setVisibility({
                                "visibility": "visible"
                            });
                            console.log(error);
                            // console.log(error.cause);
                            console.log(error.stack);
                            console.log(error.recoverySuggestion);
                            if (error.hasOwnProperty("code")) {
                                console.log("Error code:", error.code);
                                // if (error.code! === "ERR_BAD_REQUEST"
                                //     || error.code! === "ERR_NETWORK"
                                // ) {
                                //     autoSignOut();
                                //
                                // } else if (error.code === 'ERR_NAME_NOT_RESOLVED') {
                                //     console.error('Invalid baseURL:', apiClient.defaults.baseURL);
                                //     // Handle invalid baseURL error
                                // }
                            }
                            else {
                                console.log(error.toString());
                            }
                        }));
                }
                else if (window.location.search.match("error") === null) {
                    // ... if no URL query param "code", silently sign-in (refresh)
                    await (signInWithRedirect({
                        provider: {
                            custom: props.provider
                        }
                    })
                        .catch((error) => {
                        if (error instanceof AuthError) {
                            console.log(error);
                            // console.log(error.cause);
                            console.log(error.stack);
                            console.log(error.recoverySuggestion);
                            if (error.name === 'UserAlreadyAuthenticatedException') ;
                        }
                    }));
                    setVisibility({
                        "visibility": "visible"
                    });
                }
            }
            else {
                console.log(window.location.search);
            }
        }, 533);
    }, [
        amplifyContext
    ]);
    return (React.createElement("div", { className: "app-with-authenticator", style: visibility }, props.children));
}

export { SSOAuthenticator as default };
//# sourceMappingURL=SSOAuthenticator.js.map
