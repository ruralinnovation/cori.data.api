/*
 * CORI Data API components package
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var autoSignIn = require('../utils/autoSignIn.js');
var jsxRuntime = require('react/jsx-runtime');

function ControlPanel(props) {
  const signOut = props.signOut;
  const user = props.user;
  React.useEffect(() => {
    console.log("Current user: ", props.user);
  }, [props.user]);

  // if (document.querySelector("#sidebar .sidebar-content") !== null) {
  //     setTimeout(() => document.querySelector("#sidebar .sidebar-content")
  //         .before(document.querySelector(".control-panel.controls")),
  //         533
  //     )
  // }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    className: "control-panel controls",
    children: user !== null ? /*#__PURE__*/jsxRuntime.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntime.jsx("h5", {
        children: user.hasOwnProperty("signInUserSession") && user.signInUserSession.hasOwnProperty("idToken") && user.signInUserSession.idToken.hasOwnProperty("payload") ? user.signInUserSession.idToken.payload.hasOwnProperty("name") && !!user.signInUserSession.idToken.payload.name ? user.signInUserSession.idToken.payload.name : user.signInUserSession.idToken.payload.hasOwnProperty("email") && !!user.signInUserSession.idToken.payload.email ? user.signInUserSession.idToken.payload.email : user.username : user.hasOwnProperty("email") && !!user.email ? user.email : user.username
      }), /*#__PURE__*/jsxRuntime.jsx("p", {
        id: "info",
        children: "\xA0"
      }), /*#__PURE__*/jsxRuntime.jsx("form", {
        id: "print-config",
        children: /*#__PURE__*/jsxRuntime.jsxs("fieldset", {
          id: "config-fields",
          children: [/*#__PURE__*/jsxRuntime.jsxs("div", {
            className: "row",
            children: [/*#__PURE__*/jsxRuntime.jsx("div", {
              className: "col-sm-4",
              children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                className: "form-group",
                children: [/*#__PURE__*/jsxRuntime.jsx("label", {
                  children: "Unit"
                }), /*#__PURE__*/jsxRuntime.jsx("br", {}), /*#__PURE__*/jsxRuntime.jsxs("label", {
                  className: "radio-inline",
                  children: [/*#__PURE__*/jsxRuntime.jsx("input", {
                    type: "radio",
                    name: "unitOptions",
                    value: "in",
                    id: "inUnit",
                    checked: true,
                    readOnly: true
                  }), " Inch"]
                }), /*#__PURE__*/jsxRuntime.jsxs("label", {
                  className: "radio-inline",
                  children: [/*#__PURE__*/jsxRuntime.jsx("input", {
                    type: "radio",
                    name: "unitOptions",
                    value: "mm",
                    id: "mmUnit",
                    readOnly: true
                  }), " Millimeter"]
                })]
              })
            }), /*#__PURE__*/jsxRuntime.jsx("div", {
              className: "col-sm-3",
              children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                className: "form-group",
                children: [/*#__PURE__*/jsxRuntime.jsx("label", {
                  children: "Output format"
                }), /*#__PURE__*/jsxRuntime.jsx("br", {}), /*#__PURE__*/jsxRuntime.jsxs("label", {
                  className: "radio-inline",
                  children: [/*#__PURE__*/jsxRuntime.jsx("input", {
                    type: "radio",
                    name: "outputOptions",
                    value: "png",
                    checked: true,
                    readOnly: true
                  }), " PNG"]
                }), /*#__PURE__*/jsxRuntime.jsxs("label", {
                  className: "radio-inline",
                  children: [/*#__PURE__*/jsxRuntime.jsx("input", {
                    type: "radio",
                    name: "outputOptions",
                    value: "pdf",
                    readOnly: true
                  }), " PDF"]
                })]
              })
            }), /*#__PURE__*/jsxRuntime.jsx("div", {
              className: "col-sm-5",
              children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                className: "form-group",
                children: [/*#__PURE__*/jsxRuntime.jsx("label", {
                  htmlFor: "styleSelect",
                  children: "Map style"
                }), /*#__PURE__*/jsxRuntime.jsxs("select", {
                  id: "styleSelect",
                  className: "form-control",
                  children: [/*#__PURE__*/jsxRuntime.jsx("option", {
                    value: "mapbox://styles/mapbox/light-v9",
                    children: "Mapbox Light"
                  }), /*#__PURE__*/jsxRuntime.jsx("option", {
                    value: "mapbox://styles/mapbox/streets-v10",
                    children: "Mapbox Streets"
                  }), /*#__PURE__*/jsxRuntime.jsx("option", {
                    value: "https://tiles.stadiamaps.com/styles/alidade_smooth.json",
                    children: "Stadia Maps Alidade Smooth"
                  }), /*#__PURE__*/jsxRuntime.jsx("option", {
                    value: "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json",
                    children: "Stadia Maps Alidade Smooth Dark"
                  }), /*#__PURE__*/jsxRuntime.jsx("option", {
                    value: "https://tiles.stadiamaps.com/styles/outdoors.json",
                    children: "Stadia Maps Outdoors"
                  }), /*#__PURE__*/jsxRuntime.jsx("option", {
                    value: "https://tiles.stadiamaps.com/styles/osm_bright.json",
                    children: "Stadia Maps OSM Bright"
                  })]
                })]
              })
            })]
          }), /*#__PURE__*/jsxRuntime.jsxs("div", {
            className: "row",
            children: [/*#__PURE__*/jsxRuntime.jsx("div", {
              className: "col-sm-2",
              children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                className: "form-group",
                id: "widthGroup",
                children: [/*#__PURE__*/jsxRuntime.jsx("label", {
                  htmlFor: "widthInput",
                  children: "Width"
                }), /*#__PURE__*/jsxRuntime.jsx("input", {
                  type: "text",
                  className: "form-control",
                  id: "widthInput",
                  autoComplete: "off",
                  readOnly: true,
                  value: "8"
                })]
              })
            }), /*#__PURE__*/jsxRuntime.jsx("div", {
              className: "col-sm-2",
              children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                className: "form-group",
                id: "heightGroup",
                children: [/*#__PURE__*/jsxRuntime.jsx("label", {
                  htmlFor: "heightInput",
                  children: "Height"
                }), /*#__PURE__*/jsxRuntime.jsx("input", {
                  type: "text",
                  className: "form-control",
                  id: "heightInput",
                  autoComplete: "off",
                  readOnly: true,
                  value: "6"
                })]
              })
            }), /*#__PURE__*/jsxRuntime.jsx("div", {
              className: "col-sm-3",
              children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                className: "form-group",
                id: "dpiGroup",
                children: [/*#__PURE__*/jsxRuntime.jsx("label", {
                  htmlFor: "dpiInput",
                  children: "DPI"
                }), /*#__PURE__*/jsxRuntime.jsx("input", {
                  type: "text",
                  className: "form-control",
                  id: "dpiInput",
                  autoComplete: "off",
                  readOnly: true,
                  value: "300"
                })]
              })
            }), /*#__PURE__*/jsxRuntime.jsx("div", {
              className: "col-sm-5",
              children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                className: "row",
                children: [/*#__PURE__*/jsxRuntime.jsx("div", {
                  className: "col-sm-4",
                  children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                    className: "form-group",
                    id: "latGroup",
                    children: [/*#__PURE__*/jsxRuntime.jsx("label", {
                      htmlFor: "latInput",
                      children: "Latitude"
                    }), /*#__PURE__*/jsxRuntime.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "latInput",
                      autoComplete: "off",
                      readOnly: true,
                      value: ""
                    })]
                  })
                }), /*#__PURE__*/jsxRuntime.jsx("div", {
                  className: "col-sm-4",
                  children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                    className: "form-group",
                    id: "lonGroup",
                    children: [/*#__PURE__*/jsxRuntime.jsx("label", {
                      htmlFor: "lonInput",
                      children: "Longitude"
                    }), /*#__PURE__*/jsxRuntime.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "lonInput",
                      autoComplete: "off",
                      readOnly: true,
                      value: ""
                    })]
                  })
                }), /*#__PURE__*/jsxRuntime.jsx("div", {
                  className: "col-sm-4",
                  children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                    className: "form-group",
                    id: "zoomGroup",
                    children: [/*#__PURE__*/jsxRuntime.jsx("label", {
                      htmlFor: "zoomInput",
                      children: "Zoom"
                    }), /*#__PURE__*/jsxRuntime.jsx("input", {
                      type: "text",
                      className: "form-control",
                      id: "zoomInput",
                      autoComplete: "off",
                      readOnly: true,
                      value: ""
                    })]
                  })
                })]
              })
            })]
          })]
        })
      }), /*#__PURE__*/jsxRuntime.jsx("a", {
        id: "data-download-link",
        className: "row",
        children: /*#__PURE__*/jsxRuntime.jsx("button", {
          type: "submit",
          className: "amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",
          id: "data-download-btn",
          children: "Download data"
        })
      }), /*#__PURE__*/jsxRuntime.jsxs("div", {
        id: "print-exec",
        className: "row",
        children: [/*#__PURE__*/jsxRuntime.jsx("button", {
          type: "submit",
          className: "amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",
          id: "config-btn",
          children: "Show print options"
        }), /*#__PURE__*/jsxRuntime.jsx("button", {
          type: "submit",
          className: "amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",
          id: "generate-btn",
          children: "Print report"
        }), /*#__PURE__*/jsxRuntime.jsx("div", {
          id: "spinner"
        })]
      }), /*#__PURE__*/jsxRuntime.jsx("div", {
        id: "auth-control",
        className: "row show",
        children: signOut !== null ? /*#__PURE__*/jsxRuntime.jsx("button", {
          id: "sign-out",
          className: "amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg",
          onClick: () => {
            autoSignIn.default();
            signOut();
          },
          children: "Sign out"
        }) : /*#__PURE__*/jsxRuntime.jsx("button", {
          children: "No Auth Controls"
        })
      })]
    }) : /*#__PURE__*/jsxRuntime.jsx("div", {})
  });
}
var ControlPanel$1 = /*#__PURE__*/React.memo(ControlPanel);

exports.default = ControlPanel$1;
