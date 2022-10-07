import React from "react";

export const Button = ({ onClick, text }) => {
  return (
    <div>
      <button
        id="button"
        onClick={() => {
          onClick();
        }}
      >
        {text}
      </button>
    </div>
  );
};
