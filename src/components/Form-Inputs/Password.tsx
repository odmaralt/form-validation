import React from "react";

interface IPassword {
  name: string;
  type?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: any;
  placeholder: string;
  className?: string;
}
export const Password: React.FC<IPassword> = ({
  name,
  handleChange,
  ref,
  placeholder,
}) => {
  return (
    <div>
      <input
        ref={ref}
        onChange={(e) => handleChange(e)}
        type="password"
        name={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
