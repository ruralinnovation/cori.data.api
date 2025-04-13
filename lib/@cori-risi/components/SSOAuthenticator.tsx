import * as React from "react";
import {
    ReactElement,
    useContext,
    useEffect,
    useState
} from "react";
import { Amplify } from "aws-amplify";
import { AuthTokens, AuthError, fetchAuthSession, signInWithRedirect } from 'aws-amplify/auth';
import { AmplifyContext } from "../../cori.data.api";

import '@aws-amplify/ui-react/styles.css';
import './styles/CustomAmplifyAuthenticator.css';
import './styles/images/loading.gif';

type AWSCredentials = {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
    expiration?: Date;
};

type AuthSession = {
    tokens?: AuthTokens;
    credentials?: AWSCredentials;
    identityId?: string;
    userSub?: string;
};

let signInAttemptCount_local = 0;
let hasAuthSession_local = false;

export default function SSOAuthenticator (props: { children?: ReactElement, provider?: string, title?: string, description?: string }) {

    const amplifyContext = useContext(AmplifyContext);

    const [ hasAuthSession, setAuthSession ] = useState(false);
    const [ signInAttemptCount, setSignInAttemptCount ] = useState(0);

    useEffect(() => {

        setTimeout(async () => {

            if (!!amplifyContext
                && !!amplifyContext.domain
                && !!amplifyContext.region
                && !!amplifyContext.identityPoolId
                && !!amplifyContext.userPoolId
                && !!amplifyContext.userPoolClientId
                && (!hasAuthSession && !hasAuthSession_local)
            ) {

                console.log("Amplify configured with: ", {
                    ...Amplify.getConfig()
                });

                hasAuthSession_local = true;
                signInAttemptCount_local = 1

                setAuthSession(hasAuthSession_local);

                await (fetchAuthSession!()
                        .then((sess: AuthSession) => {

                            console.log(sess);

                            if (signInAttemptCount < 1) {
                                console.log("Previous sign-in attempts: ", signInAttemptCount);

                                setSignInAttemptCount(signInAttemptCount_local);

                                if (!(sess === null && (sess as any).hasOwnProperty("tokens") && (sess as any)["tokens"].hasOwnProperty("idToken"))) {

                                    /* If we CANNOT fetch a valid token (idToken) then present user with button to initiating SSO signin */

                                    // form data-amplify-form="" data-amplify-authenticator-signin="" method="post"
                                    const amplifyAuthenticatorForm: HTMLFormElement | null = document.querySelector('form[data-amplify-form]');
                                    if (amplifyAuthenticatorForm !== null) {

                                        const brandingInformation = (document.getElementById("branding-info") === null) ?
                                            document.createElement("div") : document.getElementById("branding-info");

                                        brandingInformation!.id = "branding-info"
                                        brandingInformation!.innerHTML = `            
  <span class="cori-logo"><img src="/Full-Logo_CORI_Dark-Teal.svg" /></span>
  <p></p>
  <br />
  <h4>${props.title!}</h4>` +
                                        (props.hasOwnProperty("description") && !!(props.description!) && props.description!.length > 0) ?
  `<p>${props.description!}</p>
` : `
`;
                                        console.log(amplifyAuthenticatorForm);
                                        (amplifyAuthenticatorForm).before(brandingInformation!);

                                        const signInButton: HTMLButtonElement | null = amplifyAuthenticatorForm.querySelector('.amplify-button[type="submit"]');

                                        if (signInButton !== null && signInButton.innerHTML === "Sign in") {
                                            signInButton.innerHTML = `Continue to authenticate with ${props.provider}`;
                                            signInButton.onclick = async function () {
                                                console.log("Sign In attempts: ", signInAttemptCount);

                                                setSignInAttemptCount(1);

                                                if (props.hasOwnProperty("provider") && props.provider!.length > 0) {

                                                    const authResponse = await (signInWithRedirect({
                                                            provider: {
                                                                custom: props.provider!
                                                            }
                                                        })
                                                            .catch((error) => {

                                                                if (error instanceof AuthError) {
                                                                    console.log(error);

                                                                    if (error.name === 'UserAlreadyAuthenticatedException') {
                                                                        // do something...
                                                                    }
                                                                }
                                                            })
                                                    );

                                                    console.log("Completed signInWithRedirect:", authResponse);
                                                }
                                            };

                                            const amplifyFormFieldset: HTMLInputElement | null = amplifyAuthenticatorForm.querySelector('fieldset.amplify-flex');
                                            if (amplifyFormFieldset !== null) {
                                                amplifyFormFieldset.style.display = "none";
                                            }

                                            const privacyInformation = (document.getElementById("privacy-info") === null) ?
                                                document.createElement("div") :
                                                document.getElementById("privacy-info");
                                            privacyInformation!.id = "privacy-info"
                                            privacyInformation!.innerHTML = `
                    <p></p>
                    <p>This Site uses cookies to offer you a better browsing experience and to analyze Site
                        traffic. By continuing to access the Site, you consent to our use of cookies and storage and use of
                        your data as provided in our <a href="http://ruralinnovation.us/privacy-policy/" target="_blank">Privacy Policy</a>.
                    </p>
                    <p></p>
`;

                                            const footerLoader: HTMLDivElement | null = document.querySelector('[data-amplify-footer]');
                                            if (footerLoader !== null) {
                                                footerLoader.style.background = "none";
                                                // (footerLoader).after(privacyInformation!);
                                                (footerLoader).before(privacyInformation!);
                                            }
                                        }
                                    }
                                }
                            }
                        })
                        .catch((error) => {

                            console.log(error);
                            // console.log(error.cause);
                            console.log(error.stack);
                            console.log(error.recoverySuggestion)

                            if (error.hasOwnProperty("code")) {
                                console.log("Error code:", error.code!);
                                // if (error.code! === "ERR_BAD_REQUEST"
                                //     || error.code! === "ERR_NETWORK"
                                // ) {
                                //     autoSignOut();
                                //
                                // } else if (error.code === 'ERR_NAME_NOT_RESOLVED') {
                                //     console.error('Invalid baseURL:', apiClient.defaults.baseURL);
                                //     // Handle invalid baseURL error
                                // }
                            } else {
                                console.log(error.toString());
                            }
                        })
                );
            }
        }, 533);
    }, [
        amplifyContext
    ]);

    return (
        <div className={"app-with-authenticator"}>
            {props.children}
        </div>
    );
}
