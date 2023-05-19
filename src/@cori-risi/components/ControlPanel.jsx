import React, { useEffect } from "react";
import "./styles/ControlPanel.css"

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
                    <h4>Hello, {(user.hasOwnProperty("name") && !!user.name) ? user.name : (user.hasOwnProperty("email") && !!user.email) ? user.email : user.username}</h4>
                    {/*<p id="info">&nbsp;</p>*/}
                    {(signOut !== null) ? (
                        <button onClick={signOut}>Sign out</button>
                    ) : (
                        <button>No Auth Controls</button>
                    )
                    }
                </div>
            ) : (
                <div></div>
            )}

        </div>
    );
}

export default React.memo(ControlPanel);
