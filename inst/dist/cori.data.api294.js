import { commaSeparated as u, spaceSeparated as e, boolean as l, number as n, booleanish as o, overloadedBoolean as a } from "./cori.data.api381.js";
import { create as t } from "./cori.data.api379.js";
import { caseInsensitiveTransform as r } from "./cori.data.api380.js";
/*
 * CORI Data API component library
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
const d = t({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: r,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: u,
    acceptCharset: e,
    accessKey: e,
    action: null,
    allow: null,
    allowFullScreen: l,
    allowPaymentRequest: l,
    allowUserMedia: l,
    alt: null,
    as: null,
    async: l,
    autoCapitalize: null,
    autoComplete: e,
    autoFocus: l,
    autoPlay: l,
    blocking: e,
    capture: null,
    charSet: null,
    checked: l,
    cite: null,
    className: e,
    cols: n,
    colSpan: null,
    content: null,
    contentEditable: o,
    controls: l,
    controlsList: e,
    coords: n | u,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: l,
    defer: l,
    dir: null,
    dirName: null,
    disabled: l,
    download: a,
    draggable: o,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: l,
    formTarget: null,
    headers: e,
    height: n,
    hidden: l,
    high: n,
    href: null,
    hrefLang: null,
    htmlFor: e,
    httpEquiv: e,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: l,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: l,
    itemId: null,
    itemProp: e,
    itemRef: e,
    itemScope: l,
    itemType: e,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: l,
    low: n,
    manifest: null,
    max: null,
    maxLength: n,
    media: null,
    method: null,
    min: null,
    minLength: n,
    multiple: l,
    muted: l,
    name: null,
    nonce: null,
    noModule: l,
    noValidate: l,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: l,
    optimum: n,
    pattern: null,
    ping: e,
    placeholder: null,
    playsInline: l,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: l,
    referrerPolicy: null,
    rel: e,
    required: l,
    reversed: l,
    rows: n,
    rowSpan: n,
    sandbox: e,
    scope: null,
    scoped: l,
    seamless: l,
    selected: l,
    shadowRootClonable: l,
    shadowRootDelegatesFocus: l,
    shadowRootMode: null,
    shape: null,
    size: n,
    sizes: null,
    slot: null,
    span: n,
    spellCheck: o,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: n,
    step: null,
    style: null,
    tabIndex: n,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: l,
    useMap: null,
    value: o,
    width: n,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: e,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: n,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: n,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: l,
    // Lists. Use CSS to reduce space between items instead
    declare: l,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: n,
    // `<img>` and `<object>`
    leftMargin: n,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: n,
    // `<body>`
    marginWidth: n,
    // `<body>`
    noResize: l,
    // `<frame>`
    noHref: l,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: l,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: l,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: n,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: o,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: n,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: n,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: l,
    disableRemotePlayback: l,
    prefix: null,
    property: null,
    results: n,
    security: null,
    unselectable: null
  }
});
export {
  d as html
};
//# sourceMappingURL=cori.data.api294.js.map
