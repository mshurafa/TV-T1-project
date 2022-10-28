import type { HTMLProps, FC } from "react";
import { ImageProps } from "next/image";

interface CardProps extends HTMLProps<HTMLDivElement> {}
export type CardType = FC<CardProps>;

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  helperText?: string;
  inputClassName?: string;
  startIcon?: React.ReactElement;
}
export type InputType = FC<InputProps>;

interface LogoProps extends Omit<ImageProps, "src" | "alt"> {
  src?: string;
  alt?: string;
}
export type LogoType = FC<LogoProps>;
