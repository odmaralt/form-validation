import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().min(4).required(),
  email: yup.string().email(),
  age: yup.number().typeError("").min(18, "Must be 18 years or older"),
  dob: yup
    .string()
    .typeError("")
    .test((value) => {
      const firstFourChars = value.substring(0, 4);
      if (firstFourChars > 2004) {
        return false;
      } else if (firstFourChars <= 2004) {
        return true;
      }
    }),
  password: yup.string().required().min(6, "Must be 6 characters or more"),
  confirm: yup.string().required().min(6, "Must be 6 characters or more"),
});

export default validationSchema;
