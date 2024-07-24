import * as Yup from "yup";

const userSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be positive")
    .integer("Age must be an integer"),
});

export default userSchema;
