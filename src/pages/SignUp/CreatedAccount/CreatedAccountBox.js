import React from "react";
import { useNavigate } from "react-router-dom";

import "./CreatedAccountBox.css";

const CreatedAccountBox = ({ setSignIn }) => {
  const navigate = useNavigate();

  const handleOkButton = () => {
    navigate("/sign-in");
  };
  return (
    <div id="successBox">
      You've successfully created an account!
      <button
        id="goToSignInButton"
        onClick={() => {
          handleOkButton();
        }}
      >
        Go to Sign In page
      </button>
    </div>
  );
};
export default CreatedAccountBox;
