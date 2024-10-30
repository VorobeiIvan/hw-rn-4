import React from "react";
import { View } from "react-native";
import { ContainerProps } from "./ContainerTypes";

import styles from "./ContainerStyles";

const Container: React.FC<ContainerProps> = ({ children, typeContainer }) => {
  return <View style={[styles[typeContainer || "container"]]}>{children}</View>;
};
export default Container;
