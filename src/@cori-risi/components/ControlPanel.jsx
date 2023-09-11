import "./styles/ControlPanel.css"
import React, { useEffect } from "react";
import { autoSignIn } from "../utils";

function ControlPanel (props) {
    const signOut = props.signOut;
    const user = props.user;

    useEffect(() => {
        console.log("Current user: ", props.user);
    }, [props.user]);

    // if (document.querySelector("#sidebar .sidebar-content") !== null) {
    //     setTimeout(() => document.querySelector("#sidebar .sidebar-content")
    //         .before(document.querySelector(".control-panel.controls")),
    //         533
    //     )
    // }

    return (
      <div className="control-panel controls">
          {(user !== null) ? (
            <div>
                <h5>{(user.hasOwnProperty("email") && !!user.email) ? user.email : (user.hasOwnProperty("name") && !!user.name) ? user.name : user.username}</h5>
                {/*<br />*/}

                <p id="info">&nbsp;</p>

                {/* */}
                {/* Print config form */}
                {/* */}
                <form id="print-config">
                    <fieldset id="config-fields">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>Unit</label><br />
                                    <label className="radio-inline">
                                        <input type="radio" name="unitOptions" value="in" id="inUnit" checked readOnly /> Inch
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="unitOptions" value="mm" id="mmUnit" readOnly /> Millimeter
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label>Output format</label><br />
                                    <label className="radio-inline">
                                        <input type="radio" name="outputOptions" value="png" checked readOnly /> PNG
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="outputOptions" value="pdf" readOnly /> PDF
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="form-group">
                                    <label htmlFor="styleSelect">Map style</label>
                                    <select id="styleSelect" className="form-control" readOnly>
                                        <option value="mapbox://styles/mapbox/light-v9">Mapbox Light</option>
                                        <option value="mapbox://styles/mapbox/streets-v10">Mapbox Streets</option>
                                        <option value="https://tiles.stadiamaps.com/styles/alidade_smooth.json">Stadia Maps
                                            Alidade Smooth
                                        </option>
                                        <option value="https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json">Stadia
                                            Maps Alidade Smooth Dark
                                        </option>
                                        <option value="https://tiles.stadiamaps.com/styles/outdoors.json">Stadia Maps
                                            Outdoors
                                        </option>
                                        <option value="https://tiles.stadiamaps.com/styles/osm_bright.json">Stadia Maps OSM
                                            Bright
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="form-group" id="widthGroup">
                                    <label htmlFor="widthInput">Width</label>
                                    <input type="text" className="form-control" id="widthInput" autoComplete="off"
                                           readOnly value="8" />
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="form-group" id="heightGroup">
                                    <label htmlFor="heightInput">Height</label>
                                    <input type="text" className="form-control" id="heightInput" autoComplete="off"
                                           readOnly value="6" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group" id="dpiGroup">
                                    <label htmlFor="dpiInput">DPI</label>
                                    <input type="text" className="form-control" id="dpiInput" autoComplete="off"
                                           readOnly value="300" />
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group" id="latGroup">
                                            <label htmlFor="latInput">Latitude</label>
                                            <input type="text" className="form-control" id="latInput" autoComplete="off"
                                                   readOnly value="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group" id="lonGroup">
                                            <label htmlFor="lonInput">Longitude</label>
                                            <input type="text" className="form-control" id="lonInput" autoComplete="off"
                                                   readOnly value="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group" id="zoomGroup">
                                            <label htmlFor="zoomInput">Zoom</label>
                                            <input type="text" className="form-control" id="zoomInput" autoComplete="off"
                                                   readOnly value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>

                <a id={"data-download-link"} className="row">
                    <button type="submit" className={"amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg"} id={"data-download-btn"}>Download data</button>
                </a>

                <div id={"print-exec"} className="row">
                    <button type="submit" className={"amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg"} id={"config-btn"}>Show print options</button>
                    <button type="submit" className={"amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg"} id={"generate-btn"}>Print report</button>
                    <div id="spinner"></div>
                </div>

                <div id={"auth-control"} className="row show">
                    {(signOut !== null) ? (
                      <button id={"sign-out"} className={"amplify-button amplify-field-group__control amplify-button--primary amplify-button--fullwidth btn btn-primary btn-lg"} onClick={() => { autoSignIn(); signOut(); }}>Sign out</button>
                    ) : (
                      <button>No Auth Controls</button>
                    )
                    }
                </div>
            </div>
          ) : (
            <div></div>
          )}

      </div>
    );
}

export default React.memo(ControlPanel);
