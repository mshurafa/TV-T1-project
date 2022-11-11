export const VALIDATION_RULES = {
  isEmail:
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
} as const;

export const emailRegisterOptions = {
  required: "Email address is required",
  pattern: {
    value: VALIDATION_RULES.isEmail,
    message: "Invalid email address",
  },
};
