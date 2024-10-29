import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "./ButtonTypes";
import Title from "../Title/Title";

import styles from "./ButtonStyles";

const Button: FC<ButtonProps> = ({
  children,
  onPress,
  typeButton = "button",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[typeButton]]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {typeof children === "string" ? (
        <Title typeTitle={styles[typeButton]}>{children}</Title>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Button;
