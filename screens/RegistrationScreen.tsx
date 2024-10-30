import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Avatar, Container, CustomImage, Form } from "../components";
import { BUTTON, IMAGES, MESSAGE, TITLE } from "../constants";
import CustomText from "../components/Title/CustomText";
import {
  emailInputProps,
  nameInputProps,
  passwordInputProps,
} from "../components/Input/InputProps";
import { validateEmail, validateName, validatePassword } from "../utils";

type RegistrationScreen = {
  navigator: {
    navigate: (screen: string) => void;
  };
};

const RegistrationScreen: React.FC<RegistrationScreen> = ({ navigator }) => {
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
          <Avatar onPress={() => navigator.navigate("Profile")} />
          <CustomText typeCustomText="title">
            {TITLE.MAIN_TITLE_REGISTRATION}
          </CustomText>
          <Form
            fields={[nameInputProps, emailInputProps, passwordInputProps]}
            submitText={BUTTON.REGISTRATION}
            alternativeText={MESSAGE.ACCOUNT_EXISTS}
            alternativeActionText={BUTTON.LOGIN}
            handleSubmit={() => {
              validateName(nameInputProps.value);
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

export default RegistrationScreen;
