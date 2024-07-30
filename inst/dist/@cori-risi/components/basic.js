/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React from 'react';

/**
 * This comment _supports_ [Markdown](https://www.markdownguide.org/)
 *
 * ```ts
 * <Button onClick={changeLayer} ><>
 *         Show "Served" tracts
 * </></Button>
 * ```
 */
function Button(props) {
    return React.createElement("button", Object.assign({}, props));
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
function Input(props) {
    return React.createElement("input", Object.assign({}, props));
}
/**
 * This comment _supports_ [Markdown](https://www.markdownguide.org/)
 */
function Label(props) {
    return React.createElement("label", Object.assign({}, props));
}

export { Button, Input, Label };
//# sourceMappingURL=basic.js.map
