import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
export const formSchema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .min(1, { message: "This is required" })
      .email({ message: "Must be a valid email" }),
    password: zod
      .string()
      .min(1, { message: "This is required" })
      .min(8, { message: "Too short" }),
    profession: zod
      .string({
        required_error: "Please select an profession to display.",
      })
      .min(1),
  })
);
