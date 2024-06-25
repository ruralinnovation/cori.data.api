export interface ERCData {
    geoid: string;
    name: string;
    year: number;
    variable: string;
    value: number | null;
    metric: string;
}
  
export interface NameToGEOIDLookup {
    [key: string]: string;
}

export interface GEOIDToNameLookup {
    [key: string]: string;
}

export interface ContextText {
    whyItMatters: string;
    howToInterpret: string;
}

export interface MetricMetadata {
    category: string;
    chartType: string;
    yVar: string,
    groupVar?: string,
    title: string;
    subtitle: string;
    caption: string;
    yAxisTitle: string;
    xAxisTitle: string;
    yFormat: string;
    xFormat: string;
    dataLabelFormat: string;
    indexedData?: boolean;
}

export interface KeyStatsData {
    name: string;
    value: string;
}

export type KeyStatsMetadata = {
    [category: string]: {
      metric: string;
      variable: string;
      format: string;
      label: string;
      operation: string;
    }[];
  };
  