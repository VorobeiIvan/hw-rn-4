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

// Стилі для текстових елементів та контейнера інпуту
export type InputStyles = {
  inputContainer: ViewStyle;
  text: TextStyle;
  focused: TextStyle;
  charCounter: TextStyle;
  errorText: TextStyle;
  required: TextStyle;
  icon: ViewStyle;
};


export interface Field {
  id?: string; // Унікальний ідентифікатор
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  outerStyles?: object;
  rightButton?: React.ReactNode;
  inputMode?: "text" | "numeric" | "email" | "decimal" | "search";
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  maxLength?: number;
  textContentType?: string;
  keyboardType?: string;
  validationFunction?: (value: string) => boolean;
  errorMessage?: string;
  required?: boolean;
  showCharacterCount?: boolean;
  autoComplete?: string;
  autoCorrect?: boolean;
  icon?: React.ReactNode;
  showTogglePassword?: boolean;
}