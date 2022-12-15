import React from "react";
interface IDob {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: any;
  className?: string;
}
export const Dob: React.FC<IDob> = ({ name, handleChange, ref }) => {
  return (
    <div>
      <input
        type="date"
        ref={ref}
        onChange={(e) => handleChange(e)}
        placeholder="Date of Birth*"
        name={name}
      ></input>
    </div>
  );
};
