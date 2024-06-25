import { ERCData, MetricMetadata } from '../interfaces';

interface GroupedBarChartProps {
    primary_geoid: string;
    metric: string;
    data: ERCData[];
    metadata: MetricMetadata;
    width: number;
}
declare function GroupedBarChart({ primary_geoid, metric, data, metadata, width }: GroupedBarChartProps): import("react/jsx-runtime").JSX.Element;
export default GroupedBarChart;
