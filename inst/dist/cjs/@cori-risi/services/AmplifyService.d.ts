export default class AmplifyService {
    static configure(aws_config: any, setConfig: any): any;
    /**
     * Initiates federated sign-in. When custom provider is passed in, will redirect to IDP without showing hosted ui.
     * @param customProvider Cognito Identity Provider Id
     */
    static federatedLogin(customProvider: any): any;
    static getAccessJwtToken(): Promise<any>;
    static getIdToken(): Promise<any>;
    static getClaims(): Promise<{
        username: any;
        email: any;
        groups: any;
    }>;
    static getCredentials(): Promise<any>;
    static getUserId(setUser: any): Promise<any>;
    static isAuthenticated(setUser: any): Promise<boolean>;
    static setHubListener(updateAuthUser: any): Promise<void>;
}
//# sourceMappingURL=AmplifyService.d.ts.map