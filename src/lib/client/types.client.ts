import { FunctionComponent } from "react";

export type SelectOption<A, B> = { value: A; label: B };

export type OptimizationOperations =
  | "format-conversion"
  | "compression"
  | "resize";

export type Settings<A extends string> = Record<
  A,
  {
    component: FunctionComponent | null;
    defaultSettings: Record<string, unknown>;
  }
>;
export type Pack = {
  title: string;
  description: string;
  href: string;
};
