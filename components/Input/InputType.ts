// InputType.ts

import { TextInputProps, ViewStyle, TextStyle } from "react-native";
import React from "react";

// Основні пропси для компонента Input
export type InputProps = {
  value: string;                                    
  onChangeText: (text: string) => void;           
  placeholder?: string;                             
  outerStyles?: ViewStyle;                         
  rightButton?: React.ReactNode;                    
  secureTextEntry?: boolean;                        
  autofocus?: boolean;                             
  inputMode?: TextInputProps["inputMode"];          
  maxLength?: number;                               
  textContentType?: TextInputProps["textContentType"]; 
  keyboardType?: TextInputProps["keyboardType"];    
  validationFunction?: (value: string) => string | null;
  errorMessage?: string;                            
  required?: boolean;                               
  showCharacterCount?: boolean;                     
  autoComplete?: TextInputProps["autoComplete"]; 
  autoCorrect?: boolean;                            
  icon?: React.ReactNode;                           
  showTogglePassword?: boolean;                     
};

// Інтерфейс поля вводу, виправлений тип для inputMode
export interface Field {
  id?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  outerStyles?: ViewStyle; // Змінено тип на ViewStyle
  rightButton?: React.ReactNode;
  inputMode?: TextInputProps["inputMode"]; // Змінено тип на TextInputProps["inputMode"]
  autofocus?: boolean;
  secureTextEntry?: boolean;
  maxLength?: number;
  textContentType?: TextInputProps["textContentType"];
  keyboardType?: TextInputProps["keyboardType"];
  validationFunction?: (value: string) => string | null;
  errorMessage?: string;
  required?: boolean;
  showCharacterCount?: boolean;
  autoComplete?: TextInputProps["autoComplete"];
  autoCorrect?: boolean;
  icon?: React.ReactNode;
  showTogglePassword?: boolean;
}
