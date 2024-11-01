import styles from "./ContainerStyles";

export type ContainerProps = {
  children: React.ReactNode;
  stylesContainer?: object;
  typeContainer?: keyof typeof styles;
};
