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
    // Якщо аватар вже обраний, повертаємо його до стандартного
    if (avatarImage !== IMAGES.DEFAULT_AVATAR) {
      setAvatarImage(IMAGES.DEFAULT_AVATAR);
    } else {
      // В іншому випадку відкриваємо галерею для вибору нового фото
      launchImageLibrary({ mediaType: "photo", quality: 0.8 }, (response) => {
        if (response.assets && response.assets.length > 0) {
          setAvatarImage(response.assets[0].uri); // Оновлюємо стан обраним фото
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
