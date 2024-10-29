import ADD_AVATAR_BUTTON from "../assets/icons/add.svg";
import REMOVE_AVATAR_BUTTON from "../assets/icons/remove.svg";
import ARROW_LEFT_NAV_BUTTON from "../assets/icons/arrow-left.svg";
import LOG_OUT_NAV_BUTTON from "../assets/icons/log-out.svg";
import ADD_PHOTO_BUTTON from "../assets/icons/camera.svg";
import HOME_NAV_BUTTON from "../assets/icons/grid.svg";
import MAP_PIN from "../assets/icons/map-pin.svg";
import MESSAGE_CIRCLE from "../assets/icons/message-circle.svg";
import LIKE_BUTTON from "../assets/icons/thumbs-up.svg";
import CLEANING_BUTTON from "../assets/icons/trash-2.svg";
import CREATE_PUBLICATION_BUTTON from "../assets/icons/union.svg";
import USER_PROFILE_BUTTON from "../assets/icons/user.svg";

type Icons = (typeof ICONS)[keyof typeof ICONS];

const ICONS = {
  ADD_AVATAR_BUTTON,
  REMOVE_AVATAR_BUTTON,
  ARROW_LEFT_NAV_BUTTON,
  LOG_OUT_NAV_BUTTON,
  ADD_PHOTO_BUTTON,
  HOME_NAV_BUTTON,
  MAP_PIN,
  MESSAGE_CIRCLE,
  LIKE_BUTTON,
  CLEANING_BUTTON,
  CREATE_PUBLICATION_BUTTON,
  USER_PROFILE_BUTTON,
};

export default ICONS;
