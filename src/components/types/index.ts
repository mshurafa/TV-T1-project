import type { HTMLProps, FC, ReactNode } from "react";
import type { ImageProps } from "next/image";
import type { DivElementType } from "types";

//@TODO: Create custom type for the duplicated properties like: helperText etc...

export interface CardProps extends DivElementType {}
export type CardType = FC<CardProps>;

export interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  helperText?: ReactNode;
  inputClassName?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  inputSize?: "small" | "medium" | "large";
  error?: boolean;
  withoutHelperText?: boolean;
}
export type InputType = FC<InputProps>;

export interface LogoProps extends Omit<ImageProps, "src" | "alt"> {
  src?: string;
  alt?: string;
}
export type LogoType = FC<LogoProps>;

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  buttonSize?: "small" | "medium" | "large";
}
export type ButtonType = FC<ButtonProps>;

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  label?: string;
  helperText?: ReactNode;
  selectClassName?: string;
  selectSize?: "small" | "medium" | "large";
  options: { value: string; label: string }[];
  error?: boolean;
  withoutHelperText?: boolean;
}
export type SelectType = FC<SelectProps>;

export interface HelperTextProps extends HTMLProps<HTMLParagraphElement> {
  text?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  showContent?: boolean;
}

export type HelperTextType = FC<HelperTextProps>;

export interface IconButtonProps extends ButtonProps {}

export type IconButtonType = FC<IconButtonProps>;
