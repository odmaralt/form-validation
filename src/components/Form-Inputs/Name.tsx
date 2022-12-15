import React from "react";
interface IName {
  name?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: any;
  className?: string;
  error?: {};
}
export const Name: React.FC<IName> = ({ name, handleChange, ref }) => {
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
