/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { helloAnything } from "../lib/cori.data.api";
import { createRoot } from "react-dom/client";

let container = null;
let root = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);
    root.render(<div></div>);
});

afterEach(() => {
    // cleanup on exiting
    // root.unmount();
    container.remove();
    container = null;
});

describe("jsdom ", () => {
    it("environment should allow appending elements to the DOM tree", () => {
        const element = document.createElement('div');
        expect(element).not.toBeNull();
        document.body.appendChild(element);
        element.remove();
    });
});
