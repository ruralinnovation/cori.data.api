import { Authenticator, Button, Heading, Image, View, useAuthenticator, useTheme } from "@aws-amplify/ui-react";
import ApolloGraphQLProvider from "../contexts/ApolloGraphQLProvider";
import ControlPanel from "./ControlPanel";
import GoogleSignIn from "./GoogleLoginButton";
import { AmplifyService } from "../services";
import { Auth } from "aws-amplify";
// import GoogleSignIn from "./GoogleLoginButton";


const components = {
    Header() {
        const { tokens } = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                {/*<Image*/}
                {/*    alt="Amplify logo"*/}
                {/*    src="https://docs.amplify.aws/assets/logo-dark.svg"*/}
                {/*/>*/}
            </View>
        );
    },

    Footer() {
        const { tokens } = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <div>
                    &copy; All Rights Reserved
                </div>
            </View>
        );
    },

    SignIn: {
        Header(props) {
            const { tokens } = useTheme();

            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >

                </Heading>
            );
        },
        // Footer() {
        //     const { toResetPassword } = useAuthenticator();
        //
        //     return (
        //         <View style={{"marginBottom": "40px"}} textAlign="center">
        //             <GoogleSignIn
        //                 googleSignIn={
        //                     async () => await AmplifyService.federatedLogin(/*'Google'*/)
        //                 }
        //                 cognitoSignOut={
        //                     async () => await Auth.signOut()
        //                 }
        //             />
        //             {/*<Button*/}
        //             {/*    fontWeight="normal"*/}
        //             {/*    onClick={toResetPassword}*/}
        //             {/*    size="small"*/}
        //             {/*    variation="link"*/}
        //             {/*>*/}
        //             {/*    Reset Password*/}
        //             {/*</Button>*/}
        //         </View>
        //     );
        // },
    },

    SignUp: {
        Header() {
            const { tokens } = useTheme();

            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Create a new account
                </Heading>
            );
        },
        Footer() {
            const { toSignIn } = useAuthenticator();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toSignIn}
                        size="small"
                        variation="link"
                    >
                        Back to Sign In
                    </Button>
                </View>
            );
        },
    },
    ConfirmSignUp: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    SetupTOTP: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    ConfirmSignIn: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    ResetPassword: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    ConfirmResetPassword: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
};

const formFields = {
    signIn: {
        username: {
            placeholder: 'Enter your email',
        },
    },
    signUp: {
        password: {
            label: 'Password:',
            placeholder: 'Enter your Password:',
            isRequired: false,
            order: 2,
        },
        confirm_password: {
            label: 'Confirm Password:',
            order: 1,
        },
    },
    forceNewPassword: {
        password: {
            placeholder: 'Enter your Password:',
        },
    },
    resetPassword: {
        username: {
            placeholder: 'Enter your email:',
        },
    },
    confirmResetPassword: {
        confirmation_code: {
            placeholder: 'Enter your Confirmation Code:',
            label: 'New Label',
            isRequired: false,
        },
        confirm_password: {
            placeholder: 'Enter your Password Please:',
        },
    },
    setupTOTP: {
        QR: {
            totpIssuer: 'test issuer',
            totpUsername: 'amplify_qr_test_user',
        },
        confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
    confirmSignIn: {
        confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
};

export default function CustomAmplifyAuthenticator (props) {

    function syncUser (user) {
        if (typeof props.setAuthenticatedUser === "function") {
            if (props.authenticated_user === null) {
                console.log("User session: ", user.signInUserSession);

                setTimeout((user) => {
                    props.setAuthenticatedUser(user);
                }, 533, user);

            } else if (!props.authenticated_user.hasOwnProperty("signInUserSession")) {
                console.log("User session: ", user.signInUserSession);

                setTimeout((user) => {
                    props.setAuthenticatedUser({
                        username: props.authenticated_user.username,
                        userType: 'admin',
                        groups: props.authenticated_user.groups,
                        email: props.authenticated_user.email,
                        signInUserSession: user.signInUserSession
                    });
                }, 533, user);
            }
        }
        return true;
    }

    return (
        // <Authenticator hide={[ SignIn ]} amplifyConfig={aws_config}>
        <Authenticator
            components={components}
            formFields={formFields}
            socialProviders={['google']}
        >
            {({ signOut, user }) => (
                (user && syncUser(user)) ? (
                    <main>
                        {props.children}

                        <ControlPanel signOut={signOut} user={props.authenticated_user} />
                    </main>

                ) : (
                    <main>
                        Authentication Error: No user

                        <ControlPanel signOut={signOut} user={props.authenticated_user} />
                    </main>
                )
            )}

        </Authenticator>

    );
}

