import { StyleSheet, TextStyle } from "react-native";
import {
  MARGIN,
  FONTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS,
  COLORS,
} from "../../constants";

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  primaryButton: {
    color: COLORS.WHITE,
    textAlign: "center",
  },
  link: {
    color: COLORS.BLUE,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    
  }
  // title: {
  //   marginTop: MARGIN.BLOCK_SPACING,
  //   marginBottom: MARGIN.BLOCK_SPACING,

  //   textAlign: "center",

  //   fontFamily: FONTS.FAMILY.ROBOTO,
  //   fontSize: FONTS.SIZES.TITLE,
  //   lineHeight: LINE_HEIGHTS.TITLE,
  //   letterSpacing: LETTER_SPACINGS.TITLE,
  //   fontWeight: FONTS.WEIGHTS.BOLD,
  //   color: COLORS.BLACK_PRIMARY,

  // } as TextStyle,

  // subtitle: {},
  // lightText: {},
  // button: {},
  // alternativeText:{},
});

export default styles;
