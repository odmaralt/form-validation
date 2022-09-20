import React from "react";
const Password = ({ value, handleChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type={"password"}
        placeholder="Password"
      ></input>
    </div>
  );
};
export default Password;
