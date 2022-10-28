import type { HTMLProps, FC } from "react";
import type { ImageProps } from "next/image";
import type { DivElementType } from "types";

export interface CardProps extends DivElementType {}
export type CardType = FC<CardProps>;

export interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  helperText?: string;
  inputClassName?: string;
  startIcon?: React.ReactElement;
  inputSize?: "small" | "medium" | "large";
}
export type InputType = FC<InputProps>;

export interface LogoProps extends Omit<ImageProps, "src" | "alt"> {
  src?: string;
  alt?: string;
}
export type LogoType = FC<LogoProps>;

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}
export type ButtonType = FC<ButtonProps>;
