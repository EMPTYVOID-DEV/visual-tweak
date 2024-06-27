"use client";

import React, { ChangeEvent } from "react";

type InputType = "text" | "password" | "email" | "number";

type InputProps = {
  label?: string;
  inputType?: InputType;
  value?: string;
  handleChange: (value: string) => void;
} & React.HTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  label = "",
  inputType = "text",
  value,
  defaultValue,
  handleChange,
  ...props
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col items-stretch gap-2 w-[--width,100%]">
      {label && (
        <label
          htmlFor="input"
          className="font-font text-body font-semibold text-foregroundColor empty:hidden"
        >
          {label}
        </label>
      )}
      <input
        id="input"
        type={inputType}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className={`
          w-full px-2 py-2 text-body font-font text-foregroundColor
          bg-transparent rounded-bdr border-2 border-foregroundColor
          outline-none
          focus:border-primaryColor focus:bg-primaryColor/30
          [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
        `}
        {...props}
      />
    </div>
  );
};

export default Input;
