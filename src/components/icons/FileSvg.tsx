import React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";

export function FileSvg(props: SvgProps) {
  const { fill } = props;
  return (
    <Svg fill="none" viewBox="0 0 16 20" {...props}>
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M10.25.5A.25.25 0 0 0 10 .25H3A2.75 2.75 0 0 0 .25 3v14A2.75 2.75 0 0 0 3 19.75h10A2.75 2.75 0 0 0 15.75 17V7.147a.25.25 0 0 0-.25-.25H11a.75.75 0 0 1-.75-.75V.5Zm.75 9.75a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h6Zm0 4a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h6Z"
        clipRule="evenodd"
      />
      <Path
        fill={fill}
        d="M11.75.824c0-.184.193-.302.336-.186.121.098.23.212.322.342l3.014 4.197c.068.096-.006.22-.124.22H12a.25.25 0 0 1-.25-.25V.824Z"
      />
    </Svg>
  );
}
