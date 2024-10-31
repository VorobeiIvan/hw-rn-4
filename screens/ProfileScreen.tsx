import React from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS, IMAGES } from "../constants";
import { Avatar, Container, CustomImage } from "../components";
import CustomText from "../components/CustomText/CustomText";
import PostsScreen from "./PostsScreen";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <CustomImage
          typeImage="backgroundImage"
          source={IMAGES.MAIN_BACKGROUND}
        />
        <Container typeContainer="container">
          <Avatar onPress={() => navigation.navigate("Profile")} />
          <CustomText typeCustomText="title">Natali Romanova</CustomText>
          <PostsScreen />
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  buttonContainer: {
    marginTop: 42,
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  formContainer: {
    height: "90%",
    width: SCREEN_WIDTH,
    backgroundColor: COLORS.WHITE,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 36,
    letterSpacing: 0.3,
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  loginButtonText: {
    color: COLORS.WHITE,
    textAlign: "center",
  },
  passwordButtonText: {
    color: COLORS.BLUE,
  },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    textDecorationLine: "underline",
    marginBottom: 46,
  },
  avatar: {
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  avatarContainer: {
    position: "relative",
    alignSelf: "center",
    marginTop: -92,
    marginBottom: 32,
  },
  addAvatarButton: {
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 1,
    position: "absolute",
    bottom: 12,
    right: -12,
  },
  removeAvatarButton: {
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 1,
    position: "absolute",
    bottom: 12,
    right: -12,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  addAvatarButtonText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
