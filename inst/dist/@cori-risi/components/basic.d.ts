/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import React, { ReactElement } from 'react';

declare function Button(props: {
    children?: ReactElement;
    onClick: () => void;
}): React.JSX.Element;
declare function Input(props: {
    children?: ReactElement;
}): React.JSX.Element;
declare function Label(props: {
    children?: ReactElement;
}): React.JSX.Element;

export { Button, Input, Label };
//# sourceMappingURL=basic.d.ts.map
