import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "./ButtonTypes";

import styles from "./ButtonStyles";
import CustomText from "../Title/CustomText";

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
        <CustomText typeCustomText="button">{children}</CustomText>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Button;
