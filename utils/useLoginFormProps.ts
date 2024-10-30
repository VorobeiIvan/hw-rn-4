import { useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { validateEmail, validatePassword } from "./validation";
import { BUTTON, MESSAGE, PLACEHOLDER } from "../constants";
import { emailMessages, passwordMessages } from "./messages";

// Типізація параметрів навігації
type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
};

export const useLoginFormProps = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [values, setValues] = useState({ email: "", password: "" });

  const onChangeText = (field: "email" | "password") => (value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return {
    fields: {
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
    submitText: BUTTON.LOGIN,
    alternativeText: MESSAGE.ACCOUNT_NOT_EXISTS,
    alternativeActionText: BUTTON.REGISTRATION,
    handleSubmit: () => {
      navigation.navigate("Home"); // Екран після входу
    },
    handleAlternativeAction: () => {
      navigation.navigate("Registration");
    },
  };
};
