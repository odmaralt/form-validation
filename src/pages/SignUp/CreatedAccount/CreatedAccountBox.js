import React from "react";
import "./CreatedAccountBox.css";
const CreatedAccountBox = ({ setSignIn }) => {
  const handleOkButton = () => {
    setSignIn(true);
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
