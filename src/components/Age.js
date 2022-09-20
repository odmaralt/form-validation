import React from "react";

const Age = ({ value, handleChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type={"number"}
        placeholder="Age"
      ></input>
    </div>
  );
};
export default Age;
