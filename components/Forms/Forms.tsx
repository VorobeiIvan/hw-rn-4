import React from "react";
import CustomText from "../CustomText/CustomText";
import Container from "../Containers/Container";
import { FormProps } from "./FormsType";
import Button from "../Buttons/Button";
import Input from "../Input/Input";

const Form: React.FC<FormProps> = ({
  fields,
  submitText,
  alternativeText,
  alternativeActionText,
  handleSubmit,
  handleAlternativeAction,
}) => {
  return (
    <Container typeContainer={"inputContainer"}>
      {fields.map((field, index: number) => (
        <Input {...field} key={field.id || index} />
      ))}
      <Container typeContainer={"inputContainer"}>
        <Button onPress={handleSubmit} typeButton="primaryButton">
          {submitText}
        </Button>

        <Container typeContainer={"signUpContainer"}>
          <CustomText typeCustomText="baseText">{alternativeText}</CustomText>
          <Button onPress={handleAlternativeAction} typeButton="link">
            {alternativeActionText}
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Form;
