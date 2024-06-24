"use client";

import React, { ReactNode } from "react";
import { cn } from "../utils";

type Variant = "passive" | "primary" | "danger" | "success" | "disabled";

type Props = {
  variant?: Variant;
  ref?: React.RefObject<HTMLButtonElement>;
  children: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

function Button({
  ref,
  className,
  children,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      ref={ref}
      disabled={variant == "disabled"}
      className={cn(
        "text-backgroundColor px-4 py-2 rounded-bdr",
        {
          "bg-primaryColor": variant == "primary",
          "bg-foregroundColor": variant == "passive",
          "bg-dangerColor": variant == "danger",
          "bg-successColor": variant == "success",
          "bg-mutedColor": variant == "disabled",
          "cursor-not-allowed": variant == "disabled",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
