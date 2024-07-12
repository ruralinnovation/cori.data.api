import { helloAnything } from '../lib/cori.data.api';

describe("helloAnything ", () => {
    it("should return a greeting with the thing argument", () => {
        expect(helloAnything("J H")).toEqual("Hello J H!");
    });
});
