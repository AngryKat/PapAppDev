import React from "react";
import Svg, {
  ClipPath,
  Defs,
  G,
  Path,
  Rect,
  type SvgProps,
} from "react-native-svg";

export function BellFilledSvg(props: SvgProps) {
  return (
    <Svg {...props} fill="none" viewBox="0 0 16 20">
      <Path
        fill={props.fill}
        fillRule="evenodd"
        d="M8 20c1.1 0 2-.9 2-2H6a2 2 0 0 0 2 2Zm6-6V9c0-3.07-1.64-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.63 3.36 2 5.92 2 9v5l-2 2v1h16v-1l-2-2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
