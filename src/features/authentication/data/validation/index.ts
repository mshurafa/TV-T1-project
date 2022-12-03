const VALIDATION_RULES = {
  isEmail:
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
  isNumber: /^\d+$/,
} as const;

export const formValidation = {
  firstName: {
    required: "First Name is required",
  },
  lastName: {
    required: "Last Name is required",
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
      message:
        "password must contain one of each: uppercase, lowercase, number and special",
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
