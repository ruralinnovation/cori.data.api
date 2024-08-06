import React from 'react';
/**
 * This is a prototype generalization of the CategoricalLegend component used in the
 * [ERC tool](https://github.com/ruralinnovation/erc-frontend-ts/tree/dev/MDAT-30-frontend-ui-shared-library/src/components){target=_blank}
 *
 * ```ts
 * import { CategoricalLegend } from '@cori-risi/cori.data.api';
 *
 * import "@cori-risi/cori.data.api/inst/dist/cori.data.api.css";
 *
 * // ...
 *
 * const colorScale = d3.scaleOrdinal<string>()
 *       .domain(groups) // Input domain
 *       .range(["#A3E2B5", "#00835D", "#26535C"]);
 *
 * const colorScaleDomain = colorScale.domain();
 * const colorScaleRange = colorScale.range();
 *
 * // ...
 *
 * <CategoricalLegend domain_names={colorScaleDomain.map(c => data.filter(d => d.geoid === c).map(d => d.name)[0])}
 *                    domain={colorScaleDomain}
 *                    range={colorScaleRange} />
 * ```
 *
 *  @param props.domain_names - an (array) of names, each one mapped to a category in the color scale domain
 *  @param props.domain - d3 color scale domain
 *  @param props.range - d3 color scale range
 */
declare function CategoricalLegend(props: {
    domain_names?: string[] | undefined;
    domain?: string[] | undefined;
    range?: unknown[] | undefined;
    scale?: any | undefined;
    title?: string;
    na_message?: string;
}): React.JSX.Element;
export default CategoricalLegend;
//# sourceMappingURL=CategoricalLegend.d.ts.map