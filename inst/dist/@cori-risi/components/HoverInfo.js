/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import * as React from 'react';
import style from './styles/HoverInfo.module.css.js';

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
function HoverInfo(props) {
    const { hoverInfo, xOffset, yOffset } = props;
    return (!!hoverInfo) ? (React.createElement("div", { className: style["tooltip"], style: {
            left: hoverInfo.x + (xOffset || 0),
            top: hoverInfo.y + (yOffset || 0),
            position: "fixed",
            minWidth: "320px",
            minHeight: "240px",
            zIndex: props.zIndex || 3
        } }, props.children)) : React.createElement(React.Fragment, null);
}

export { HoverInfo as default };
//# sourceMappingURL=HoverInfo.js.map
