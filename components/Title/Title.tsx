import { FC } from "react";
import { Text, TextStyle } from "react-native";

export type TitleProps = {
  typeTitle?: TextStyle;
  children: React.ReactNode;
};

const Title: FC<TitleProps> = ({ typeTitle, children }) => {
  return <Text style={typeTitle}>{children}</Text>;
};

export default Title;
