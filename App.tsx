import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import useRobotoFonts from "./hooks/useFonts";

export default function App() {
  const fontsLoaded = useRobotoFonts();

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
