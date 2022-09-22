import React from "react";

const ConfirmPass = ({ name, handleChange, ref }) => {
  return (
    <div>
      <input
        ref={ref}
        onChange={(e) => handleChange(e)}
        type={"password"}
        name={name}
        placeholder="Confirm Password"
      ></input>
    </div>
  );
};
export default ConfirmPass;
