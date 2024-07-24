import { signupSchema } from "../schema/form";
import { userForm } from "../interface/form";

export const formValidator = (formData: userForm) => {
  const { error } = signupSchema.validate(formData, { abortEarly: false });
  return error ? error.details : null;
};
