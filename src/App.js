import React, { useState } from "react";
import * as yup from "yup";
import "./App.css";
import Age from "./components/Age";
import Button from "./components/Button";
import ConfirmPass from "./components/ConfirmPass";
import Dob from "./components/Dob";
import Email from "./components/Email";
import Name from "./components/Name";
import Password from "./components/Password";

const initialValues = {
  name: "",
  email: "",
  age: "",
  dob: "",
  password: "",
  confirm: "",
};

function App() {
  const [inputValues, setInputValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
  const [successful, setSuccesful] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then((valid) => {
        setFormValues({ ...formValues, [name]: value });
        setFormErrors("");
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors, //previous state ee hadgalj buruu baigaa input valueg display hiih bolno.
          [name]: err.errors[0],
        });
      });
  };
  const handleSubmitButton = () => {
    // if (formValues.password !== formValues.confirm) {
    //   setFormErrors({
    //     ...formErrors, //previous state ee hadgalj buruu baigaa input valueg display hiih bolno.
    //     confirm: "Passwords must match",
    //   });
    // }

    if ({ formErrors } === "") {
      setSuccesful(true);
    }
  };

  return (
    <div>
      {/* <div id="signInDiv">
        <p className="title">Sign-in</p>
        <Name className="middle" />
        <Password className="middle" />
        <Button className="middle" />
      </div> */}

      <div id="signUpDiv">
        <p className="title">Sign-up</p>
        <Name className="middle" name="name" handleChange={handleInputChange} />
        <p className="errors">{formErrors.name}</p>
        <Email
          className="middle"
          name="email"
          handleChange={handleInputChange}
        />
        <p className="errors">{formErrors.email}</p>
        <Age className="middle" name="age" handleChange={handleInputChange} />
        <p className="errors">{formErrors.age}</p>
        <Dob className="middle" name="dob" handleChange={handleInputChange} />
        {/* </div> */}
        <p className="errors">{formErrors.dob}</p>
        <Password
          name="password"
          className="middle"
          handleChange={handleInputChange}
        />
        <p className="errors">{formErrors.password}</p>
        <ConfirmPass
          className="middle"
          handleChange={handleInputChange}
          name="confirm"
        />
        <p className="errors">{formErrors.confirm}</p>
        <Button onClick={handleSubmitButton} className="middle" />
      </div>
    </div>
  );
}

export default App;
