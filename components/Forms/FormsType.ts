// FormsType.ts
import { InputProps } from "../Input/InputType";

export interface FormProps {
  fields: InputProps[];
  submitText: string;
  alternativeText: string;
  alternativeActionText: string;
  handleSubmit: () => void;
  handleAlternativeAction: () => void;
}