import { default as React } from 'react';

interface CategoricalLegendProps {
    data_names: string[];
    domain: string[];
    range: unknown[];
}
declare const CategoricalLegend: React.FC<CategoricalLegendProps>;
export default CategoricalLegend;
