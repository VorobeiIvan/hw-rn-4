import { FC, useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import Container from "../Containers/Container";
import CustomImage from "../CustomImage/CustomImage";
import Button from "../Buttons/Button";
import { ICONS, IMAGES } from "../../constants";
import { AvatarProps } from "./AvatarTypes";

const Avatar: FC<AvatarProps> = ({ avatarImage: initialAvatarImage }) => {
  const [avatarImage, setAvatarImage] = useState(
    initialAvatarImage || IMAGES.DEFAULT_AVATAR
  );

  const handleAvatarChange = () => {
    if (avatarImage !== IMAGES.DEFAULT_AVATAR) {
      setAvatarImage(IMAGES.DEFAULT_AVATAR);
    } else {
      launchImageLibrary({ mediaType: "photo", quality: 0.8 }, (response) => {
        if (response.assets && response.assets.length > 0) {
          setAvatarImage(response.assets[0].uri);
        }
      });
    }
  };

  return (
    <Container typeContainer="avatarContainer">
      <CustomImage source={avatarImage} />
      <Button onPress={handleAvatarChange} typeButton="removeAvatar">
        {avatarImage === IMAGES.DEFAULT_AVATAR ? (
          <ICONS.ADD_AVATAR_BUTTON />
        ) : (
          <ICONS.REMOVE_AVATAR_BUTTON />
        )}
      </Button>
    </Container>
  );
};

export default Avatar;
