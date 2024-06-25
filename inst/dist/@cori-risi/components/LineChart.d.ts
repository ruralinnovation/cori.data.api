import { ERCData, MetricMetadata } from '../interfaces';

interface LineChartProps {
    primary_geoid: string;
    metric: string;
    data: ERCData[];
    metadata: MetricMetadata;
    width: number;
    height: number;
}
declare const _default: (props: LineChartProps) => import("react/jsx-runtime").JSX.Element;
export default _default;
