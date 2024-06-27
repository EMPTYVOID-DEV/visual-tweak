import { AcceptedFormats } from "../shared/types.shared";

export type SelectOption<A, B> = { value: A; label: B };

export type Operations = "format-conversion" | "compression" | "resize";

export type OperationsSettings =
  | { quality: number }
  | { targetFormat: AcceptedFormats }
  | {
      width: number;
      height: number;
      fit: "fill" | "cover" | "contain";
      position: { x: number; y: number };
    }
  | Record<string, never>;
