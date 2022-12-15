import React from "react";
interface IAge {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: any;
  className?: string;
}
export const Age: React.FC<IAge> = ({ name, handleChange, ref }) => {
  return (
    <div>
      <input
        name={name}
        onChange={(e) => handleChange(e)}
        type={"number"}
        placeholder="Age*"
        ref={ref}
      ></input>
    </div>
  );
};
