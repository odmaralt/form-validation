import React from "react";
interface IButton {
  onClick?: any;
  text: string;
  className?: string;
}
export const Button2: React.FC<IButton> = ({ onClick, text }) => {
  return (
    <div>
      <button
        id="button"
        onClick={() => {
          onClick();
        }}
      >
        {text}
      </button>
    </div>
  );
};
