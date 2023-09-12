/*
 * CORI Data API Package
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import e,{useEffect as l}from"react";import i from"../utils/autoSignIn.js";import{jsx as a,jsxs as t}from"react/jsx-runtime";function o(e){const o=e.signOut,n=e.user;return l((()=>{console.log("Current user: ",e.user)}),[e.user]),a("div",{className:"control-panel controls",children:null!==n?t("div",{children:[a("h5",{children:n.hasOwnProperty("signInUserSession")&&n.signInUserSession.hasOwnProperty("idToken")&&n.signInUserSession.idToken.hasOwnProperty("payload")?n.signInUserSession.idToken.payload.hasOwnProperty("name")&&n.signInUserSession.idToken.payload.name?n.signInUserSession.idToken.payload.name:n.signInUserSession.idToken.payload.hasOwnProperty("email")&&n.signInUserSession.idToken.payload.email?n.signInUserSession.idToken.payload.email:n.username:n.hasOwnProperty("email")&&n.email?n.email:n.username}),a("p",{id:"info",children:" "}),a("form",{id:"print-config",children:t("fieldset",{id:"config-fields",children:[t("div",{className:"row",children:[a("div",{className:"col-sm-4",children:t("div",{className:"form-group",children:[a("label",{children:"Unit"}),a("br",{}),t("label",{className:"radio-inline",children:[a("input",{type:"radio",name:"unitOptions",value:"in",id:"inUnit",checked:!0,readOnly:!0})," Inch"]}),t("label",{className:"radio-inline",children:[a("input",{type:"radio",name:"unitOptions",value:"mm",id:"mmUnit",readOnly:!0})," Millimeter"]})]})}),a("div",{className:"col-sm-3",children:t("div",{className:"form-group",children:[a("label",{children:"Output format"}),a("br",{}),t("label",{className:"radio-inline",children:[a("input",{type:"radio",name:"outputOptions",value:"png",checked:!0,readOnly:!0})," PNG"]}),t("label",{className:"radio-inline",children:[a("input",{type:"radio",name:"outputOptions",value:"pdf",readOnly:!0})," PDF"]})]})}),a("div",{className:"col-sm-5",children:t("div",{className:"form-group",children:[a("label",{htmlFor:"styleSelect",children:"Map style"}),t("select",{id:"styleSelect",className:"form-control",readOnly:!0,children:[a("option",{value:"mapbox://styles/mapbox/light-v9",children:"Mapbox Light"}),a("option",{value:"mapbox://styles/mapbox/streets-v10",children:"Mapbox Streets"}),a("option",{value:"https://tiles.stadiamaps.com/styles/alidade_smooth.json",children:"Stadia Maps Alidade Smooth"}),a("option",{value:"https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json",children:"Stadia Maps Alidade Smooth Dark"}),a("option",{value:"https://tiles.stadiamaps.com/styles/outdoors.json",children:"Stadia Maps Outdoors"}),a("option",{value:"https://tiles.stadiamaps.com/styles/osm_bright.json",children:"Stadia Maps OSM Bright"})]})]})})]}),t("div",{className:"row",children:[a("div",{className:"col-sm-2",children:t("div",{className:"form-group",id:"widthGroup",children:[a("label",{htmlFor:"widthInput",children:"Width"}),a("input",{type:"text",className:"form-control",id:"widthInput",autoComplete:"off",readOnly:!0,value:"8"})]})}),a("div",{className:"col-sm-2",children:t("div",{className:"form-group",id:"heightGroup",children:[a("label",{htmlFor:"heightInput",children:"Height"}),a("input",{type:"text",className:"form-control",id:"heightInput",autoComplete:"off",readOnly:!0,value:"6"})]})}),a("div",{className:"col-sm-3",children:t("div",{className:"form-group",id:"dpiGroup",children:[a("label",{htmlFor:"dpiInput",children:"DPI"}),a("input",{type:"text",className:"form-control",id:"dpiInput",autoComplete:"off",readOnly:!0,value:"300"})]})}),a("div",{className:"col-sm-5",children:t("div",{className:"row",children:[a("div",{className:"col-sm-4",children:t("div",{className:"form-group",id:"latGroup",children:[a("label",{htmlFor:"latInput",children:"Latitude"}),a("input",{type:"text",className:"form-control",id:"latInput",autoComplete:"off",readOnly:!0,value:""})]})}),a("div",{className:"col-sm-4",children:t("div",{className:"form-group",id:"lonGroup",children:[a("label",{htmlFor:"lonInput",children:"Longitude"}),a("input",{type:"text",className:"form-control",id:"lonInput",autoComplete:"off",readOnly:!0,value:""})]})}),a("div",{className:"col-sm-4",children:t("div",{className:"form-group",id:"zoomGroup",children:[a("label",{htmlFor:"zoomInput",children:"Zoom"}),a("input",{type:"text",className:"form-control",id:"zoomInput",autoComplete:"off",readOnly:!0,value:""})]})})]})})]})]})}),a("a",{id:"data-download-link",className:"row",children:a("button",{type:"submit",className:"amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",id:"data-download-btn",children:"Download data"})}),t("div",{id:"print-exec",className:"row",children:[a("button",{type:"submit",className:"amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",id:"config-btn",children:"Show print options"}),a("button",{type:"submit",className:"amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",id:"generate-btn",children:"Print report"}),a("div",{id:"spinner"})]}),a("div",{id:"auth-control",className:"row show",children:a("button",null!==o?{id:"sign-out",className:"amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",onClick:()=>{i(),o()},children:"Sign out"}:{children:"No Auth Controls"})})]}):a("div",{})})}var n=e.memo(o);export{n as default};
