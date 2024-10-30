import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, FONTS, LINE_HEIGHTS, PADDING, MARGIN } from "../../constants";

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: MARGIN.SMALL_ICON_TEXT,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.INPUT,
    color: COLORS.BLACK_PRIMARY,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderColor: COLORS.BORDER_GRAY,
    fontFamily: FONTS.FAMILY.ROBOTO,
    fontSize: FONTS.SIZES.TEXT,
    padding: PADDING.AROUND,
    paddingRight: 40, // Додатковий відступ для кнопки або іконки
  },
  focused: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.ORANGE,
  },
  text: {
    fontSize: FONTS.SIZES.TEXT,
    lineHeight: LINE_HEIGHTS.TEXT,
    color: COLORS.BLACK_PRIMARY,
  },
  icon: {
    position: "absolute",
    left: PADDING.HORIZONTAL,
    top: "50%",
    transform: [{ translateY: -12 }], // Вирівнювання по центру
    zIndex: 1,
  },
  charCounter: {
    alignSelf: "flex-end",
    fontSize: FONTS.SIZES.TEXT,
    color: COLORS.GRAY,
    marginTop: MARGIN.BLOCK_SPACING,
  },
  errorText: {
    color: COLORS.ERROR,
    fontSize: FONTS.SIZES.TEXT,
    marginTop: MARGIN.BLOCK_SPACING,
    fontFamily: FONTS.FAMILY.ROBOTO,
  },
  required: {
    color: COLORS.ERROR,
    fontSize: FONTS.SIZES.TEXT,
    fontFamily: FONTS.FAMILY.ROBOTO,
    marginTop: MARGIN.BLOCK_SPACING,
  },
  togglePassword: {
    position: "absolute",
    right: PADDING.HORIZONTAL,
    top: "50%",
    transform: [{ translateY: -12 }],
    zIndex: 1,
    fontSize: FONTS.SIZES.TEXT,
    color: COLORS.BLUE,
  },
});

export default styles;
