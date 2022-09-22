import React from "react";
const Password = ({ name, handleChange, ref }) => {
  return (
    <div>
      <input
        ref={ref}
        onChange={(e) => handleChange(e)}
        type={"password"}
        name={name}
        placeholder="Password"
      ></input>
    </div>
  );
};
export default Password;
