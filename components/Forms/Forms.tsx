import React from "react";
import CustomText from "../Title/CustomText";
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
    <Container typeContainer={"container"}>
      {fields.map((field, index: number) => (
        <Input {...field} key={field.id || index} />
      ))}

      <Button onPress={handleSubmit} typeButton="primary">
        {submitText}
      </Button>

      <CustomText typeCustomText="alternativeText">
        {alternativeText}
        <Button onPress={handleAlternativeAction} typeButton="link">
          {alternativeActionText}
        </Button>
      </CustomText>
    </Container>
  );
};

export default Form;
