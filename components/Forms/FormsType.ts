import { InputProps } from "../Input/InputType";

// Інтерфейс для пропсів форми
export interface FormProps {
  fields: InputProps; // Масив полів
  submitText: string; // Текст кнопки "Відправити"
  alternativeText: string; // Альтернативний текст
  alternativeActionText: string; // Текст альтернативної дії
  handleSubmit: () => void; // Функція обробки відправлення
  handleAlternativeAction: () => void; // Функція для альтернативної дії
}

