"use client";

import RCSlider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";

type Props = { label?: string } & SliderProps;

function Slider({ max = 100, min = 1, label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <span className="capitalize text-small font-semibold text-foregroundColor empty:hidden">
        {label}
      </span>
      <RCSlider
        max={max}
        min={min}
        styles={{
          handle: {
            backgroundColor: "#ffb7c5",
            borderColor: "#ffb7c5",
            boxShadow: "none",
          },
          track: {
            backgroundColor: "#ffb7c5",
          },
        }}
        {...props}
      />
    </div>
  );
}

export default Slider;
