import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, PADDING } from "../../constants";

const styles: any = StyleSheet.create({
  primaryButton: {
    borderRadius: BORDER_RADIUS.BUTTON,
    backgroundColor: COLORS.ORANGE,
    paddingVertical: PADDING.VERTICAL,
    paddingHorizontal: PADDING.HORIZONTAL,
  },
  link:{
    color:COLORS.BLUE
  }
  // button: {
  //   borderRadius: BORDER_RADIUS.BUTTON,
  //   backgroundColor: COLORS.ORANGE,
  //   paddingVertical: PADDING.VERTICAL,
  //   paddingHorizontal: PADDING.HORIZONTAL,
  // },
  // removeAvatar: {},
  // backButton: {
  //   backgroundColor: "transparent",
  // },
  // link: {},
  // primary: {},
  // goBack: {},
  // submit: {},
  // alternativeActionText: {},
});

export default styles;
