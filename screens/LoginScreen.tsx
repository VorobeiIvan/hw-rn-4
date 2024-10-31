import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Container, CustomImage, Form } from "../components";
import { BUTTON, IMAGES, MESSAGE, TITLE } from "../constants";
import CustomText from "../components/Title/CustomText";
import { validateEmail, validatePassword } from "../utils";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../navigation/navigationType";
import { useInputProps } from "../hooks/useInputProps";

type LoginScreenProps = StackScreenProps<StackParamList, "Login">;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { emailInputProps, passwordInputProps } = useInputProps();

  const handleSubmit = () => {
    const isEmailValid = validateEmail(emailInputProps.value);
    const isPasswordValid = validatePassword(passwordInputProps.value);

    if (isEmailValid && isPasswordValid) {
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
          <CustomText typeCustomText="title">
            {TITLE.MAIN_TITLE_AUTHORIZATION}
          </CustomText>
          <Form
            fields={[emailInputProps, passwordInputProps]}
            submitText={BUTTON.AUTHORIZATION}
            alternativeText={MESSAGE.ACCOUNT_NOT_EXISTS}
            alternativeActionText={BUTTON.REGISTRATION}
            handleSubmit={handleSubmit} 
            handleAlternativeAction={() => {
              navigation.navigate("Registration");
            }}
          />
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
