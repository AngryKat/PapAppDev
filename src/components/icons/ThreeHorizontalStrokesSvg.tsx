import React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";

export function ThreeHorizontalStrokesSvg(props: SvgProps) {
  const { fill } = props;
  return (
    <Svg {...props} fill="none" viewBox="0 0 24 24">
      <Path
        d="M8 18L20 18"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M4 12L12 12"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path d="M4 6H20" stroke={fill} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}
