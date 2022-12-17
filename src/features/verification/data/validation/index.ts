import { VALIDATION_RULES } from "data";

export const formValidation = {
  idDocumentType: {
    required: "Document type is required",
  },
  idNumber: {
    required: "ID Number is required",
    pattern: {
      value: VALIDATION_RULES.isNumber,
      message: "ID number should be a number",
    },
  },
  file: {
    required: "File is required",
  },
} as const;
