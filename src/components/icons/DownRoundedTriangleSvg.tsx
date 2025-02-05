import React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";

export function DownRoundedTriangleSvg(props: SvgProps) {
  const { fill } = props;
  return (
    <Svg {...props} viewBox="0 0 12 11" fill="none">
      <Path
        d="M7.52692 10C6.75712 11.3333 4.83262 11.3333 4.06282 10L0.421074 3.69231C-0.348727 2.35897 0.613523 0.692308 2.15312 0.692308L9.43662 0.692308C10.9762 0.692308 11.9385 2.35898 11.1687 3.69231L7.52692 10Z"
        fill={fill}
      />
    </Svg>
  );
}
