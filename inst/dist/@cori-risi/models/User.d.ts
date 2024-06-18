import { AuthUser, GetCurrentUserOutput } from '@aws-amplify/auth/cognito';

export default interface User extends AuthUser, GetCurrentUserOutput {
    userId: string;
    username: string;
    userType?: string;
    email?: string;
    groups?: string[];
    signInUserSession?: {
        idToken: {
            payload: {
                name: string;
                email: string;
            };
        };
    };
}
