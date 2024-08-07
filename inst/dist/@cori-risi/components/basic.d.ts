import React, { ChangeEventHandler, ReactElement } from "react";
/**
 * This comment _supports_ [Markdown](https://www.markdownguide.org/)
 *
 * ```ts
 * <Button onClick={changeLayer} ><>
 *         Show "Served" tracts
 * </></Button>
 * ```
 */
export declare function Button(props: {
    children?: ReactElement;
    onClick: () => void;
}): React.JSX.Element;
/**
 * This comment _supports_ [Markdown](https://www.markdownguide.org/)
 *
 * ```ts
 * <Input checked={served}
 *        onChange={() => checkServed(!served)}
 *        type="checkbox" />
 * ```
 */
export declare function Input(props: {
    children?: ReactElement;
    type: string;
    checked?: boolean;
    min?: number;
    max?: number;
    value?: number;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}): React.JSX.Element;
/**
 * This comment _supports_ [Markdown](https://www.markdownguide.org/)
 */
export declare function Label(props: {
    children?: ReactElement;
}): React.JSX.Element;
//# sourceMappingURL=basic.d.ts.map