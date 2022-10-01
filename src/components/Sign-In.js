import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import * as yup from "yup";
import { auth } from "../firebase";
import Button from "./Button";
import Email from "./Email";
import LandingPage from "./LandingPage";
import Password from "./Password";
// import App from "../../../t-app//src/App";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignIn = ({ setSignIn }) => {
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
  const [successful, setSuccesful] = useState(false);
  const [user, setUser] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then((valid) => {
        setFormValues({ ...formValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors, //previous state ee hadgalj buruu baigaa input valueg display hiih bolno.
          [name]: err.errors[0],
        });
      });
  };

  const handleSubmitButton = async () => {
    if (formValues.email === "" || formValues.password === "") {
      setSuccesful(false);
    }
    if (formErrors.email === "") {
      await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      )
        .then((response) => {
          const user = response.user;
          setUser(user);
          setSuccesful(true);
        })
        .catch((err) => {
          setFormErrors({
            ...formErrors, //previous state ee hadgalj buruu baigaa input valueg display hiih bolno.
            password: err.message,
          });
        });
    }
  };
  const handleCreateAccountButton = () => {
    console.log("herer");
    setSignIn(false);
  };
  return (
    <div>
      {successful && <LandingPage user={user} />}
      {!successful && (
        <div id="signInDiv">
          <p className="title">Sign in to your account</p>
          <Email
            name="email"
            handleChange={handleInputChange}
            className="middle"
          />
          <p className="errors">{formErrors.email}</p>
          <Password
            className="middle"
            name="password"
            handleChange={handleInputChange}
          />
          <p className="errors">{formErrors.password}</p>{" "}
          <Button onClick={handleSubmitButton} className="middle" />
          <p id="noAcc">
            Don't have an account?
            <button id="createAccButton">
              <p
                onClick={() => {
                  handleCreateAccountButton();
                }}
              >
                Create an account
              </p>
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
