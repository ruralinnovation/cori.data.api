/*
 * CORI Data API Package
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var uiReact = require('@aws-amplify/ui-react');
var AmplifyService = require('../services/AmplifyService.js');
var CustomAmplifyAuthenticator = require('../components/CustomAmplifyAuthenticator.js');
var queryString = require('query-string');
var autoSignIn = require('../utils/autoSignIn.js');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var queryString__default = /*#__PURE__*/_interopDefaultLegacy(queryString);

const ApiContext = /*#__PURE__*/React.createContext({
  authenticated_user: null
});

/** @type {React.FunctionComponent} */
function ApiContextProvider(_ref) {
  let {
    aws_config,
    children
  } = _ref;
  const [authenticated_user, setAuthenticatedUser] = React.useState(null);
  const [config, setConfig] = React.useState(null);
  const [cognito, setCognito] = React.useState({
    clientId: '',
    identityPoolId: '',
    userPoolId: '',
    domain: '',
    hostedAuthenticationUrl: '',
    logoutUrl: ''
  });
  const [ready, setReady] = React.useState(false);
  React.useState(null);
  const [token, setToken] = React.useState(null);
  const init_geoid = queryString__default["default"].parse(location.search).geoid; //<- This is not constant because of search bar
  const init_location_label = queryString__default["default"].parse(location.search).location; //<- ...same
  const [init_path, setInitPath] = React.useState(location.pathname + "");
  const [geoid, setGeoid] = React.useState(init_geoid);
  const [location_label, setLocationLabel] = React.useState(init_location_label);
  const [state, setState] = React.useState({
    authenticated_user,
    token
  });
  window.AmplifyService = AmplifyService["default"];
  React.useEffect(() => {
    console.log('Init Amplify config:', config);
    if (config === null) {
      const cfg = AmplifyService["default"].configure(aws_config, setConfig);
      const cognito_cfg = {};
      for (const c in cognito) {
        if (cfg.Auth.hasOwnProperty(c)) {
          cognito_cfg[c] = cfg.Auth[c];
        }
      }
      setCognito(cognito_cfg);
    } else {
      AmplifyService["default"].setHubListener(setAuthenticatedUser).then(() => {
        console.log("Passed setAuthenticatedUser to AmplifyService");
      });
      AmplifyService["default"].isAuthenticated().then(authenticated => {
        console.log('Authenticated ', authenticated);
        if (authenticated) {
          console.log("Get Amplify claims...");
          AmplifyService["default"].getClaims().then(claims => {
            const saved = localStorage.getItem("redirect_after_auth");
            console.log(JSON.parse(saved));
            if (!claims) {
              console.log('No claims found');
              // AmplifyService.federatedLogin('Google');
            } else {
              if (authenticated_user === null) {
                setAuthenticatedUser({
                  username: claims.username,
                  userType: 'admin',
                  groups: claims.groups,
                  email: claims.email
                });
              } else {
                setAuthenticatedUser({
                  ...authenticated_user,
                  username: claims.username,
                  userType: 'admin',
                  groups: claims.groups,
                  email: claims.email
                });
              }
              setReady(true);
            }
          }).catch(err => {
            console.log(err);
            setAuthenticatedUser(null);
          });
        } else {
          // AmplifyService.federatedLogin('Google');
          setAuthenticatedUser({
            username: "",
            userType: "",
            groups: [],
            email: ""
          });
        }
      }).catch(err => {
        console.log('ERROR', err);
      });
    }
  }, [config]);
  React.useEffect(() => {
    if (!ready) {
      console.log('Init Amplify cognito: ', cognito);
      if (!!cognito.clientId) {
        console.log("If not authenticated, save initial path to localStorage.");
        console.log("GEOID: ", geoid);
        console.log("LOCATION: ", location_label);
        console.log("PATH: ", init_path);
        localStorage.setItem("redirect_after_auth", {
          init_path,
          geoid,
          location_label
        });

        // Allow auto sign-in by clicking "Continue"
        autoSignIn["default"]();
        setReady(true);
        return;
      } else if (config !== null) {
        const cognito_cfg = {};
        for (const c in cognito) {
          if (config.Auth.hasOwnProperty(c)) {
            cognito_cfg[c] = config.Auth[c];
          }
        }
        setCognito(cognito_cfg);
        setReady(true);
      }
    }
  }, [cognito]);
  React.useEffect(() => {
    if (!!authenticated_user && authenticated_user !== null && token === null) {
      console.log("Attempt to get access token");
      setState({
        authenticated_user,
        token
      });
      AmplifyService["default"].getIdToken().then(t => {
        console.log("token:", t);

        // TODO: set token and connect ApolloGraphQLProvider to CORI Data API /graphql endpoint
        setToken(t);
        // setReady(true);
      }).catch(error => {
        console.log(error);
      });
    }
  }, [authenticated_user]);
  React.useEffect(() => {
    setState({
      authenticated_user,
      token
    });
  }, [token]);
  return /*#__PURE__*/jsxRuntime.jsx(uiReact.AmplifyProvider, {
    children: /*#__PURE__*/jsxRuntime.jsx(ApiContext.Provider, {
      className: "controls",
      value: state,
      children: /*#__PURE__*/jsxRuntime.jsx(CustomAmplifyAuthenticator["default"], {
        authenticated_user: authenticated_user,
        setAuthenticatedUser: setAuthenticatedUser,
        children: !!ready ?
        // <ApolloGraphQLProviderRedux aws_amplify_token={token} setReady={setReady}>{
        children
        // }</ApolloGraphQLProviderRedux>
        : /*#__PURE__*/jsxRuntime.jsx("span", {
          children: "LOADING"
        })
      })
    })
  });
}

exports.ApiContext = ApiContext;
exports["default"] = ApiContextProvider;
