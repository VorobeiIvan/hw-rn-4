import { Dimensions, StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, MARGIN, PADDING } from "../../constants";
import Container from "./Container";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const styles = StyleSheet.create({
  // Основний контейнер, що займає всю доступну область
  keyboardAvoidingView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  formContainer: {
    width: SCREEN_WIDTH,
    height: "65%",
    backgroundColor: COLORS.WHITE,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
  },

  inputContainer: {
    gap: 16,
    marginTop: 32,
  },

  buttonContainer: {
    gap: 16,
    marginTop: 42,
    marginBottom: 44,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: "100%",
  },

  // // Контейнер контенту з закругленими верхніми кутами
  // registrationContentContainer: {
  //   borderTopLeftRadius: BORDER_RADIUS.CONTAINER,
  //   borderTopRightRadius: BORDER_RADIUS.CONTAINER,
  //   backgroundColor: COLORS.WHITE,
  //   width: "100%",
  //   height: "67.6%",
  // },

  // authorizationContentContainer: {
  //   borderTopLeftRadius: BORDER_RADIUS.CONTAINER,
  //   borderTopRightRadius: BORDER_RADIUS.CONTAINER,
  //   backgroundColor: COLORS.WHITE,
  //   width: "100%",
  //   height: "60.2%",

  //   paddingHorizontal: 16,
  //   paddingTop: 32,
  // },

  // Контейнер для аватара
  avatarContainer: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: MARGIN.AVATAR_CONTENT_SPACING,
    borderRadius: BORDER_RADIUS.AVATAR,
    backgroundColor: COLORS.LIGHT_GRAY,
  },

  // // Контейнер для полів введення
  // inputsContainer: {
  //   width: "100%",
  //   height: 50,
  //   gap: MARGIN.ELEMENT_SPACING,
  //   marginHorizontal: MARGIN.BLOCK_SPACING,
  //   paddingVertical: PADDING.VERTICAL,
  // },

  // // Контейнер для кнопок
  // buttonsContainer: {
  //   gap: MARGIN.ELEMENT_SPACING, // Відстань між кнопками
  //   marginVertical: MARGIN.BUTTON_GROUP_SPACING, // Вертикальні відступи
  // },

  // // Контейнер для User
  // userContainer: {},

  // // Контейнер для навігації
  // topNavigationContainer: {
  //   width: "100%",
  // },
  // bottomNavigationContainer: {
  //   width: "100%",
  // },

  // // Контейнер для публікацій
  // publicationContentContainer: {},

  // // Контейнер для повідомлень
  // messageContentContainer: {},

  // messageContainer: {},
  // textContainer: {},
});

export default styles;
