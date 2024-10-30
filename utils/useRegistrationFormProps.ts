import { useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { validateEmail, validateName, validatePassword } from "./validation";
import { BUTTON, MESSAGE, PLACEHOLDER } from "../constants";
import { emailMessages, nameMessages, passwordMessages } from "./messages";

// Вказуємо типи маршрутів у вашому стеку навігації
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

export const useRegistrationFormProps = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [values, setValues] = useState({ name: "", email: "", password: "" });

  const onChangeText = (field: "name" | "email" | "password") => (value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return {
    fields: {
      name: {
        value: values.name,
        onChangeText: onChangeText("name"),
        placeholder: PLACEHOLDER.NAME_PUBLICATION,
        inputMode: "text",
        autofocus: true,
        maxLength: 20,
        textContentType: "name",
        keyboardType: "default",
        validationFunction: () => validateName(values.name),
        errorMessage: nameMessages,
        required: true,
        autoComplete: "name",
        autoCorrect: false,
        icon: "user",
      },
      email: {
        value: values.email,
        onChangeText: onChangeText("email"),
        placeholder: PLACEHOLDER.EMAIL,
        inputMode: "email",
        autofocus: true,
        maxLength: 50,
        textContentType: "emailAddress",
        keyboardType: "email-address",
        validationFunction: () => validateEmail(values.email),
        errorMessage: emailMessages,
        required: true,
        autoComplete: "email",
        autoCorrect: false,
      },
      password: {
        value: values.password,
        onChangeText: onChangeText("password"),
        placeholder: PLACEHOLDER.PASSWORD,
        inputMode: "text",
        secureTextEntry: true,
        maxLength: 20,
        textContentType: "password",
        keyboardType: "default",
        validationFunction: () => validatePassword(values.password),
        errorMessage: passwordMessages,
        required: true,
        showCharacterCount: true,
        autoComplete: "password",
        autoCorrect: false,
        showTogglePassword: true,
      },
    },
    submitText: BUTTON.REGISTRATION,
    alternativeText: MESSAGE.ACCOUNT_EXISTS,
    alternativeActionText: BUTTON.LOGIN,
    handleSubmit: () => {
      navigation.navigate("Home");
    },
    handleAlternativeAction: () => {
      navigation.navigate("Login");
    },
  };
};
