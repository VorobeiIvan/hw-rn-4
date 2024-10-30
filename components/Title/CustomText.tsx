import { FC } from "react";
import { Text } from "react-native";
import { CustomTextProps } from "./CustomTextType";
import styles from "./CustomTextStyles";

const CustomText: FC<CustomTextProps> = ({
  typeCustomText,
  children,
  style,
}) => {
  const textStyle = typeCustomText ? styles[typeCustomText] : {}; // Отримуємо стилі на основі типу тексту

  return <Text style={[textStyle, style]}>{children}</Text>;
};

export default CustomText;
