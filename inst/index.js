'use strict';

var React = require('react');

function autoSignIn () {
  setTimeout(function () {
    console.log("Set credentials for auto sign in");
    var signInButton = document.querySelector('.amplify-button[type="submit"]');
    if (signInButton !== null && signInButton.innerHTML === "Sign in") {
      signInButton.innerHTML = "Continue";
      signInButton.style.display = "flex";
      var usernameInput = document.querySelector('.amplify-textfield .amplify-field-group div .amplify-input[name="username"]');
      var passwordInput = document.querySelector('.amplify-textfield .amplify-field-group div .amplify-input[name="password"]');
      usernameInput.value = "cori-risi-public";
      passwordInput.value = "cori-risi-public";
    }
  }, 1533);
}

// import "./styles/ControlPanel.css"
function ControlPanel(props) {
  var signOut = props.signOut;
  var user = props.user;
  React.useEffect(function () {
    console.log("Current user: ", props.user);
  }, [props.user]);

  // if (document.querySelector("#sidebar .sidebar-content") !== null) {
  //     setTimeout(() => document.querySelector("#sidebar .sidebar-content")
  //         .before(document.querySelector(".control-panel.controls")),
  //         533
  //     )
  // }

  return /*#__PURE__*/React.createElement("div", {
    className: "control-panel controls"
  }, user !== null ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    id: "info"
  }, "\xA0"), /*#__PURE__*/React.createElement("form", {
    id: "print-config"
  }, /*#__PURE__*/React.createElement("fieldset", {
    id: "config-fields"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Unit"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    className: "radio-inline"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "unitOptions",
    value: "in",
    id: "inUnit",
    checked: true,
    readOnly: true
  }), " Inch"), /*#__PURE__*/React.createElement("label", {
    className: "radio-inline"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "unitOptions",
    value: "mm",
    id: "mmUnit",
    readOnly: true
  }), " Millimeter"))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Output format"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    className: "radio-inline"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "outputOptions",
    value: "png",
    checked: true,
    readOnly: true
  }), " PNG"), /*#__PURE__*/React.createElement("label", {
    className: "radio-inline"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "outputOptions",
    value: "pdf",
    readOnly: true
  }), " PDF"))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "styleSelect"
  }, "Map style"), /*#__PURE__*/React.createElement("select", {
    id: "styleSelect",
    className: "form-control",
    readOnly: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "mapbox://styles/mapbox/light-v9"
  }, "Mapbox Light"), /*#__PURE__*/React.createElement("option", {
    value: "mapbox://styles/mapbox/streets-v10"
  }, "Mapbox Streets"), /*#__PURE__*/React.createElement("option", {
    value: "https://tiles.stadiamaps.com/styles/alidade_smooth.json"
  }, "Stadia Maps Alidade Smooth"), /*#__PURE__*/React.createElement("option", {
    value: "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json"
  }, "Stadia Maps Alidade Smooth Dark"), /*#__PURE__*/React.createElement("option", {
    value: "https://tiles.stadiamaps.com/styles/outdoors.json"
  }, "Stadia Maps Outdoors"), /*#__PURE__*/React.createElement("option", {
    value: "https://tiles.stadiamaps.com/styles/osm_bright.json"
  }, "Stadia Maps OSM Bright"))))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-sm-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    id: "widthGroup"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "widthInput"
  }, "Width"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "widthInput",
    autoComplete: "off",
    readOnly: true,
    value: "8"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    id: "heightGroup"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "heightInput"
  }, "Height"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "heightInput",
    autoComplete: "off",
    readOnly: true,
    value: "6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    id: "dpiGroup"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "dpiInput"
  }, "DPI"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "dpiInput",
    autoComplete: "off",
    readOnly: true,
    value: "300"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    id: "latGroup"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "latInput"
  }, "Latitude"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "latInput",
    autoComplete: "off",
    readOnly: true,
    value: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    id: "lonGroup"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lonInput"
  }, "Longitude"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "lonInput",
    autoComplete: "off",
    readOnly: true,
    value: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    id: "zoomGroup"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "zoomInput"
  }, "Zoom"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "zoomInput",
    autoComplete: "off",
    readOnly: true,
    value: ""
  })))))))), /*#__PURE__*/React.createElement("a", {
    id: "data-download-link",
    className: "row"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",
    id: "data-download-btn"
  }, "Download data")), /*#__PURE__*/React.createElement("div", {
    id: "print-exec",
    className: "row"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",
    id: "config-btn"
  }, "Show print options"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",
    id: "generate-btn"
  }, "Print report"), /*#__PURE__*/React.createElement("div", {
    id: "spinner"
  })), /*#__PURE__*/React.createElement("div", {
    id: "auth-control",
    className: "row show"
  }, signOut !== null ? /*#__PURE__*/React.createElement("button", {
    id: "sign-out",
    className: "amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",
    onClick: function onClick() {
      autoSignIn();
      signOut();
    }
  }, "Sign out") : /*#__PURE__*/React.createElement("button", null, "No Auth Controls"))) : /*#__PURE__*/React.createElement("div", null));
}

exports.ControlPanel = ControlPanel;
