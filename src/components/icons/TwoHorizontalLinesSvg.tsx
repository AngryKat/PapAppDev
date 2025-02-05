import React from "react";
import Svg, { Rect, type SvgProps } from "react-native-svg";

export function TwoHorizontalLinesSvg(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 18 26" fill="none">
      <Rect y="0.5" width="4" height="25" rx="2" fill={props.fill} />
      <Rect x="14" y="0.5" width="4" height="25" rx="2" fill={props.fill} />
    </Svg>
  );
}
