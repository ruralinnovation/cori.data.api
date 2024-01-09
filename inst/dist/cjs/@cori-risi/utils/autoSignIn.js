/*
 * CORI Data API Package
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function autoSignIn () {
  setTimeout(() => {
    console.log("Set credentials for auto sign in");
    const signInButton = document.querySelector('.amplify-button[type="submit"]');
    if (signInButton !== null && signInButton.innerHTML === "Sign in") {
      signInButton.innerHTML = "Continue";
      signInButton.style.display = "flex";
      const usernameInput = document.querySelector('.amplify-textfield .amplify-field-group div .amplify-input[name="username"]');
      const passwordInput = document.querySelector('.amplify-textfield .amplify-field-group div .amplify-input[name="password"]');
      usernameInput.value = "cori-risi-public";
      passwordInput.value = "cori-risi-public";
    }
  }, 1533);
}

exports["default"] = autoSignIn;
