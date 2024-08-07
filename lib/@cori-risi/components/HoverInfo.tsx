import * as React from "react";
import { ReactElement } from "react";
// import { format } from 'd3-format';

// import"./styles/HoverInfo.module.css";           // <= DO THIS FIRST...
import style from "./styles/HoverInfo.module.css";  // <= THEN THIS..


export interface HoverObject {
    x: number;
    y: number;
    [key: number | string]: any;
}

/**
 * This is a prototype generalization of the HoverInfo component used in the
 * [Who Wins B2S app](https://github.com/ruralinnovation/who-wins-b2s/tree/main/src/components){target=_blank}
 *
 * ```ts
 * import { HoverInfo } from '@cori-risi/cori.data.api';
 *
 * import "@cori-risi/cori.data.api/inst/dist/cori.data.api.css";
 *
 * // ...
 *
 * const [ hoverInfo, setHoverInfo ] = useState<HoverObject | null>(null);
 *
 * // ...
 *
 * <HoverInfo hoverInfo={hoverInfo}>
 *     <h3>{ hoverInfo.name }</h3>
 *     <p className={style['details']}>...</p>
 * </HoverInfo>
 * ```
 *
 *  @param props.hoverInfo - an object that should, at minimum, contain x and y values (screen coordinates in pixels); "name" is also a userful prop
 *  @param props.xOffset - the HoverInfo box will be rendered at this offset from the event's x coordinate
 *  @param props.yOffset - the HoverInfo box will be rendered at this offset from the event's y coordinate
 */
export default function HoverInfo (props: {
    children?: ReactElement | ReactElement[],
    hoverInfo: HoverObject,
    xOffset?: number, yOffset?: number
}) {
    const { hoverInfo, xOffset, yOffset } = props;

    return (!!hoverInfo) ? (
        <div className={style["tooltip"]} style={{left: hoverInfo.x + (xOffset || 0), top: hoverInfo.y + (yOffset || 0)}}>
            {/*<h3>{ hoverInfo.name }</h3>*/}
            {/*<p className={style['prop-score']}>*/}
            {/*    Propensity score: {hoverInfo.prop_score*100 < 1? "<1": format(".2")(hoverInfo.prop_score * 100)} | Matching: {hoverInfo.prop_score_knearest_match? "Yes": "No"}<br/>*/}
            {/*</p>*/}
            {/*<hr></hr>*/}
            {/*<p className={style['details']}>*/}
            {/*    B2S winner: {hoverInfo.b2s_flag? "Yes": "No"}<br/>*/}
            {/*    Population: {format(",")(hoverInfo.pop)}<br/>*/}
            {/*    Percent employed: {format(".0%")(hoverInfo.pct_prime_emp)}<br/>*/}
            {/*    Tech share: {format(".0%")(hoverInfo.tech_share)}*/}
            {/*</p>*/}
        </div>
    ) : <></>;
}