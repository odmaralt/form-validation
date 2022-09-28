// import React, { useState } from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button
      id="button"
        onClick={() => {
          onClick();
        }}
      >
        Sign In
      </button>
    </div>
  );
};
export default Button;
