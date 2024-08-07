import * as React from "react";
import { ReactElement } from "react";
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
export default function HoverInfo(props: {
    children?: ReactElement<any, any> | ReactElement<any, any>[];
    hoverInfo: HoverObject;
    xOffset?: number;
    yOffset?: number;
    zIndex?: number;
}): React.JSX.Element;
//# sourceMappingURL=HoverInfo.d.ts.map