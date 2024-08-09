import React, {
    ChangeEventHandler,
    ReactElement,
    // useContext,
    // useEffect,
    // useState
} from "react";

/**
 * This comment _supports_ [Markdown](https://www.markdownguide.org/)
 *
 * ```ts
 * <Button onClick={changeLayer} ><>
 *         Show "Served" tracts
 * </></Button>
 * ```
 */
export function Button(props: { children?: ReactElement<any, any> | ReactElement<any, any>[], onClick: () => void }) {
    return <button {...props} />
}

/**
 * This comment _supports_ [Markdown](https://www.markdownguide.org/)
 *
 * ```ts
 * <Input checked={served}
 *        onChange={() => checkServed(!served)}
 *        type="checkbox" />
 * ```
 */
export function Input(props: {
    children?: ReactElement<any, any> | ReactElement<any, any>[],
    id?: string;
    name?: string;
    type: string,
    checked?: boolean,
    min?: number,
    max?: number,
    value?: number | string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}) {
    return <input {...props} />
}

/**
 * This comment _supports_ [Markdown](https://www.markdownguide.org/)
 */
export function Label(props: { children?: ReactElement<any, any> | ReactElement<any, any>[] }) {
    return <label {...props} />
}
