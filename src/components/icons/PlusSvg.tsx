import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

export function PlusSvg(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 24 25" fill="none">
      <G clipPath="url(#clip0_136_1084)">
        <Path
          d="M11.8687 1.98969V22.7464"
          stroke={props.fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.48962 12.3687H22.2464"
          stroke={props.fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_136_1084">
          <Rect
            width={props.width}
            height={props.height}
            fill={props.fill}
            transform="translate(0.256714 0.756775)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
