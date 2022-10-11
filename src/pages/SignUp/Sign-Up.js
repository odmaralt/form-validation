import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import validationSchema from "./SignUpValidation";
import {
  Button,
  Dob,
  Email,
  Name,
  Password,
  Age,
} from "../../components/Form-Inputs";
import { auth, db } from "../../firebase";
import * as yup from "yup";
import CreatedAccountBox from "./CreatedAccount/CreatedAccountBox";
import { useNavigate } from "react-router-dom";
import "./Sign-Up.css";

const initialValues = {
  name: "",
  email: "",
  age: "",
  dob: "",
  password: "",
  confirm: "",
};

const SignUpForm = ({ setSignIn }) => {
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
  const [succesfullyCreatedAccount, setSuccesfullyCreatedAccount] =
    useState(false);
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
    if (formValues.password !== formValues.confirm) {
      setFormErrors({
        ...formErrors, //previous state ee hadgalj buruu baigaa input valueg display hiih bolno.
        confirm: "Passwords must match",
      });
    }
    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.dob === "" ||
      formValues.age === "" ||
      formValues.password === "" ||
      formValues.confirm === ""
    ) {
      setSignIn(false);
    } else if (
      formErrors.name === undefined ||
      formErrors.email === undefined ||
      formErrors.dob === undefined ||
      formErrors.age === undefined ||
      formErrors.password === undefined ||
      formErrors.confirm === undefined ||
      formErrors.name === "" ||
      formErrors.email === "" ||
      formErrors.dob === "" ||
      formErrors.age === "" ||
      formErrors.password === "" ||
      formErrors.confirm === ""
    ) {
      const response = await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      const user = response.user;
      const userRef = doc(collection(db, "users"));
      await setDoc(userRef, {
        name: formValues.name,
        email: formValues.email,
        age: formValues.age,
        dob: formValues.dob,
        uid: user.uid,
      });
      setSuccesfullyCreatedAccount(true);
      // setSignIn(false);
    }
  };

  const handleSignInButton = () => {
    navigate("/");
  };

  return (
    <div id="test">
      {succesfullyCreatedAccount && <CreatedAccountBox setSignIn={setSignIn} />}
      {!succesfullyCreatedAccount && (
        <div className="background">
          <div id="signUpDiv">
            <p className="title1">Sign up now</p>
            <Name
              className="middle"
              name="name"
              error={formErrors === undefined}
              handleChange={handleInputChange}
            />
            <p className="errors">{formErrors.name}</p>
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
            <Button
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

export default SignUpForm;
