import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import useRobotoFonts from "./hooks/useFonts";
import StackNavigator from "./navigation/StackNavigator";
import { ActivityIndicator } from "react-native";

export default () => {
  const fontsLoaded = useRobotoFonts();

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
