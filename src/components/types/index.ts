import type { HTMLProps, FC, ReactNode } from "react";
import type { ImageProps } from "next/image";
import type { DivElementType } from "types";

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

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  selectClassName?: string;
  selectSize?: "small" | "medium" | "large";
  options: { value: string; label: string }[];
}
export type SelectType = FC<SelectProps>;

export interface HelperTextProps extends HTMLProps<HTMLParagraphElement> {
  text?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export type HelperTextType = FC<HelperTextProps>;
