import { Amplify, Auth, Hub, Logger } from "aws-amplify";

const logger = new Logger('AmplifyService');

export default class AmplifyService {

    constructor () {}

    static configure(aws_config, setConfig) {
        if (typeof setConfig === 'function') {
            setConfig(Amplify.configure(aws_config));
        } else {
            Amplify.configure(aws_config);
        }
        return aws_config;
    }

    /**
     * Initiates federated sign-in. When custom provider is passed in, will redirect to IDP without showing hosted ui.
     * @param customProvider Cognito Identity Provider Id
     */
    static federatedLogin (customProvider) {
        console.log(`Attempt federated login ${(!!customProvider) ? "with provider: " + customProvider : ""} ...`);
        logger.info(`Attempt federated login ${(!!customProvider) ? "with provider: " + customProvider : ""} ...`);
        if (!!customProvider) {
            return Auth.federatedSignIn({
                provider: customProvider
            });
        } else {
            return Auth.federatedSignIn();
        }
    }

    static async getAccessJwtToken() {
        try {
            const session = await Auth.currentSession();
            const accessToken = session.getAccessToken();
            return accessToken.getJwtToken();

        } catch (error) {
            logger.error("Cannot get JWT Token because Amplify is not currently authenticated: ", error);
            throw error;
        }
    }

    static async getIdToken () {
        try {
            const session = await Auth.currentSession();
            const idToken = session.getIdToken()
            return idToken.getJwtToken();

        } catch (error) {
            logger.error('Unable to get ID token', error);
            throw error;
        }
    }

    static async getClaims () {
        try {
            const session = await Auth.currentSession();
            const idToken = session.getIdToken();
            const payload = idToken.decodePayload();

            return {
                username: payload['cognito:username'],
                email: payload.email,
                groups: payload['cognito:groups'] ? payload['cognito:groups'] : [],
            };

        } catch (error) {
            logger.error("Cannot get claims because Amplify is not currently authenticated: ", error);
            throw error;
        }
    }

    static async getCredentials () {
        try {
            const credentials = await Auth.currentUserCredentials();
            return Auth.essentialCredentials(credentials);
        } catch (error) {
            logger.error("Error retrieving credentials: ", error);
            throw error;
        }
    }

    static async getUserId (setUser) {
        let email = null;

        try {
            const user = await Auth.currentAuthenticatedUser();
            if (typeof setUser === 'function') {
                setUser(user);
            }
            if (user.hasOwnProperty("identities") && user.identities.length > 0) {
                // Federated Auth
                email = user.identities[0].userId;
            } else {
                // User Pool Auth
                email = user.email;
            }

        } catch (error) {
            logger.error("Amplify is not currently authenticated: ", error);
        }

        return email;
    }

    static async isAuthenticated (setUser) {
        try {
            const user = await Auth.currentAuthenticatedUser();
            if (typeof setUser === 'function') {
                setUser(user);
            }
            return true;
        } catch (error) {
            logger.error("Amplify is not currently authenticated: ", error);
            return false
        }
    }

    static async setHubListener (updateAuthUser) {
        logger.info("Set Hub listener called with current updateAuthUser:", JSON.stringify(updateAuthUser));

        try {
            Hub.listen('auth', ({ payload: { event, data } }) => {

                logger.info("Call Hub listener called with event:", event);

                switch (event) {
                    case 'signIn':
                        this.getClaims()
                            .then(claims => {
                                if (!claims) {
                                    if (!!this.isAuthenticated()) {
                                        logger.info("No authenticated claims found")
                                    } else {
                                        logger.info("Amplify is not currently authenticated");
                                        // AmplifyService.federatedLogin('Google');
                                    }
                                } else {
                                    updateAuthUser({
                                        username: claims.username,
                                        userType: 'user',
                                        groups: claims.groups,
                                        email: claims.email,
                                    });
                                }
                            })
                            .catch(error => {
                                logger.error("Cannot get claims because Amplify is not currently authenticated: ", error);
                                //window.location.replace(`${window.location.origin}/error-pages/error-500`);
                            });
                        break;
                    default: // case 'signOut':
                        logger.info('Sign out');
                        break;
                }
            });
        } catch (error) {
            logger.error("Cannot get claims: ", error);
        }
    }
}

