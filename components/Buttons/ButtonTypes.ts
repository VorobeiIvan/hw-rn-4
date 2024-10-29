import { StyleProp, ViewStyle, TextStyle } from "react-native";
import styles from "./ButtonStyles";

export type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  typeButton?: keyof typeof styles;
};
