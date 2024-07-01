/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React from 'react';

function Button(props) {
    return React.createElement("button", Object.assign({}, props));
}
function Input(props) {
    return React.createElement("input", Object.assign({}, props));
}
function Label(props) {
    return React.createElement("label", Object.assign({}, props));
}

export { Button, Input, Label };
//# sourceMappingURL=basic.js.map
