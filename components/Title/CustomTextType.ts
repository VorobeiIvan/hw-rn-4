import { TextStyle } from "react-native";
import styles from "./CustomTextStyles";

export type CustomTextProps = {
  typeCustomText?: keyof typeof styles; // Правильний тип для ключа стилів
  children: React.ReactNode; // Вміст тексту
  style?: TextStyle; // Додаткові стилі для кастомізації
};
