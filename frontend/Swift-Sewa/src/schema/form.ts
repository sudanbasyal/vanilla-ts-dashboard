import Joi from "joi";

export const signupSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "any.required": "Email is required",
      "string.email": "Email must be a valid format",
    }),

  password: Joi.string()
    .required()
    .min(8)
    .messages({
      "any.required": "Password is required",
      "string.min": "Password must be at least 8 characters",
      "password.uppercase":
        "Password must have at least one uppercase character",
      "password.lowercase":
        "Password must have at least one lowercase character",
      "password.special": "Password must have at least one special character",
    })
    .custom((value, helpers) => {
      if (!/[A-Z]/.test(value)) {
        return helpers.error("password.uppercase");
      }

      if (!/[a-z]/.test(value)) {
        return helpers.error("password.lowercase");
      }

      if (!/[!@#$%]/.test(value)) {
        return helpers.error("password.special");
      }

      return value;
    }),

  name: Joi.string().required().messages({
    "any.required": "Name is required",
  }),

  address: Joi.string().required().messages({
    "any.required": "Address is required",
  }),

  phoneNumber: Joi.string().required().messages({
    "any.required": "Phone number is required",
  }),

  role: Joi.string().required().messages({
    "any.required": "Role is required",
  }),
}).options({
  stripUnknown: true,
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "any.required": "Email is required",
      "string.email": "Email must be a valid format",
    }),

  password: Joi.string()
    .required()
    .min(8)
    .messages({
      "any.required": "Password is required",
    })
    .custom((value, helpers) => {
      if (!/[A-Z]/.test(value)) {
        return helpers.error("password.uppercase");
      }

      if (!/[a-z]/.test(value)) {
        return helpers.error("password.lowercase");
      }

      if (!/[!@#$%]/.test(value)) {
        return helpers.error("password.special");
      }

      return value;
    }),
}).options({
  stripUnknown: true,
});
