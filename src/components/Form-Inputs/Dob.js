import React from "react";

export const Dob = ({ name, handleChange, ref }) => {
  return (
    <div>
      <input
        type="date"
        ref={ref}
        onChange={(e) => handleChange(e)}
        placeholder="Date of Birth*"
        name={name}
      ></input>
    </div>
  );
};
