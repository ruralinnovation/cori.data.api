import React from 'react';
interface CategoricalLegendProps {
    domain_names?: string[] | undefined;
    domain?: string[] | undefined;
    range?: unknown[] | undefined;
    scale?: any | undefined;
    na_message?: string;
    title?: string;
}
declare function CategoricalLegend({ domain, domain_names, range, title, scale, na_message }: CategoricalLegendProps): React.JSX.Element;
export default CategoricalLegend;
//# sourceMappingURL=CategoricalLegend.d.ts.map