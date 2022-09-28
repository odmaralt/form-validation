// import React, { useState } from "react";

const Button1 = ({ onClick }) => {
  return (
    <div>
      <button
        id="button"
        onClick={() => {
          onClick();
        }}
      >
        Sign Up
      </button>
    </div>
  );
};
export default Button1;
