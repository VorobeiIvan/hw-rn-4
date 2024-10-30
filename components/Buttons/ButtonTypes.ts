import styles from "./ButtonStyles";

export type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  typeButton?: keyof typeof styles;
};
