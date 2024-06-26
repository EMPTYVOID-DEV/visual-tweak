"use client";

import RCSlider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";

function Slider({ max = 100, min = 1, ...props }: SliderProps) {
  return (
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
  );
}

export default Slider;
