import React from "react";

const Dob = ({ value, handleChange }) => {
  return (
    <div>
      <input
        type="date"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Date of Birth"
      ></input>
    </div>
  );
};
export default Dob;
