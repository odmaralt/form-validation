import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import validationSchema from "./SignUpValidation";
import Age from "../Age";
import Button1 from "../Button1";
import ConfirmPass from "../ConfirmPass";
import Dob from "../Dob";
import Email from "../Email";
import Name from "../Name";
import Password from "../Password";
import { auth, db } from "../../firebase";
import * as yup from "yup";
import CreatedAccountBox from "./CreatedAccountBox";
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
      // setSignIn(true);
    }
  };

  const handleSignInButton = () => {
    setSignIn(true);
  };

  return (
    <div>
      {succesfullyCreatedAccount && <CreatedAccountBox setSignIn={setSignIn} />}
      {!succesfullyCreatedAccount && (
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
          <Age className="middle" name="age" handleChange={handleInputChange} />
          <p className="errors">{formErrors.age}</p>
          <Dob className="middle" name="dob" handleChange={handleInputChange} />
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
          <p className="errors">{formErrors.confirm}</p>{" "}
          <Button1
            onClick={handleSubmitButton}
            className="middle"
         
          />
          <p
          id="yesAcc"
          >
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
      )}
    </div>
  );
};

export default SignUpForm;
