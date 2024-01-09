/*
 * CORI Data API Package
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var uiReact = require('@aws-amplify/ui-react');
var ControlPanel = require('./ControlPanel.js');
var jsxRuntime = require('react/jsx-runtime');

const components = {
  Header() {
    const {
      tokens
    } = uiReact.useTheme();
    return /*#__PURE__*/jsxRuntime.jsx(uiReact.View, {
      textAlign: "center",
      padding: tokens.space.large
    });
  },
  Footer() {
    const {
      tokens
    } = uiReact.useTheme();
    return /*#__PURE__*/jsxRuntime.jsx(uiReact.View, {
      textAlign: "center",
      padding: tokens.space.large
    });
  },
  SignIn: {
    Header: props => {
      const {
        tokens
      } = uiReact.useTheme();
      return /*#__PURE__*/jsxRuntime.jsx(uiReact.Heading, {
        padding: `${tokens.space.xl} 0 0 ${tokens.space.xl}`,
        level: 3
      });
    }
    // Footer: () => {
    //     const { toResetPassword } = useAuthenticator();
    //
    //     function ReturnGoogleSignIn () {
    //         return (
    //         <GoogleSignIn
    //             googleSignIn={
    //                 async () => await AmplifyService.federatedLogin(/*'Google'*/)
    //             }
    //             cognitoSignOut={
    //                 async () => await Auth.signOut()
    //             }
    //         />
    //         )
    //     }
    //
    //     // <Button
    //     //     fontWeight="normal"
    //     //     onClick={toResetPassword}
    //     //     size="small"
    //     //     variation="link"
    //     // >
    //     //     Reset Password
    //     // </Button>
    //
    //     return (
    //         <View style={{"marginBottom": "40px"}} textAlign="center">
    //             {/*<ReturnGoogleSignIn />*/}
    //             <Button
    //                 fontWeight="normal"
    //                 onClick={toResetPassword}
    //                 size="small"
    //                 variation="link"
    //             >
    //                 Reset Password
    //             </Button>
    //         </View>
    //     );
    // },
  },
  SignUp: {
    Header() {
      const {
        tokens
      } = uiReact.useTheme();
      return /*#__PURE__*/jsxRuntime.jsx(uiReact.Heading, {
        padding: `${tokens.space.xl} 0 0 ${tokens.space.xl}`,
        level: 3,
        children: "Create a new account"
      });
    },
    Footer() {
      const {
        toSignIn
      } = uiReact.useAuthenticator();
      return /*#__PURE__*/jsxRuntime.jsx(uiReact.View, {
        textAlign: "center",
        children: /*#__PURE__*/jsxRuntime.jsx(uiReact.Button, {
          fontWeight: "normal",
          onClick: toSignIn,
          size: "small",
          variation: "link",
          children: "Back to Sign In"
        })
      });
    }
  },
  ConfirmSignUp: {
    Header() {
      const {
        tokens
      } = uiReact.useTheme();
      return /*#__PURE__*/jsxRuntime.jsx(uiReact.Heading, {
        padding: `${tokens.space.xl} 0 0 ${tokens.space.xl}`,
        level: 3,
        children: "Enter Information:"
      });
    },
    Footer() {
      return /*#__PURE__*/jsxRuntime.jsx(Text, {
        children: "Footer Information"
      });
    }
  },
  SetupTOTP: {
    Header() {
      const {
        tokens
      } = uiReact.useTheme();
      return /*#__PURE__*/jsxRuntime.jsx(uiReact.Heading, {
        padding: `${tokens.space.xl} 0 0 ${tokens.space.xl}`,
        level: 3,
        children: "Enter Information:"
      });
    },
    Footer() {
      return /*#__PURE__*/jsxRuntime.jsx(Text, {
        children: "Footer Information"
      });
    }
  },
  ConfirmSignIn: {
    Header() {
      const {
        tokens
      } = uiReact.useTheme();
      return /*#__PURE__*/jsxRuntime.jsx(uiReact.Heading, {
        padding: `${tokens.space.xl} 0 0 ${tokens.space.xl}`,
        level: 3,
        children: "Enter Information:"
      });
    },
    Footer() {
      return /*#__PURE__*/jsxRuntime.jsx(Text, {
        children: "Footer Information"
      });
    }
  },
  ResetPassword: {
    Header() {
      const {
        tokens
      } = uiReact.useTheme();
      return /*#__PURE__*/jsxRuntime.jsx(uiReact.Heading, {
        padding: `${tokens.space.xl} 0 0 ${tokens.space.xl}`,
        level: 3,
        children: "Enter Information:"
      });
    },
    Footer() {
      return /*#__PURE__*/jsxRuntime.jsx(Text, {
        children: "Footer Information"
      });
    }
  },
  ConfirmResetPassword: {
    Header() {
      const {
        tokens
      } = uiReact.useTheme();
      return /*#__PURE__*/jsxRuntime.jsx(uiReact.Heading, {
        padding: `${tokens.space.xl} 0 0 ${tokens.space.xl}`,
        level: 3,
        children: "Enter Information:"
      });
    },
    Footer() {
      return /*#__PURE__*/jsxRuntime.jsx(Text, {
        children: "Footer Information"
      });
    }
  }
};
const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email'
    }
  },
  signUp: {
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2
    },
    confirm_password: {
      label: 'Confirm Password:',
      order: 1
    }
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:'
    }
  },
  resetPassword: {
    username: {
      placeholder: 'Enter your email:'
    }
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:'
    }
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user'
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false
    }
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false
    }
  }
};
function CustomAmplifyAuthenticator(props) {
  function syncUser(user) {
    if (typeof props.setAuthenticatedUser === "function") {
      if (props.authenticated_user === null) {
        console.log("User session: ", user.signInUserSession);
        setTimeout(user => {
          props.setAuthenticatedUser(user);
        }, 533, user);
      } else if (!props.authenticated_user.hasOwnProperty("signInUserSession")) {
        console.log("User session: ", user.signInUserSession);
        setTimeout(user => {
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
    /*#__PURE__*/
    // <Authenticator hide={[ SignIn ]} amplifyConfig={aws_config}>
    jsxRuntime.jsx(uiReact.Authenticator, {
      components: components,
      formFields: formFields,
      socialProviders: ['google'],
      children: _ref => {
        let {
          signOut,
          user
        } = _ref;
        return user && syncUser(user) ? /*#__PURE__*/jsxRuntime.jsxs("main", {
          children: [props.children, /*#__PURE__*/jsxRuntime.jsx(ControlPanel["default"], {
            signOut: signOut,
            user: props.authenticated_user
          })]
        }) : /*#__PURE__*/jsxRuntime.jsxs("main", {
          children: ["Authentication Error: No user", /*#__PURE__*/jsxRuntime.jsx(ControlPanel["default"], {
            signOut: signOut,
            user: props.authenticated_user
          })]
        });
      }
    })
  );
}

exports["default"] = CustomAmplifyAuthenticator;
