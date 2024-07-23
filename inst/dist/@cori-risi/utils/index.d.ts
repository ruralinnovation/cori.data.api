import * as d3 from 'd3';
import { ERCData, GEOIDToNameLookup, MetricMetadata } from '../interfaces';
export declare const formatPercent: (n: number | {
    valueOf(): number;
}) => string;
export declare function toSnakeCase(str: string): string;
export declare const getLabel: (label_format: string, value: number | null) => string;
export declare const renderMetric: (metric: string) => string;
export declare const getMetricLayout: (metadata: Record<string, MetricMetadata>) => Record<string, string[]>;
export declare const renderVariable: (variable: string) => string;
export declare const renderGEOID: (geoid: string, geoid_to_name_lookup: GEOIDToNameLookup) => string;
export declare const getMaxYLabelWidth: (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) => number;
export declare const applyCORIStyles: (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) => void;
export declare const getGEOIDColorRange: (geoid: string, i: number) => string;
export declare const getChartData: (data: ERCData[], metric: string | null, primary_geoid: string | null, comparison_geoids: string[], show_multiple_geos: boolean, metric_metadata: MetricMetadata, geoid_to_name_lookup: GEOIDToNameLookup) => ERCData[];
export declare const saveChartAsPNG: (ref: React.RefObject<HTMLDivElement>, filename: string) => void;
export declare const getLatestValue: (data: ERCData[], geoid: string, variable: string, metric?: string) => number | null;
export declare const getOldestValue: (data: ERCData[], geoid: string, variable: string) => number | null;
export declare const getStartYear: (data: ERCData[], geoid: string, variable: string) => number | null;
export declare const getLatestYear: (data: ERCData[], geoid: string, variable: string) => number | null;
export declare const getPopulationKeyTakeaway: (primary_geoid: string, data: ERCData[]) => string | null;
export declare const getBroadbandServiceKeyTakeaway: (primary_geoid: string, data: ERCData[]) => string | null;
export declare const getEducationalAttainmentKeyTakeaway: (primary_geoid: string, data: ERCData[]) => string | null;
export declare const getTradableServicesKeyTakeaway: (primary_geoid: string, data: ERCData[]) => string | null;
export declare const getBusinessGrowthKeyTakeaway: (primary_geoid: string, data: ERCData[]) => string | null;
export declare const indexToFirstYear: (data: ERCData[]) => ERCData[];
export declare const getMetricText: (data: d3.DSVRowArray<string>, metric: string) => {
    whyItMatters: string;
    howToInterpret: string;
};
export declare function autoSignOut(signOut: Function): void;
//# sourceMappingURL=index.d.ts.map