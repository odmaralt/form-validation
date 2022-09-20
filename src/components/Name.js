import React from "react";

const Name = ({ value, handleChange, ref }) => {
  return (
    <div>
      <input
        placeholder="Name"
        value={value}
        ref={ref}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
};

export default Name;
