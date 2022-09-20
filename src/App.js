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
};

const validateInput = yup.object({
  name: yup.string().min(4, "Must be more than 4 letters"),
  email: yup.string().email().required(),
});

function App() {
  const [inputValues, setInputValues] = useState(initialValues);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [dobError, setDobError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleNameInputChange = (value) => {
    validateInput
      .isValid({ name: value })
      .then((value) => {
        console.log(value);
        // setInputValues({ ...inputValues, name: value });
      })
      .catch((err) => {
        console.log(err);
        // setNameError(err);
      });
  };

  const handleEmailInputChange = (value) => {
    setInputValues({ ...inputValues, email: value });
  };
  const handleAgeInputChange = (value) => {
    setInputValues({ ...inputValues, age: value });
  };
  const handleDobInputChange = (value) => {
    setInputValues({ ...inputValues, dob: value });
  };
  const handlePasswordInputChange = (value) => {
    setInputValues({ ...inputValues, password: value });
  };
  const handleConfirmPasswordInputChange = (value) => {
    setInputValues({ ...inputValues, confirmPassword: value });
  };

  const handleSubmitButton = () => {
    // if (inputValues.name.length < 4) {
    //   setNameError("Name must be more than 4 letters");
    // } else if (inputValues.name.length >= 4) {
    //   setNameError("");
    // }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValues.email)) {
      setEmailError("Enter valid email");
    } else if (
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValues.email)
    ) {
      setEmailError("");
    }
    if (inputValues.age < 18) {
      setAgeError("Must be 18 years or older");
    } else if (inputValues.age >= 18) {
      setAgeError("");
    }

    const firstFourChars = inputValues.dob.substring(0, 4);
    if (firstFourChars > 2004) {
      setDobError("Must be born in 2004 or before");
    } else if (firstFourChars <= 2004) {
      setDobError("");
    }
    if (inputValues.password.length < 8) {
      setPasswordError("Password must be more than 8 characters");
    } else if (inputValues.password.length >= 8) {
      setPasswordError("");
    }
    if (inputValues.password != inputValues.confirmPassword) {
      setConfirmPasswordError("Passwords don't match");
    } else if (inputValues.password === inputValues.confirmPassword) {
      setConfirmPasswordError("");
    }
  };

  return (
    <div>
      <div id="signInDiv">
        <p>Sign-in</p>
        <Name />
        <Password />
        <Button />
      </div>

      <div id="signUpDiv">
        <p>Sign-up</p>
        <Name value={inputValues.name} handleChange={handleNameInputChange} />
        <p style={{ fontSize: "12px", color: "red" }}>{nameError}</p>
        <Email
          value={inputValues.email}
          handleChange={handleEmailInputChange}
        />
        <p style={{ fontSize: "12px", color: "red" }}>{emailError}</p>
        <Age value={inputValues.age} handleChange={handleAgeInputChange} />
        <p style={{ fontSize: "12px", color: "red" }}>{ageError}</p>
        <Dob value={inputValues.dob} handleChange={handleDobInputChange} />
        <p style={{ fontSize: "12px", color: "red" }}>{dobError}</p>
        <Password
          value={inputValues.password}
          handleChange={handlePasswordInputChange}
        />
        <p style={{ fontSize: "12px", color: "red" }}>{passwordError}</p>
        <ConfirmPass
          value={inputValues.confirmPassword}
          handleChange={handleConfirmPasswordInputChange}
        />{" "}
        <p style={{ fontSize: "12px", color: "red" }}>{confirmPasswordError}</p>
        <Button onClick={handleSubmitButton} />
      </div>
    </div>
  );
}

export default App;
