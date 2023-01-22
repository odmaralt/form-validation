import React from "react";
interface IName {
  name?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: any;
  className?: string;
  placeholder?: string
}
export const Name: React.FC<IName> = ({ name, handleChange, ref, placeholder }) => {
  return (
    <div>
      <input
        name={name}
        ref={ref}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
