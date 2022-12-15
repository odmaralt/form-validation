import React from "react";

interface IEmail {
  name?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void ;
  ref?: any;
  className?: string;
}
export const Email: React.FC<IEmail> = ({ name, handleChange, ref }) => {
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
