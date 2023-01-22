import React, { useState } from "react";
import validationSchema from "./SignUpValidation";
import {
  Button2,
  Dob,
  Email,
  Name,
  Password,
  Age,
} from "../../components/Form-Inputs";
import * as yup from "yup";
import CreatedAccountBox from "./CreatedAccount/CreatedAccountBox";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  dob: "",
  password: "",
  confirm: "",
};

export const SignUpForm: React.FC = () => {
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
  const [succesfullyCreatedAccount, setSuccesfullyCreatedAccount] =
    useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    yup
      .reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setFormValues({ ...formValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err: { errors: string }) => {
        setFormErrors({
          ...formErrors, // previous state ee hadgalj buruu baigaa input valueg display hiih bolno.
          [name]: err.errors[0],
        });
      });
  };
  const handleSubmitButton = async () => {
    await axios
      .post(
        "http://localhost:5454/signUp",
        {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          password: formValues.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          navigate("/success-page");
        }
      })
      .catch((err) => console.log("here", err));
  };

  const handleSignInButton = () => {
    navigate("/sign-in");
  };

  return (
    <div id="test">
      {succesfullyCreatedAccount && <CreatedAccountBox />}
      {!succesfullyCreatedAccount && (
        <div className="background">
          <div id="signUpDiv">
            <p className="title1">Sign up now</p>
            <Name
              className="middle"
              name="firstName"
              // error={formErrors === undefined}
              handleChange={(e) => handleInputChange(e)}
              placeholder="First Name*"
            />{" "}
            <p className="errors">{formErrors.firstName}</p>
            <Name
              className="middle"
              placeholder="Last Name*"
              name="lastName"
              // error={formErrors === undefined}
              handleChange={(e) => handleInputChange(e)}
            />
            <p className="errors">{formErrors.lastName}</p>
            <Email
              className="middle"
              name="email"
              handleChange={handleInputChange}
            />
            <p className="errors">{formErrors.email}</p>
            <Age
              className="middle"
              name="age"
              handleChange={handleInputChange}
            />
            <p className="errors">{formErrors.age}</p>
            <Dob
              className="middle"
              name="dob"
              handleChange={handleInputChange}
            />
            <p className="errors">{formErrors.dob}</p>
            <Password
              name="password"
              className="middle"
              handleChange={handleInputChange}
              placeholder="Password"
            />
            <p className="errors">{formErrors.password}</p>
            <Password
              className="middle"
              handleChange={handleInputChange}
              name="confirm"
              placeholder="Confirm Password"
            />
            <p className="errors">{formErrors.confirm}</p>{" "}
            <Button2
              onClick={handleSubmitButton}
              className="middle"
              text="Sign Up"
            />
            <p id="yesAcc">
              Already have an account?
              <button
                id="signInButton"
                onClick={() => {
                  handleSignInButton();
                }}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
