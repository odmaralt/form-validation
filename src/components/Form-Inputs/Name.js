import React from "react";

export const Name = ({ name, handleChange, ref }) => {
  return (
    <div>
      <input
        placeholder="Name*"
        name={name}
        ref={ref}
        onChange={(e) => handleChange(e)}
      ></input>
    </div>
  );
};
