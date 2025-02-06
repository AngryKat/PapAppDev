import React, { ReactNode } from "react";
import {
  ControllerFieldState,
  ControllerProps,
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormStateReturn,
} from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

type Props<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TFieldValues>;
};

export function ControlledInput<ComponentProps>(
  Component: (props: ComponentProps) => ReactNode
) {
  return function <
    TFieldValues extends FieldValues,
    TName extends Path<TFieldValues>
  >({
    field: { value, onChange },
    ...componentProps
  }: Props<TFieldValues, TName> & ComponentProps) {
    return (
      <Component
        {...(componentProps as ComponentProps)}
        value={value}
        onChange={onChange}
      />
    );
  };
}
