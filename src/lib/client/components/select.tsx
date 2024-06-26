"use client";

import { SelectOption } from "../types.client";
import ReactSelect, { SingleValue } from "react-select";

type Props<A, B> = {
  options: SelectOption<A, B>[];
  label?: string;
  defaultValue?: SelectOption<A, B>;
  value?: SelectOption<A, B>;
  onChange: (newValue: SingleValue<SelectOption<A, B>>) => void;
};

function Select<A, B>({
  defaultValue,
  value,
  label = "Select option",
  onChange,
  options,
}: Props<A, B>) {
  return (
    <div className="flex flex-col gap-1">
      <span className="capitalize text-foregroundColor font-semibold text-small empty:hidden">
        {label}
      </span>
      <ReactSelect
        defaultValue={defaultValue}
        value={value}
        options={options}
        onChange={onChange}
        styles={{
          control: (base, { isFocused }) => ({
            ...base,
            backgroundColor: "#030200",
            paddingInline: "2rem",
            paddingBlock: "0.2rem",
            border: isFocused ? "1px solid #ffa0c5" : "1px solid #fffbee",
            boxShadow: "none",
            outline: "none",
            gap: "2rem",
            cursor: "pointer",
            ":hover": {
              border: "1px solid #ffa0c5",
            },
          }),
          singleValue: (base) => ({
            ...base,
            color: "#fffbee",
            fontWeight: "600",
            fontFamily: "Lora",
          }),
          option: (base, { isSelected }) => ({
            ...base,
            color: isSelected ? "#030200" : "#ffa0c5",
            fontWeight: "600",
            fontFamily: "Lora",
            cursor: "pointer",
            backgroundColor: isSelected ? "#ffa0c5" : "#030200",
            ":active": {
              backgroundColor: "#ffa0c5",
              color: "#030200",
            },
            ":hover": {
              backgroundColor: "#ffa0c5",
              color: "#030200",
            },
          }),
          dropdownIndicator: (base) => ({
            ...base,
            color: "#fffbee",
          }),
          indicatorSeparator: (base) => ({
            display: "none",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#030200",
            border: "1px solid #ffa0c5",
          }),
        }}
      />
    </div>
  );
}

export default Select;
