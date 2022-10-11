import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import * as yup from "yup";
import { auth } from "../../firebase";
import { Button, Email, Password } from "../../components/Form-Inputs";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignIn = ({ setUser }) => {
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();
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
      setUser(false);
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
    navigate("/sign-up");
  };
  return (
    <div className="background">
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
          placeholder="Password"
        />
        <p className="errors">{formErrors.password}</p>{" "}
        <Button
          text="Sign In"
          onClick={handleSubmitButton}
          className="middle"
        />
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
    </div>
  );
};

export default SignIn;
