import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, PADDING } from "../../constants";

const styles = StyleSheet.create({
  button: {
    borderRadius: BORDER_RADIUS.BUTTON,
    backgroundColor: COLORS.ORANGE,
    paddingVertical: PADDING.VERTICAL,
    paddingHorizontal: PADDING.HORIZONTAL,
  },
  removeAvatar: {},
  backButton: {
    backgroundColor: "transparent",
  },
});

export default styles;
