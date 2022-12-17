import { VALIDATION_RULES } from "data";

export const formValidation = {
  fullName: {
    required: "First and last Name are required",
  },
  email: {
    required: "Email address is required",
    pattern: {
      value: VALIDATION_RULES.isEmail,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    pattern: {
      value: VALIDATION_RULES.password,
      message: "uppercase, lowercase, number and special",
    },
  },
  mobile: {
    required: "Phone number is required",
  },
  country: {
    required: "Country is required",
  },
  otp: {
    pattern: VALIDATION_RULES.isNumber,
  },
} as const;
