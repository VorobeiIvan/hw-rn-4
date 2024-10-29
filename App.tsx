import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import useRobotoFonts from "./hooks/useFonts";
import { ICONS } from "./constants";
import { Button } from "./components";

export default function App() {
  const fontsLoaded = useRobotoFonts();

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  type T = (typeof ICONS)[keyof typeof ICONS];
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <ICONS.ADD_AVATAR_BUTTON />

      <ICONS.REMOVE_AVATAR_BUTTON />
      <Button typeButton={"button"} onPress={() => {}}>
        Вхід
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
