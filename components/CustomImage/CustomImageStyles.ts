import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backgroundImage: {

    position: "absolute",
    top: 0,
    left: 0,
    // zIndex: -1,
    // backgroundColor: COLORS.LIGHT_GRAY,
  },
  avatar: {
    width: 50, // Встановіть відповідний розмір
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
});


export default styles;
