import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Container, CustomImage, Form } from "../components";
import { IMAGES, TITLE } from "../constants";
import CustomText from "../components/CustomText/CustomText";
import { useLoginFormProps } from "../utils/useLoginFormProps"; // Імпортуємо хук

const LoginScreen = () => {
  const loginFormProps = useLoginFormProps(); // Викликаємо хук
  const fieldsArray = Object.values(loginFormProps.fields); // Перетворюємо об'єкт у масив

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
          <Form fields={fieldsArray} /> 
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
