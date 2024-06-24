"use client";

import { SelectOption } from "../types.client";
import ReactSelect, { SingleValue } from "react-select";

type Props<A, B> = {
  options: SelectOption<A, B>[];
  label?: string;
  defaultValue: SelectOption<A, B>;
  onChange: (newValue: SingleValue<SelectOption<A, B>>) => void;
};

function Select<A, B>({
  defaultValue,
  label = "Select option",
  onChange,
  options,
}: Props<A, B>) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-foregroundColor font-semibold text-small">
        {label}
      </span>
      <ReactSelect
        defaultValue={defaultValue}
        options={options}
        onChange={onChange}
        styles={{
          control: (base, { isFocused }) => ({
            ...base,
            backgroundColor: "#030200",
            paddingInline: "2rem",
            paddingBlock: "0.2rem",
            border: isFocused ? "1px solid #fffbee" : "1px solid #ffb7c5",
            boxShadow: "none",
            outline: "none",
            gap: "2rem",
            ":hover": {
              border: "1px solid #ffb7c5",
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
            color: isSelected ? "#030200" : "#ffb7c5",
            fontWeight: "600",
            fontFamily: "Lora",
            backgroundColor: isSelected ? "#ffb7c5" : "#030200",
            ":active": {
              backgroundColor: "#ffb7c5",
              color: "#030200",
            },
            ":hover": {
              backgroundColor: "#ffb7c5",
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
            border: "1px solid #ffb7c5",
          }),
        }}
      />
    </div>
  );
}

export default Select;
