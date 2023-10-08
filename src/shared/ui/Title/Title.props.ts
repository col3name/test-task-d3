import React from "react";
import Colors from "../../styles/colors";

export enum TitleSize {
  XLarge,
  Large,
  Medium,
}

export enum TitleAlign {
  Left,
  Center,
  Right
}

type TitleProps = {
  children: React.ReactNode,
  className?: string,
  size?: TitleSize;
  align?: TitleAlign,
  color?: typeof Colors[keyof typeof Colors],
};

export default TitleProps;