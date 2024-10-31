import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
    </View>
  );
};

// Додайте стилі для компонента
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9", // Світлий фон
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Темний колір тексту
  },
});

export default CreatePostsScreen;
