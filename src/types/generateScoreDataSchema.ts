import { z } from "zod";

export const generateScoreDataSchema = z.object({
  problem: z.string().min(1, "At least a character required!"),
  audience: z.string().min(1, "At least a character required!"),
  alternatives: z.string().min(1, "At least a character required!"),
  unique_value: z.string().min(1, "At least a character required!"),
  solution: z.string().min(1, "At least a character required!"),
  channels: z.string().min(1, "At least a character required!"),
  revenue: z.string().min(1, "At least a character required!"),
  timing: z.string().min(1, "At least a character required!"),
});
