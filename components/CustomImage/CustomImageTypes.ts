import styles from "./CustomImageStyles";

export type ImgProps = {
  typeImage?: keyof typeof styles;
  source: any; // дозволяємо об'єкт require()
};

