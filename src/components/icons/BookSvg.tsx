import React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";

export function BookSvg(props: SvgProps) {
  const { fill } = props;
  return (
    <Svg {...props} viewBox="0 0 22 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4898 2.11072C7.68914 0.430298 4.26388 0.155841 1.23133 1.36886C0.789632 1.54554 0.5 1.97333 0.5 2.44906V14.1079C0.5 14.8889 1.28876 15.4229 2.01387 15.1329C4.49721 14.1395 7.30215 14.3643 9.59563 15.7404L10.7309 16.4216C10.8175 16.4735 10.9101 16.4962 11 16.4946C11.0899 16.4962 11.1825 16.4735 11.2691 16.4216L12.4044 15.7404C14.6979 14.3643 17.5028 14.1395 19.9861 15.1329C20.7112 15.4229 21.5 14.8889 21.5 14.1079V2.44906C21.5 1.97333 21.2104 1.54554 20.7687 1.36886C17.7361 0.155841 14.3109 0.430298 11.5102 2.11072L11 2.41681L10.4898 2.11072ZM11.75 4.49991C11.75 4.08569 11.4142 3.74991 11 3.74991C10.5858 3.74991 10.25 4.08569 10.25 4.49991V13.9999C10.25 14.4141 10.5858 14.7499 11 14.7499C11.4142 14.7499 11.75 14.4141 11.75 13.9999V4.49991Z"
        fill={fill}
      />
      <Path
        d="M1.72484 17.0421C3.7487 15.8616 6.2513 15.8616 8.27516 17.0421L9.36242 17.6764C10.3743 18.2667 11.6257 18.2667 12.6376 17.6764L13.7248 17.0421C15.7487 15.8616 18.2513 15.8616 20.2752 17.0421L20.3779 17.1021C20.7357 17.3108 20.8565 17.77 20.6478 18.1278C20.4391 18.4856 19.9799 18.6065 19.6221 18.3977L19.5194 18.3378C17.9625 17.4297 16.0375 17.4297 14.4806 18.3378L13.3934 18.972C11.9144 19.8348 10.0856 19.8348 8.60661 18.972L7.51935 18.3378C5.96254 17.4297 4.03746 17.4297 2.48065 18.3378L2.3779 18.3977C2.02011 18.6065 1.56088 18.4856 1.35217 18.1278C1.14346 17.77 1.26431 17.3108 1.6221 17.1021L1.72484 17.0421Z"
        fill={fill}
      />
    </Svg>
  );
}
