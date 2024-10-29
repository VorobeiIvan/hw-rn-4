import { TextInputProps } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

export type InputProps = {
  value: string;
  placeholder?: string;
  outerStyles?: ViewProps["style"];
  rightButton?: React.ReactNode;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  autofocus?: boolean;
  inputMode?: TextInputProps["inputMode"];
  maxLength?: number;
  textContentType?: TextInputProps["textContentType"];
  keyboardType?: TextInputProps["keyboardType"];
};
