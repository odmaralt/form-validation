// import React, { useState } from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClick();
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default Button;
