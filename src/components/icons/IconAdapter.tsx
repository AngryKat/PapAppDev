import colors from "@/config/colors";
import React, { ReactNode } from "react";
import { SvgProps } from "react-native-svg";

type Props = {
  color?: string;
  size: number;
} & Omit<SvgProps, "fill" | "width" | "height">;

export function IconAdapter(SvgComponent: (props: SvgProps) => ReactNode) {
  return ({ color = colors.black, size, ...props }: Props) => (
    <SvgComponent {...props} width={size} height={size} fill={color} />
  );
}

export type IconAdapterProps = Props;
