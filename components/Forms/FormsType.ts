// FormsType.ts
import { Field } from "../Input/InputType";

export interface FormProps {
  fields: Field[]; // Залишив тип масиву для полів
  submitText: string;
  alternativeText: string;
  alternativeActionText: string;
  handleSubmit: () => void;
  handleAlternativeAction: () => void;
}
