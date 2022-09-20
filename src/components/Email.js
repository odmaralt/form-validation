import React from "react";

const Email = ({ value, handleChange }) => {
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
};
export default Email;
