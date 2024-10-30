import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Container, CustomImage, Form } from "../components";
import { BUTTON, IMAGES, MESSAGE, TITLE } from "../constants";
import CustomText from "../components/Title/CustomText";
import {
  emailInputProps,
  passwordInputProps,
} from "../components/Input/InputProps";
import { validateEmail, validatePassword } from "../utils";

type LoginScreenProps = {
  navigator: {
    navigate: (screen: string) => void;
  };
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigator }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <CustomImage
          typeImage="backgroundImage"
          source={IMAGES.MAIN_BACKGROUND}
        />
        <Container typeContainer="container">
          <CustomText typeCustomText="title">
            {TITLE.MAIN_TITLE_AUTHORIZATION}
          </CustomText>
          <Form
            fields={[emailInputProps, passwordInputProps]}
            submitText={BUTTON.AUTHORIZATION}
            alternativeText={MESSAGE.ACCOUNT_NOT_EXISTS}
            alternativeActionText={BUTTON.REGISTRATION}
            handleSubmit={() => {
              validateEmail(emailInputProps.value);
              validatePassword(passwordInputProps.value);
              navigator.navigate("Home");
            }}
            handleAlternativeAction={() => {
              navigator.navigate("Registration");
            }}
          />
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
