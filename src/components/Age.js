import React from "react";

const Age = ({ name, handleChange, ref }) => {
  return (
    <div>
      <input
        name={name}
        onChange={(e) => handleChange(e)}
        type={"number"}
        placeholder="Age"
        ref={ref}
      ></input>
    </div>
  );
};
export default Age;
