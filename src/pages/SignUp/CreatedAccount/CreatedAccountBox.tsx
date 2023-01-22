import React from "react";
import { useNavigate } from "react-router-dom";

import "./CreatedAccountBox.css";

const CreatedAccountBox: React.FC = () => {
  const navigate = useNavigate();

  const handleOkButton = () => {
    navigate("/sign-in");
  };
  return (
    <div id="successBox">
      You&apos;ve successfully created an account!
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
