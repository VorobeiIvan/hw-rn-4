import styles from "./ContainerStyles";

export type ContainerProps = {
  children: React.ReactNode;
  stylesContainer?: object;
  type?: keyof typeof styles;
};
