export { default as headerSvg } from "!!raw-loader!./header.svg";
export { default as headerPawSvg } from "!!raw-loader!./header_paw.svg";
export { default as footerSvg } from "!!raw-loader!./footer.svg";
export { default as callLeftSvg } from "!!raw-loader!./call_left.svg";
export { default as callRightSvg } from "!!raw-loader!./call_right.svg";
export { default as dividerSvg } from "!!raw-loader!./divider.svg";
export { default as heartsSvg } from "!!raw-loader!./hearts.svg";
export { default as pawsSvg } from "!!raw-loader!./paws.svg";
export { default as tabletSvg } from "!!raw-loader!./tablet.svg";

export const createSvgUrl = (...svg) => svg.map((svg) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`).join(",");
