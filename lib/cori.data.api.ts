// Testy stuff
export function helloAnything(thing: string): string {
    return `Hello ${thing}!`
}

export {
    Button,
    Input,
    Label
} from './@cori-risi/components/basic';

// Actual API
export { default as BarChart } from './@cori-risi/components/BarChart';
export { default as CategoricalLegend } from './@cori-risi/components/CategoricalLegend';
export { default as DataMetricPanel } from './@cori-risi/components/DataMetricPanel';
export { default as GroupedBarChart } from './@cori-risi/components/GroupedBarChart';
export { default as LineChart } from './@cori-risi/components/LineChart';

export {
    default as ApiContextProvider,
    ApiContext
} from './@cori-risi/contexts/ApiContextProvider';
