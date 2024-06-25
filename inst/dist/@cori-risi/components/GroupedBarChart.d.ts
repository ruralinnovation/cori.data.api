import { default as React } from 'react';
import { ERCData, MetricMetadata } from '../interfaces';

interface GroupedBarChartProps {
    primary_geoid: string;
    metric: string;
    data: ERCData[];
    metadata: MetricMetadata;
    width: number;
    element_name: string;
}
declare const GroupedBarChart: React.FC<GroupedBarChartProps>;
export default GroupedBarChart;
