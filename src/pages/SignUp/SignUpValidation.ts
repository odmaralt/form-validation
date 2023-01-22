import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup.string().min(6).required(),
  lastName: yup.string().min(6).required(),
  email: yup.string().email(),
  age: yup.number().typeError("").min(18, "Must be 18 years or older"),
  password: yup.string().required().min(6, "Must be 6 characters or more"),
  confirm: yup.string().required().min(6, "Must be 6 characters or more"),
});

export default validationSchema;
