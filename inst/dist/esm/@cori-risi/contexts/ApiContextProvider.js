/*
 * CORI Data API Package
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import { useState, useEffect, createContext } from 'react';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import AmplifyService from '../services/AmplifyService.js';
import CustomAmplifyAuthenticator from '../components/CustomAmplifyAuthenticator.js';
import queryString from 'query-string';
import autoSignIn from '../utils/autoSignIn.js';
import { jsx } from 'react/jsx-runtime';

const ApiContext = /*#__PURE__*/createContext({
  authenticated_user: null
});

/** @type {React.FunctionComponent} */
function ApiContextProvider(_ref) {
  let {
    aws_config,
    children
  } = _ref;
  const [authenticated_user, setAuthenticatedUser] = useState(null);
  const [config, setConfig] = useState(null);
  const [cognito, setCognito] = useState({
    clientId: '',
    identityPoolId: '',
    userPoolId: '',
    domain: '',
    hostedAuthenticationUrl: '',
    logoutUrl: ''
  });
  const [ready, setReady] = useState(false);
  useState(null);
  const [token, setToken] = useState(null);
  const init_geoid = queryString.parse(location.search).geoid; //<- This is not constant because of search bar
  const init_location_label = queryString.parse(location.search).location; //<- ...same
  const [init_path, setInitPath] = useState(location.pathname + "");
  const [geoid, setGeoid] = useState(init_geoid);
  const [location_label, setLocationLabel] = useState(init_location_label);
  const [state, setState] = useState({
    authenticated_user,
    token
  });
  window.AmplifyService = AmplifyService;
  useEffect(() => {
    console.log('Init Amplify config:', config);
    if (config === null) {
      const cfg = AmplifyService.configure(aws_config, setConfig);
      const cognito_cfg = {};
      for (const c in cognito) {
        if (cfg.Auth.hasOwnProperty(c)) {
          cognito_cfg[c] = cfg.Auth[c];
        }
      }
      setCognito(cognito_cfg);
    } else {
      AmplifyService.setHubListener(setAuthenticatedUser).then(() => {
        console.log("Passed setAuthenticatedUser to AmplifyService");
      });
      AmplifyService.isAuthenticated().then(authenticated => {
        console.log('Authenticated ', authenticated);
        if (authenticated) {
          console.log("Get Amplify claims...");
          AmplifyService.getClaims().then(claims => {
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
  useEffect(() => {
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
        autoSignIn();
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
  useEffect(() => {
    if (!!authenticated_user && authenticated_user !== null && token === null) {
      console.log("Attempt to get access token");
      setState({
        authenticated_user,
        token
      });
      AmplifyService.getIdToken().then(t => {
        console.log("token:", t);

        // TODO: set token and connect ApolloGraphQLProvider to CORI Data API /graphql endpoint
        setToken(t);
        // setReady(true);
      }).catch(error => {
        console.log(error);
      });
    }
  }, [authenticated_user]);
  useEffect(() => {
    setState({
      authenticated_user,
      token
    });
  }, [token]);
  return /*#__PURE__*/jsx(AmplifyProvider, {
    children: /*#__PURE__*/jsx(ApiContext.Provider, {
      className: "controls",
      value: state,
      children: /*#__PURE__*/jsx(CustomAmplifyAuthenticator, {
        authenticated_user: authenticated_user,
        setAuthenticatedUser: setAuthenticatedUser,
        children: !!ready ?
        // <ApolloGraphQLProviderRedux aws_amplify_token={token} setReady={setReady}>{
        children
        // }</ApolloGraphQLProviderRedux>
        : /*#__PURE__*/jsx("span", {
          children: "LOADING"
        })
      })
    })
  });
}

export { ApiContext, ApiContextProvider as default };
