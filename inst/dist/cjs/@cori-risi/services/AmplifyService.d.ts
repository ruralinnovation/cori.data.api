export default class AmplifyService {
    static configure(aws_config: any, setConfig: any): any;
    /**
     * Initiates federated sign-in. When custom provider is passed in, will redirect to IDP without showing hosted ui.
     * @param customProvider Cognito Identity Provider Id
     */
    static federatedLogin(customProvider: any): Promise<import("@aws-amplify/core").ICredentials>;
    static getAccessJwtToken(): Promise<string>;
    static getIdToken(): Promise<string>;
    static getClaims(): Promise<{
        username: any;
        email: any;
        groups: any;
    }>;
    static getCredentials(): Promise<import("@aws-amplify/core").ICredentials>;
    static getUserId(setUser: any): Promise<any>;
    static isAuthenticated(setUser: any): Promise<boolean>;
}
//# sourceMappingURL=AmplifyService.d.ts.map