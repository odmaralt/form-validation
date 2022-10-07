import React from "react";
export const Password = ({ name, handleChange, ref, placeholder }) => {
  return (
    <div>
      <input
        ref={ref}
        onChange={(e) => handleChange(e)}
        type="password"
        name={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
