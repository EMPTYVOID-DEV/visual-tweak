import { z } from "zod";

export const EmptySettingsSchema = z.object({});

export type EmptySettingsType = Record<string, never>;
