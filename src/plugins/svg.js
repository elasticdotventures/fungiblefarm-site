// code borrowed from:
// https://codesandbox.io/s/m324p7lpoy?file=/src/main.js
// https://svgjs.com/docs/3.0/getting-started/

import { SVG } from "@svgdotjs/svg.js";
// import panZoom from "svg.panzoom.js";

export default {
  install: Vue => {
    Vue.prototype.$svg = SVG;
  }
};

