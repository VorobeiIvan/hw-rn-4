import React from "react";
import { StyleSheet } from "react-native";
import PostsScreen from "./PostsScreen";
import { Container } from "../components";

const HomeScreen = () => {
  return (
    <Container typeContainer="container">
      <PostsScreen />
      {/* Додаткові елементи можна розмістити тут */}
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end", // Вирівнює вміст до нижньої частини
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
