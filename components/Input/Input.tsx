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
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [error, setError] = useState<string | null>(null);

  const onFocus = () => setIsFocused(true);

  const onBlur = () => {
    setIsFocused(false);
    if (validationFunction) {
      const validationError = validationFunction(value);
      setError(validationError);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChangeText = (text: string) => {
    onChangeText(text);
    if (validationFunction) {
      setError(validationFunction(text));
    }
  };

  return (
    <View style={[styles.inputContainer, outerStyles]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        value={value}
        autoFocus={autofocus}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        secureTextEntry={showPassword}
        style={[styles.text, isFocused && styles.focused]}
        autoCapitalize="none"
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
        inputMode={inputMode}
        textContentType={textContentType}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
      />
      {showTogglePassword && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text>{showPassword ? "Показати" : "Приховати"}</Text>
        </TouchableOpacity>
      )}
      {rightButton}
      {showCharacterCount && maxLength && (
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
      )}
    </View>
  );
};

export default Input;
