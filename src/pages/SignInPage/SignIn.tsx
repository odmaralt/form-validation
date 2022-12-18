import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import * as yup from "yup";
import { auth } from "../../firebase";
import { Button2, Email, Password } from "../../components/Form-Inputs";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";

interface ISignIn {
  setUser: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const SignIn: React.FC<ISignIn> = ({ setUser }) => {
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
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
      setUser(false);
    } else {
      await axios
        .post(
          "http://localhost:5454/login",
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
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
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
        <Button2
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
