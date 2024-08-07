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
export function Button(props: { children?: ReactElement, onClick: () => void }) {
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
    children?: ReactElement,
    type: string,
    checked?: boolean,
    min?: number,
    max?: number,
    value?: number,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}) {
    return <input {...props} />
}

/**
 * This comment _supports_ [Markdown](https://www.markdownguide.org/)
 */
export function Label(props: { children?: ReactElement }) {
    return <label {...props} />
}
