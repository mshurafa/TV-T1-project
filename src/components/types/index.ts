import type { HTMLProps, FC, ReactNode, RefAttributes } from "react";
import type { ImageProps } from "next/image";
import type { LinkProps as NextLinkProps } from "next/link";
import type { PhoneInputProps as ReactPhoneInputProps } from "react-phone-input-2";
import type { DivElementType, ChildrenProp } from "types";

//@TODO: Create custom type for the duplicated properties like: helperText etc...

type CommonFormElementsType = {
  label?: string;
  helperText?: ReactNode;
  error?: boolean;
  withoutHelperText?: boolean;
};

export type SizeVariantsType = "small" | "medium" | "large";

type IconsVariantsType = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export interface CardProps extends DivElementType {}
export type CardType = FC<CardProps>;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    CommonFormElementsType,
    IconsVariantsType {
  inputClassName?: string;
  inputSize?: SizeVariantsType;
}

export interface LogoProps extends Omit<ImageProps, "src" | "alt"> {
  src?: string;
  alt?: string;
}
export type LogoType = FC<LogoProps>;

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  buttonSize?: SizeVariantsType;
}
export type ButtonType = FC<ButtonProps>;

export interface SelectProps
  extends HTMLProps<HTMLSelectElement>,
    CommonFormElementsType {
  selectClassName?: string;
  selectSize?: SizeVariantsType;
  options: { value: string; label: string }[];
}

export interface HelperTextProps
  extends HTMLProps<HTMLParagraphElement>,
    IconsVariantsType {
  text?: string;
  showContent?: boolean;
}

export type HelperTextType = FC<HelperTextProps>;

export interface IconButtonProps extends ButtonProps {}

export type IconButtonType = FC<IconButtonProps>;

export interface NoSsrProps extends ChildrenProp {}

export type NoSsrType = FC<NoSsrProps>;

export interface PhoneInputProps
  extends ReactPhoneInputProps,
    CommonFormElementsType {
  inputClassName?: string;
  inputSize?: SizeVariantsType;
  className?: string;
  id?: string;
}

export type PhoneInputType = FC<PhoneInputProps>;

export interface LinkProps
  extends NextLinkProps,
    RefAttributes<HTMLAnchorElement>,
    ChildrenProp {
  className?: string;
}

export type LinkType = FC<LinkProps>;

export interface SpinnerProps {
  size?: SizeVariantsType;
  className?: string;
  svgClassName?: string;
}

export type SpinnerType = FC<SpinnerProps>;
