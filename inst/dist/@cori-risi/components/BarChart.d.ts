import { default as React } from 'react';
import { ERCData, MetricMetadata } from '../interfaces';

interface BarChartProps {
    primary_geoid: string;
    metric: string;
    data: ERCData[];
    metadata: MetricMetadata;
    width: number;
    element_name: string;
}
declare const BarChart: React.FC<BarChartProps>;
export default BarChart;
