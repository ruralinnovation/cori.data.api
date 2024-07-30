import * as React from 'react';
import  {Button, Input } from "./basic";
import {useEffect, useState} from "react";

function ControlPanel (props: { setFilterState: Function}) {

    const [ served, checkServed ] = useState(true);
    const [ underserved, checkUnderserved ] = useState(true);
    const [ unserved, checkUnserved ] = useState(true);

    useEffect(() => props.setFilterState({
        "bb_service": {
            "served": served,
            "underserved": underserved,
            "unserved": unserved
        }
    }), [ served, underserved, unserved]);

    return (
        <div className="control-panel">
            {/*<Button onClick={changeLayer} ><>*/}
                <Input checked={served}
                       onChange={() => checkServed(!served)}
                       type="checkbox" />
                Show "Served" tracts
            {/*</></Button>*/}
            <br />
            {/*<Button onClick={changeLayer} ><>*/}
                <Input checked={underserved}
                       onChange={() => checkUnderserved(!underserved)}
                       type="checkbox" />
                Show "Unserved" tracts
            {/*</></Button>*/}
            <br />
            {/*<Button onClick={changeLayer} ><>*/}
                <Input checked={unserved}
                       onChange={() => checkUnserved(!unserved)}
                       type="checkbox" />
                Show "Unserved" tracts
            {/*</></Button>*/}
            <br />
        </div>
    );
}

export default React.memo(ControlPanel);
