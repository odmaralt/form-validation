import React, { useState } from "react";
import Cookies from "js-cookie";
import * as yup from "yup";
import { Button2, Email, Password } from "../../components/Form-Inputs";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";

const setCookie = (name: string, value: string) => {
  const current = new Date();
  const expirationDate = new Date(current.getTime() + 86400000);
  return Cookies.set(name, `${value}`, {
    path: "/",
    expires: expirationDate,
  });
};

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const SignIn: React.FC = () => {
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);

  const [errorMessage, setErrorMessage] = useState("");
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
    if (formValues.email === "" || formValues.password === "") {
      console.log("here");
    } else {
      await axios
        .post(
          "https://react-app-back-end.onrender.com/login",
          {
            email: formValues.email,
            password: formValues.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const {
            data: { token },
          } = response.data;
          console.log(response.data.data.user);
          setCookie("userToken", token);
          setCookie("userId", response.data.data.user._id);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage("Email or password is incorrect!");
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
        {errorMessage.length > 0 && <p className="errors"> {errorMessage} </p>}
        <Button2
          text="Sign In"
          onClick={handleSubmitButton}
          className="middle"
        />
        <p id="noAcc">
          Don&apos;t have an account?
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
