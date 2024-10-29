import styles from "./CustomImageStyles";

export type ImgProps = {
  typeImage?: keyof typeof styles;
  source: string;
};
