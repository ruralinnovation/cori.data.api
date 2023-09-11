/*
 * CORI Data API Package
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
function e(){setTimeout((()=>{console.log("Set credentials for auto sign in");const e=document.querySelector('.amplify-button[type="submit"]');if(null!==e&&"Sign in"===e.innerHTML){e.innerHTML="Continue",e.style.display="flex";const i=document.querySelector('.amplify-textfield .amplify-field-group div .amplify-input[name="username"]'),t=document.querySelector('.amplify-textfield .amplify-field-group div .amplify-input[name="password"]');i.value="cori-risi-public",t.value="cori-risi-public"}}),1533)}export{e as default};
