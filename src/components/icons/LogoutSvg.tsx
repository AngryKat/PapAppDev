import React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";

export function LogoutSvg(props: SvgProps) {
  return (
    <Svg {...props} fill="none" viewBox="0 0 17 16">
      <Path
        fill={props.fill}
        d="M8.25 15a.75.75 0 0 1 .75-.75h6a.25.25 0 0 0 .25-.25V2a.25.25 0 0 0-.25-.25H9a.75.75 0 0 1 0-1.5h6c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 15 15.75H9a.75.75 0 0 1-.75-.75Z"
      />
      <Path
        fill={props.fill}
        d="M12.612 9.115a1 1 0 0 1-1 1H6.756c-.023.356-.052.71-.086 1.066l-.03.305a.718.718 0 0 1-1.025.578A16.845 16.845 0 0 1 .73 8.525L.7 8.494a.721.721 0 0 1 0-.998l.03-.031a16.843 16.843 0 0 1 4.885-3.539.718.718 0 0 1 1.025.578l.03.305c.034.355.063.71.086 1.066h4.856a1 1 0 0 1 1 1v2.24Z"
      />
    </Svg>
  );
}
