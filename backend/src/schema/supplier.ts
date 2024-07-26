import Joi from "joi";

// Define the schema for file uploads
const fileSchema = Joi.object({
  fieldname: Joi.string().required(),
  originalname: Joi.string().required(),
  encoding: Joi.string().required(),
  mimetype: Joi.string().required(),
  buffer: Joi.binary().required(),
  size: Joi.number().required(),
});

//TODO fix the schema
// Define the schema for companyData
export const companyBodySchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Name is required",
  }),
  phoneNumber: Joi.string().required().messages({
    "any.required": "Phone number is required",
  }),
  address: Joi.string().required().messages({
    "any.required": "Address is required",
  }),
  location: Joi.string().required().messages({
    "any.required": "Location is required",
  }),
  userId: Joi.string().required().messages({
    "any.required": "User ID is required",
  }),
  categoryId: Joi.string().required().messages({
    "any.required": "Category ID is required",
  }),
  // photo: Joi.object()
  //   .pattern(Joi.string(), Joi.array().items(fileSchema))
  //   .required()
  //   .messages({
  //     "any.required": "Photo is required",
  //   }),
  // panPhoto: Joi.object()
  //   .pattern(Joi.string(), Joi.array().items(fileSchema))
  //   .required()
  //   .messages({
  //     "any.required": "PAN photo is required",
  //   }),
  price: Joi.array().items(Joi.string()).required().messages({
    "any.required": "Price is required",
    "array.base": "Price must be an array of strings",
  }),

  openingTime: Joi.string().required().messages({
    "any.required": "Opening time is required",
  }),
  closingTime: Joi.string().required().messages({
    "any.required": "Closing time is required",
  }),
  description: Joi.string().optional().messages({
    "any.required": "Description is required",
  }),
  serviceIds: Joi.array().items(Joi.string()).required().messages({
    "any.required": "Service IDs are required",
    "array.base": "Service IDs must be an array of strings",
  }),
}).options({
  stripUnknown: true,
});
