import React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";

export function ChevronSvg(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 16 16" fill="none">
      <Path
        d="M6 3.33317L10.6667 7.99984L6 12.6665"
        stroke={props.fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
