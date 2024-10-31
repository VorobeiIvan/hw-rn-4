import { FC } from "react";
import { Text } from "react-native";
import { CustomTextProps } from "./CustomTextType";
import styles from "./CustomTextStyles";

const CustomText: FC<CustomTextProps> = ({
  typeCustomText,
  children,
  style,
}) => {
  const textStyle = typeCustomText && styles[typeCustomText] ? styles[typeCustomText] : {};

  return (
    <Text style={[textStyle, style]}>
      {children}
    </Text>
  );
};

export default CustomText;
