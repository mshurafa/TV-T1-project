const VALIDATION_RULES = {
  isEmail:
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
} as const;

export const formValidation = {
  firstName: {
    required: "First Name is required",
  },
  lastName: {
    required: "First Name is required",
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
  },
  phoneNumber: {
    required: "Phone number is required",
  },
  country: {
    required: "Country is required",
  },
} as const;
