import React from "react";
import { Image } from "react-native";
import styles from "./CustomImageStyles";
import { ImgProps } from "./CustomImageTypes";

const CustomImage: React.FC<ImgProps> = ({ typeImage = "image", source }) => {
  return (
    <Image source={{ uri: source }} style={[styles[typeImage], styles.image]} />
  );
};

export default CustomImage;
