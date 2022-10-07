import React from "react";

export const Email = ({ name, handleChange, ref }) => {
  return (
    <div>
      <input
        placeholder="Email*"
        name={name}
        ref={ref}
        onChange={(e) => handleChange(e)}
      ></input>
    </div>
  );
};
