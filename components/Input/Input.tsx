import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { FC, useState } from "react";
import { InputProps } from "./InputType";
import styles from "./InputStyles";

const Input: FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  outerStyles,
  rightButton,
  inputMode,
  autofocus = false,
  secureTextEntry = false,
  maxLength,
  textContentType,
  keyboardType,
  validationFunction,
  errorMessage,
  required = false,
  showCharacterCount = false,
  autoCorrect = true,
  icon,
  showTogglePassword = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);                 // Стан фокусу на полі вводу
  const [showPassword, setShowPassword] = useState(secureTextEntry); // Стан для показу/приховування пароля
  const [error, setError] = useState<string | null>(null);           // Повідомлення про помилку після валідації

  const onFocus = () => setIsFocused(true);                         // Зміна стану на "в фокусі" при натисканні на поле
  const onBlur = () => {                                            // Обробник для втрати фокусу
    setIsFocused(false);
    if (validationFunction) {                                       // Перевірка валідації, якщо функція задана
      const validationError = validationFunction(value);
      setError(validationError);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword); // Перемикає показ/приховування пароля

  return (
    <View style={[styles.inputContainer, outerStyles]}>
      {icon && <View style={styles.icon}>{icon}</View>}    // Відображає іконку, якщо передано проп icon
      <TextInput
        value={value}                                      // Поточне значення тексту
        autoFocus={autofocus}                              // Фокус на полі при завантаженні компонента
        onChangeText={text => {                            // Обробка зміни тексту
          onChangeText(text);
          if (validationFunction) {                        // Перевірка валідації під час зміни
            setError(validationFunction(text));
          }
        }}
        placeholder={placeholder}                          // Текст підказки
        secureTextEntry={showPassword}                     // Показ/приховування тексту для паролів
        style={[styles.text, isFocused && styles.focused]} // Застосовує стилі для тексту, змінюючи при фокусі
        autoCapitalize="none"                              // Вимикає автокапіталізацію для тексту
        onFocus={onFocus}                                  // Функція, що викликається при фокусі
        onBlur={onBlur}                                    // Функція, що викликається при втраті фокусу
        maxLength={maxLength}                              // Максимальна довжина введення
        inputMode={inputMode}                              // Тип введення
        textContentType={textContentType}                  // Тип вмісту для автозаповнення
        keyboardType={keyboardType}                        // Тип клавіатури
        autoCorrect={autoCorrect}                          // Вмикає/вимикає автокорекцію
      />
      {showTogglePassword && (                             // Відображає кнопку для показу/приховування пароля
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text>{showPassword ? "Показати" : "Приховати"}</Text>
        </TouchableOpacity>
      )}
      {rightButton}                                       // Додатковий компонент, що відображається праворуч від інпуту
      {showCharacterCount && maxLength && (               // Лічильник символів, якщо showCharacterCount = true
        <Text style={styles.charCounter}>
          {value.length}/{maxLength}
        </Text>
      )}
      {error && (
        <Text style={styles.errorText}>
          {errorMessage ? errorMessage : error}
        </Text>
      )} 
      {required && !value && (
        <Text style={styles.required}>* Обов'язкове поле</Text>
      )} // Позначка обов’язкового поля, якщо пусте
    </View>
  );
};

export default Input;
