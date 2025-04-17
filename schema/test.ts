import * as z from "@zod/mini";

export const testSchema = z.interface({
	a: z.string(),
	b: z.number(),
});
