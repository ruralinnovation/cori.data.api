import { default as React } from 'react';
import { ERCData, MetricMetadata } from '../interfaces';

interface LineChartProps {
    primary_geoid: string;
    metric: string;
    data: ERCData[];
    metadata: MetricMetadata;
    width: number;
    height: number;
}
declare const LineChart: React.FC<LineChartProps>;
export default LineChart;
