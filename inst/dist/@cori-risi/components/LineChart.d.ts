import React from 'react';
import { ERCData, MetricMetadata } from '../interfaces';
interface LineChartProps {
    primary_geoid: string;
    metric: string;
    data: ERCData[];
    metadata: MetricMetadata;
    width: number;
    height: number;
}
declare function LineChart({ primary_geoid, metric, data, metadata, width, height }: LineChartProps): React.JSX.Element;
export default LineChart;
//# sourceMappingURL=LineChart.d.ts.map