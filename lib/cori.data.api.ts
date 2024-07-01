import * as global_types from './globals';

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
// export { default as BarChart } from './@cori-risi/components/BarChart';
export { default as CategoricalLegend } from './@cori-risi/components/CategoricalLegend';
