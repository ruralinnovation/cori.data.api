import * as React from "react";
import { ReactElement } from "react";
export interface HoverObject {
    x: number;
    y: number;
    [key: number | string]: any;
}
export default function HoverInfo(props: {
    children?: ReactElement[];
    hoverInfo: HoverObject;
    xOffset?: number;
    yOffset?: number;
}): React.JSX.Element;
//# sourceMappingURL=HoverInfo.d.ts.map