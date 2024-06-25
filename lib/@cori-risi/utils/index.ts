import * as aq from "arquero";
import * as d3 from 'd3';
import { toPng } from 'html-to-image';
import { chartStyle } from './constants';
import { ERCData, GEOIDToNameLookup, KeyStatsData, KeyStatsMetadata, MetricMetadata } from '../interfaces';

export const formatPercent = d3.format(".1%");

export function toSnakeCase(str: string) {
  return str.replace(/\s+/g, '_').toLowerCase();
}

export const getLabel = (label_format: string, value: number | null): string => {

  if (value === null) {
    return "N/A";
  }
  else {
    return d3.format(label_format)(+value);
  }

}

export const renderMetric = (metric: string): string => {

  const temp_names: Record<string, string> = {
    "Employment": "Employment change",
    "Real GDP per worker": "Productivity",
    "Number of establishments": "Business growth",
    "Herfindahl-Hirschman index": "Industry diversity",
    "Gini index": "Inequality",
    "Race and ethnicity (Multiple races)": "Race and ethnicity (multiple races)",
    "Race and ethnicity (Race alone)": "Race and ethnicity (race alone)",
    "Percent non-farm proprietors employment": "Self-employment"
  }

  // Push the metric to its respective category
  if (Object.prototype.hasOwnProperty.call(temp_names, metric)) {
    return temp_names[metric];
  }
  else {
    return metric;
  }
}

export const getMetricLayout = (metadata: Record<string, MetricMetadata>): Record<string, string[]> => {

  const metric_layout: Record<string, string[]> = {};

  // Iterate through each metric
  Object.entries(metadata).forEach(([metric, data]) => {
    const category = data.category;

    // If the category doesn't exist in the layout, create it
    if (!metric_layout[category]) {
      metric_layout[category] = [];
    }

    // Push the metric to its respective category
    metric_layout[category].push(metric);

  });

  return metric_layout;

}

export const renderVariable = (variable: string): string => {
  return variable;
}

export const renderGEOID = (geoid: string, geoid_to_name_lookup: GEOIDToNameLookup): string => {

  if (Object.prototype.hasOwnProperty.call(geoid_to_name_lookup, geoid)) {
    return geoid_to_name_lookup[geoid];
  }
  if (geoid === "COMPARISON") {
    return "Comparison counties";
  }
  else {
    return geoid;
  }

}

export const getMaxYLabelWidth = (
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined>
): number => {

  let maxw = 0;
  const margin_buffer = 2;
  svg.selectAll<SVGGElement, ERCData[]>('.y-axis g.tick').each(function(this: SVGGElement) {
    const textWidth = this.getBBox().width;
    if (textWidth > maxw) {
      maxw = textWidth + margin_buffer;
    }
  });

  return maxw;
}

export const applyCORIStyles = (
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined>
): void=> {

  svg
      .selectAll('.tick line')
      .attr("stroke", chartStyle.tickLineColor);

  svg
      .selectAll(".domain")
      .attr("stroke", "#d0d2ce");

  svg
      .selectAll(".y-axis .tick line")
      .style("opacity", chartStyle.yTickOpacity)

  svg
      .selectAll(".gridline")
      .style("opacity", chartStyle.gridLineOpacity);

  svg
      .selectAll('.x-axis text')
      .style("font-family", chartStyle.tickFontFamily)
      .style("font-size", chartStyle.tickFontSize)
      .style("color", chartStyle.tickFontColor);

}

export const getGEOIDColorRange = (geoid: string, i: number): string => {

  const viable_colors = ["#FFE473", "#004A5A", "#00835D","#E74F2A", "#234FBF", "#48336A"];

  if (i > 5) {
    throw new Error("Can only generate color scales for six or less values");
  }

  // National
  if (geoid === "00") {
    return "#E74F2A";
  }

  if (geoid === "COMPARISON") {
    return "#234FBF";
  }

  // Primary county
  if (geoid.length === 5) {
    return "#00835D";
  }

  // State
  if (geoid.length === 2) {
    return "#48336A";
  }

  return viable_colors[i];

}

export const aggregateCountyData = (
    data: ERCData[],
    counties: string[],
    metric: string
): ERCData[] => {


  const filtered_dta = data
      .filter(d => d.metric === metric)
      .filter(d => counties.includes(d.geoid));

  if (filtered_dta.length === 0) {
    return [];
  }

  const agg_dta = aq.from(filtered_dta)
      .groupby("metric", "year", "variable")
      .rollup({value: d => aq.op.mean(d!.value)})
      .derive({geoid: () => "COMPARISON"})
      .objects() as ERCData[];

  return agg_dta;

}

export const getChartData = (
    data: ERCData[],
    metric: string | null,
    primary_geoid: string | null,
    comparison_geoids: string[],
    show_multiple_geos: boolean,
    metric_metadata: MetricMetadata,
    geoid_to_name_lookup: GEOIDToNameLookup
): ERCData[] => {

  if (primary_geoid === null || metric === null) {
    return [];
  }

  const geoid_st = primary_geoid.slice(0, 2);
  let valid_geoids: string[] = [primary_geoid];

  if (show_multiple_geos) {
    valid_geoids = [geoid_st, "00", ...valid_geoids];
  }

  let filtered_dta = data
      .filter(d => valid_geoids.includes(d.geoid))
      .filter(d => d.metric === metric);

  let sort_order = [primary_geoid, geoid_st, "00"];
  if (comparison_geoids.length > 0 && show_multiple_geos) {
    // Check if there is comparison county data before proceeding with aggregation
    const comparison_dta = aggregateCountyData(data, comparison_geoids, metric);
    filtered_dta.push(...comparison_dta);
    sort_order = [primary_geoid, "COMPARISON", geoid_st, "00"];
  }

  if (metric_metadata.indexedData) {
    filtered_dta = indexToFirstYear(filtered_dta);
  }

  // sort smallest to largest geography
  if (metric_metadata.yVar === "geoid") {
    filtered_dta.sort((a, b) => {
      const indexA = sort_order.indexOf(a.geoid);
      const indexB = sort_order.indexOf(b.geoid);
      return indexA - indexB;
    });
  }

  // sort alphabetically
  if (metric_metadata.yVar === "variable") {
    filtered_dta.sort((a, b) => a.variable.localeCompare(b.variable));
  }

  if (metric === "Income distribution") {
    const income_sort_order = [
      "<$15K",
      "$15-30K",
      "$30-45k",
      "$45-60K",
      "$60-75K",
      "$75-100K",
      "$100-125K",
      "$125-150K",
      "$150-200K",
      ">$200K"
    ]

    filtered_dta.sort((a, b) => {
      const indexA = income_sort_order.indexOf(a.variable);
      const indexB = income_sort_order.indexOf(b.variable);
      return indexA - indexB;
    });

  }

  if (metric === "Employment by industry") {
    filtered_dta.sort((a, b) => {
      if (a.value === null && b.value === null) return 0;
      if (a.value === null) return 1; // Treat null values as greater (will move to end)
      if (b.value === null) return -1; // Treat null values as greater (will move to end)
      return +b.value - +a.value;
    });

    const max_year = d3.max(filtered_dta, d => +d.year);
    const largest_recent_records = filtered_dta
        .filter(d => d.year == max_year)
        .slice(0, 5);
    const largest_industries = [...new Set(largest_recent_records.map(d => d["variable"].toString()))];


    filtered_dta = filtered_dta.filter(d => largest_industries.includes(d.variable));
  }

  // Add tests to see what data is available
  const test = filtered_dta.filter(d => d.geoid === primary_geoid);
  if (test.length === 0) {
    console.log("NO DATA FOR ", primary_geoid, metric);
    return [];
  }

  return filtered_dta
      .map(d => {
        d.name = renderGEOID(d.geoid, geoid_to_name_lookup)
        return d;
      });

}

export const saveChartAsPNG = (ref: React.RefObject<HTMLDivElement>, filename: string): void => {

  if (ref.current === null) {
    return;
  }

  toPng(ref.current,
      {
        cacheBust: true,
        style:
            {
              margin: "0px",
              backgroundColor: "white"
            }
      })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      })
}

// Returns variable with the largest value in the most recent year
export const getLatestTopVariable = (data: ERCData[], geoid: string, metric: string): string => {

  const metric_dta = data
      .filter(d => d.geoid === geoid)
      .filter(d => d.metric === metric);

  const max_year = d3.max(metric_dta, d => +d.year);

  const metric_filtered_dta = metric_dta
      .filter(d => d.year === max_year)
      .sort((a, b) => {
        if (a.value === null && b.value === null) return 0;
        if (a.value === null) return 1; // Treat null values as greater (will move to end)
        if (b.value === null) return -1; // Treat null values as greater (will move to end)
        return +b.value - +a.value;
      }); // Sorting by value in descending order

  if (metric_filtered_dta.length > 0) {
    return metric_filtered_dta[0].variable;
  } else {
    throw new Error("getLatestTopValue: variable/year not found: " + metric + " and " + geoid);
  }
}


export const getLatestValue = (data: ERCData[], geoid: string, variable: string, metric?: string): number | null => {

  const variable_dta = metric === undefined?
      data
          .filter(d => d.geoid === geoid)
          .filter(d => d.variable === variable):
      data
          .filter(d => d.geoid === geoid)
          .filter(d => d.metric === metric)
          .filter(d => d.variable === variable);


  const max_year = d3.max(variable_dta, d => +d.year);

  const variable_filtered_dta = variable_dta
      .filter(d => d.year === max_year);

  if (variable_filtered_dta.length > 0) {
    return variable_filtered_dta[0].value;
  }
  else {
    console.log("getLatestTopValue: variable/year not found: " + metric + " and " + geoid + " and " + variable);
    return null;
  }

}

export const getOldestValue = (data: ERCData[], geoid: string, variable: string): number | null => {

  const variable_dta = data
      .filter(d => d.geoid === geoid)
      .filter(d => d.variable === variable);

  if (variable_dta.length === 0) {
    console.log("Key metric or geoid not found");
    return null;
  }

  const min_year = d3.min(variable_dta, d => +d.year);

  const variable_value: number | null= variable_dta
      .filter(d => d.year === min_year)[0].value;

  return variable_value;
}

export const getStartYear = (data: ERCData[], geoid: string, variable: string): number | null => {

  const variable_dta = data
      .filter(d => d.geoid === geoid)
      .filter(d => d.variable === variable);

  if (variable_dta.length === 0) {
    console.log("getStartYear: Key metric or geoid not found");
    return null;
  }

  const min_year = d3.min(variable_dta, d => +d.year);

  return min_year === undefined? null: min_year;

}

export const getLatestYear = (data: ERCData[], geoid: string, variable: string): number | null => {

  const variable_dta = data
      .filter(d => d.geoid === geoid)
      .filter(d => d.variable === variable);

  if (variable_dta.length === 0) {
    console.log("getLatestYear: Key metric or geoid not found");
    return null;
  }

  const max_year = d3.max(variable_dta, d => +d.year);
  return max_year === undefined? null: max_year;

}

export const getPopulationKeyTakeaway = (primary_geoid: string, data: ERCData[]): string | null => {

  const pop_variable = "population";

  // Calculate values for metric
  const primary_max_val: number | null = getLatestValue(data, primary_geoid, pop_variable);
  const natl_max_val: number | null = getLatestValue(data, "00", pop_variable);

  const primary_min_val: number | null = getOldestValue(data, primary_geoid, pop_variable);
  const natl_min_val: number | null = getOldestValue(data, "00", pop_variable);

  if (
      primary_max_val === null || primary_min_val === null ||
      natl_max_val === null || natl_min_val === null
  ) {
    return null;
  }

  const pct_chg_primary = (primary_max_val - primary_min_val) / primary_min_val;
  const pct_chg_natl = (natl_max_val - natl_min_val) / natl_min_val;

  if (isNaN(pct_chg_primary) || pct_chg_primary === null || pct_chg_primary === undefined) {
    return null;
  }

  // Rule logic
  if (pct_chg_primary > pct_chg_natl) {
    return `Your county is growing quickly. In the last five years, the population in your county grew by ${formatPercent(pct_chg_primary)}, 
    exceeding the national rate of ${formatPercent(pct_chg_natl)}.`;
  }
  else if (pct_chg_primary > 0 && pct_chg_primary < pct_chg_natl) {
    return `Your county is growing slowly. In the last five years, the population in your county grew by ${formatPercent(pct_chg_primary)}, 
    while the national population grew by ${formatPercent(pct_chg_natl)}.`;
  }
  else {
    return `Your county's population is shrinking. In the last five years, the population in your county decreased by ${formatPercent(pct_chg_primary)}.`;
  }

}

export const getBroadbandServiceKeyTakeaway = (primary_geoid: string, data: ERCData[]): string | null => {

  const bb_variable = "100/20 Mbps";

  // Calculate values for metric
  const primary_max_val: number | null = getLatestValue(data, primary_geoid, bb_variable);
  const natl_max_val: number | null = getLatestValue(data, "00", bb_variable);

  if (primary_max_val === null || natl_max_val === null) {
    return null;
  }

  if (isNaN(primary_max_val) || primary_max_val === null || primary_max_val === undefined) {
    return null;
  }

  if (primary_max_val > natl_max_val) {
    return `Your county has adequate broadband service. ${formatPercent(primary_max_val)} of locations in your county 
    have 100/20 Mbps service, the FCC benchmark for broadband service, compared to ${formatPercent(natl_max_val)} of locations nationally.`;
  }
  else {
    return `Expanding broadband service could reduce barriers to economic opportunity in your county. ${formatPercent(primary_max_val)} of locations in your county 
    have 100/20 Mbps service, the FCC benchmark for broadband service, compared to ${formatPercent(natl_max_val)} of locations nationally.`;
  }

}

export const getEducationalAttainmentKeyTakeaway = (primary_geoid: string, data: ERCData[]): string | null => {

  const ed_attainment_variable = "share_ba_or_higher";

  // Calculate values for metric
  const primary_max_val: number | null = getLatestValue(data, primary_geoid, ed_attainment_variable);
  const natl_max_val: number | null = getLatestValue(data, "00", ed_attainment_variable);

  if (primary_max_val === null || natl_max_val === null) {
    return null;
  }

  if (isNaN(primary_max_val) || primary_max_val === null || primary_max_val === undefined) {
    return null;
  }

  if (primary_max_val < natl_max_val) {
    return `Educational attainment in your county lags the nation. ${formatPercent(primary_max_val)} of 
      the population has a Bachelor's degree or higher, compared to ${formatPercent(natl_max_val)} nationally.`;
  }
  else {
    return `Educational attainment in your county is excellent. ${formatPercent(primary_max_val)} of 
      the population has a Bachelor's degree or higher, compared to ${formatPercent(natl_max_val)} nationally.`;
  }

}

export const getTradableServicesKeyTakeaway = (primary_geoid: string, data: ERCData[]): string | null => {

  const ts_variable = "Tradable services";
  const ts_metric = "Share of employment in tradable services";

  // Calculate values for metric
  const primary_max_val: number | null = getLatestValue(data, primary_geoid, ts_variable, ts_metric);
  const natl_max_val: number | null = getLatestValue(data, "00", ts_variable);

  if (primary_max_val === null || natl_max_val === null) {
    return null;
  }

  if (isNaN(primary_max_val) || primary_max_val === null || primary_max_val === undefined) {
    return null;
  }

  if (primary_max_val < natl_max_val) {
    return `Your county's tradable services employment is below the national average. ${formatPercent(primary_max_val)} of 
    the workforce is employed in tradable services, compared to ${formatPercent(natl_max_val)} nationally.`;
  }
  else {
    return `Your county has a strong tradable economy. ${formatPercent(primary_max_val)} of 
    the workforce is employed in tradable services, compared to ${formatPercent(natl_max_val)} nationally.`;
  }

}

export const getBusinessGrowthKeyTakeaway = (primary_geoid: string, data: ERCData[]): string | null => {

  const variable = "establishments";
  const metric = "Number of establishments";

  // Calculate values for metric
  const primary_max_val: number | null = getLatestValue(data, primary_geoid, variable, metric);
  const natl_max_val: number | null = getLatestValue(data, "00", variable);

  const primary_min_val: number | null = getOldestValue(data, primary_geoid, variable);
  const natl_min_val: number | null = getOldestValue(data, "00", variable);

  const min_year = getStartYear(data, primary_geoid, variable);
  const max_year = getLatestYear(data, primary_geoid, variable);

  if (min_year === null) {
    return null;
  }

  if (
      primary_max_val === null || primary_min_val === null ||
      natl_max_val === null || natl_min_val === null
  ) {
    return null;
  }

  const pct_chg_primary = (primary_max_val - primary_min_val) / primary_min_val;
  const pct_chg_natl = (natl_max_val - natl_min_val) / natl_min_val;

  if (isNaN(pct_chg_primary) || pct_chg_primary === null || pct_chg_primary === undefined) {
    return null;
  }

  if (isNaN(pct_chg_natl) || pct_chg_natl === null || pct_chg_natl === undefined) {
    return null;
  }

  if (pct_chg_primary > pct_chg_natl) {
    return `Business growth in your county is strong. Between ${min_year} and ${max_year}, the number 
    of businesses in your county grew by ${formatPercent(pct_chg_primary)}, exceeding the 
    national rate of ${formatPercent(pct_chg_natl)}.`;
  }
  else if (pct_chg_primary > 0 && pct_chg_primary < pct_chg_natl) {
    return `Business growth in your county is limited. Between ${min_year} and ${max_year}, the 
    number of businesses in your county grew by ${formatPercent(pct_chg_primary)}, while 
    the number of businesses nationally grew by ${formatPercent(pct_chg_natl)}.`;
  }
  else {
    return `Business growth in your county is in decline. Between ${min_year} and ${max_year}, the number of businesses 
    in your county decreased by ${formatPercent(pct_chg_primary)}.`;
  }

}

export const getKeyStatsData = (category: string, primary_geoid: string, data: ERCData[], key_stats_metadata: KeyStatsMetadata): KeyStatsData[] => {

  const ret_dta: KeyStatsData[] = [];
  key_stats_metadata[category].map(stat => {

    if (stat.operation === "top_latest") {
      const latest_top_variable = getLatestTopVariable(data, primary_geoid, stat.metric);
      ret_dta.push({name: stat.label, value: latest_top_variable});
    }

    if (stat.operation === "change") {
      const latest_value = getLatestValue(data, primary_geoid, stat.variable);
      const oldest_value = getOldestValue(data, primary_geoid, stat.variable);

      if (latest_value === null || oldest_value === null) {
        return null;
      }

      const change = latest_value - oldest_value;
      if (change && !isNaN(change)) {
        ret_dta.push({name: stat.label, value: d3.format(stat.format)(change)});
      }
    }

    if (stat.operation === "latest") {
      const latest_value = getLatestValue(data, primary_geoid, stat.variable);
      if (latest_value && !isNaN(latest_value)) {
        ret_dta.push({name: stat.label, value: d3.format(stat.format)(latest_value)});
      }
    }
  });

  return ret_dta;

}

// Indexes data to percentage of first year
export const indexToFirstYear = (data: ERCData[]): ERCData[] => {

  const geographies = [...new Set(data.map(d => d.geoid))];
  const variable = [...new Set(data.map(d => d.variable))];

  if (variable.length !== 1) {
    throw new Error("Wrong number of variables when indexing");
  }

  const new_data = [];
  for (const geo of geographies) {
    const oldest_value = getOldestValue(data, geo, variable[0]);

    const updated_data = data
        .filter(d => d.geoid === geo)
        .map(obj => {
          return { ...obj, value: obj.value === null || oldest_value === null? null: obj.value / oldest_value };
        });

    new_data.push(...updated_data as ERCData[]);

  }

  return new_data;

}

export const getMetricText = (data: d3.DSVRowArray<string>, metric: string): {whyItMatters: string, howToInterpret: string} => {

  const filtered_dta = data
      .filter(d => d.metric === metric);

  if (filtered_dta.length === 1) {
    const metric_text = {
      whyItMatters: filtered_dta[0].whyItMatters,
      howToInterpret: filtered_dta[0].howToInterpret
    }
    return metric_text;
  }
  else {
    return {
      whyItMatters: "",
      howToInterpret: ""
    };
  }

}
