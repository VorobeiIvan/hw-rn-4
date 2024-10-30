import React from "react";
import { TextInputProps, ViewStyle } from "react-native";

export type InputProps = {
  id: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  outerStyles?: ViewStyle;
  rightButton?: React.ReactNode;
  secureTextEntry?: boolean;
  autofocus?: boolean;
  inputMode?: TextInputProps["inputMode"];
  maxLength?: number;
  textContentType?: TextInputProps["textContentType"];
  keyboardType?: TextInputProps["keyboardType"];
  validationFunction?: (value: string) => string | null;
  errorMessage?: string;
  required?: boolean;
  showCharacterCount?: boolean;
  autoCorrect?: boolean;
  icon?: React.ReactNode;
  showTogglePassword?: boolean;
};
