import React from 'react';
import { Auth } from 'aws-amplify';
import btn from './images/btn_google_dark_normal_ios.svg';
import "./styles/ControlPanel.css";

export default function GoogleSignIn (props) {
    return (
        <div>
            <br />
            <button onClick={props.googleSignIn}
                style={{
                    "padding": "5px 10px",
                    "textAlign": "center",
                    "backgroundColor": "#ffffff",
                    "borderRadius": "6px",
                    "boxShadow": "var(--amplify-components-authenticator-router-box-shadow)"
                }}
            >
                Sign In with Google
                <img
                    src={btn}
                    alt="Google Sign In button"
                    className="googleSignIn"
                    style={{
                        margin: "0px 2px",
                    }}
                />
            </button>
            <br />
            {/*<button onClick={props.cognitoSignOut}>*/}
            {/*    Sign Out*/}
            {/*</button>*/}
        </div>
    );
}
