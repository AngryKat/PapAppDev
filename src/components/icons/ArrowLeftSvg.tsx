import React from "react";
import Svg, {
  ClipPath,
  Defs,
  G,
  Path,
  Rect,
  type SvgProps,
} from "react-native-svg";

export function ArrowLeftSvg(props: SvgProps) {
  const { fill, height, width } = props;
  return (
    <Svg {...props} viewBox="0 0 18 21" fill="none">
      <G clipPath="url(#clip0_52_3075)">
        <Path
          d="M-0.707107 9.29289C-1.09763 9.68342 -1.09763 10.3166 -0.707107 10.7071L5.65685 17.0711C6.04738 17.4616 6.68054 17.4616 7.07107 17.0711C7.46159 16.6805 7.46159 16.0474 7.07107 15.6569L1.41421 10L7.07107 4.34315C7.46159 3.95262 7.46159 3.31946 7.07107 2.92893C6.68054 2.53841 6.04738 2.53841 5.65685 2.92893L-0.707107 9.29289ZM8.74228e-08 11L18 11L18 9L-8.74228e-08 9L8.74228e-08 11Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_52_3075">
          <Rect width={width} height={height} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
