import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Avatar, Container, CustomImage, Form } from "../components";
import { BUTTON, IMAGES, MESSAGE, TITLE } from "../constants";
import CustomText from "../components/CustomText/CustomText";
import { validateEmail, validateName, validatePassword } from "../utils";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../navigation/navigationType";
import { useInputProps } from "../hooks/useInputProps";

type RegistrationScreenProps = StackScreenProps<StackParamList, "Registration">;

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({
  navigation,
}) => {
  const { emailInputProps, nameInputProps, passwordInputProps } =
    useInputProps();

  const handleSubmit = () => {
    const isNameValid = validateName(nameInputProps.value);
    const isEmailValid = validateEmail(emailInputProps.value);
    const isPasswordValid = validatePassword(passwordInputProps.value);

    if (isNameValid && isEmailValid && isPasswordValid) {
      navigation.navigate("Home");
    } else {
      alert(MESSAGE.INVALID_CREDENTIALS);
    }
  };

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
          <Avatar onPress={() => navigation.navigate("Profile")} />
          <CustomText typeCustomText="title">
            {TITLE.MAIN_TITLE_REGISTRATION}
          </CustomText>
          <Form
            fields={[nameInputProps, emailInputProps, passwordInputProps]}
            submitText={BUTTON.REGISTRATION}
            alternativeText={MESSAGE.ACCOUNT_EXISTS}
            alternativeActionText={BUTTON.LOGIN}
            handleSubmit={handleSubmit}
            handleAlternativeAction={() => {
              navigation.navigate("Login");
            }}
          />
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
