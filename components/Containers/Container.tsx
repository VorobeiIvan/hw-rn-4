import React from "react";
import { View } from "react-native";
import { ContainerProps } from "./ContainerTypes";

import styles from "./ContainerStyles";

const Container: React.FC<ContainerProps> = ({ children, type }) => {
  return <View style={[styles[type || "container"]]}>{children}</View>;
};
export default Container;
