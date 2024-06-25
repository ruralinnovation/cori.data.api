import { ERCData, MetricMetadata } from '../interfaces';

interface BarChartProps {
    primary_geoid: string;
    metric: string;
    data: ERCData[];
    metadata: MetricMetadata;
    width: number;
}
declare function BarChart({ primary_geoid, metric, data, metadata, width }: BarChartProps): import("react/jsx-runtime").JSX.Element;
export default BarChart;
