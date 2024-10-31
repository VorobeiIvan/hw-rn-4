import { StyleSheet } from "react-native";
import { COLORS, IMAGES } from "../constants";
import { Container, CustomImage } from "../components";
import CustomText from "../components/Title/CustomText";

const PostsScreen = () => {
  return (
    <Container typeContainer="container">
      <CustomImage typeImage="avatar" source={IMAGES.AVATAR} />
      <Container typeContainer="textContainer">
        <CustomText typeCustomText="title">Natali Romanova</CustomText>
        <CustomText typeCustomText="lightText">email@example.com</CustomText>
      </Container>
    </Container>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: COLORS.WHITE,
    gap: 8,
    paddingTop: 32,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER_GRAY,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.BLACK_PRIMARY,
  },
  text: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
  },
});
