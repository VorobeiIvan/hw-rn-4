import { useState } from "react";
import { PLACEHOLDER } from "../constants";
import {
  emailMessages,
  validateEmail,
  nameMessages,
  validateName,
  passwordMessages,
  validatePassword,
} from "../utils";
import { InputProps } from "../components/Input/InputType";

export const useInputProps = () => {
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const emailInputProps: InputProps = {
    id: "email",
    value: emailValue,
    onChangeText: setEmailValue,
    placeholder: PLACEHOLDER.EMAIL,
    autofocus: true,
    inputMode: "email",
    maxLength: 50,
    textContentType: "emailAddress",
    keyboardType: "email-address",
    validationFunction: validateEmail,
    errorMessage: emailMessages.invalidFormat,
    required: true,
    autoCorrect: true,
  };

  const nameInputProps: InputProps = {
    id: "name",
    value: nameValue,
    onChangeText: setNameValue,
    placeholder: PLACEHOLDER.NAME_PUBLICATION,
    maxLength: 30,
    textContentType: "name",
    validationFunction: validateName,
    errorMessage: nameMessages.invalidFormat,
    required: true,
    autoCorrect: true,
  };

  const passwordInputProps: InputProps = {
    id: "password",
    value: passwordValue,
    onChangeText: setPasswordValue,
    placeholder: PLACEHOLDER.PASSWORD,
    maxLength: 50,
    secureTextEntry: true,
    textContentType: "password",
    validationFunction: validatePassword,
    errorMessage: passwordMessages.digit,
    required: true,
    showTogglePassword: true,
    autoCorrect: false,
  };

  return { emailInputProps, nameInputProps, passwordInputProps };
};
