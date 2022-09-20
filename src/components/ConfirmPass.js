import React from "react";

const ConfirmPass = ({ value, handleChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type={"password"}
        placeholder="Confirm Password"
      ></input>
    </div>
  );
};
export default ConfirmPass;
