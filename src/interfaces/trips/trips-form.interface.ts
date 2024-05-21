import { tripRegisterSchema } from "@/utils";
import { z } from "zod";

export type TripFormInput = z.infer<typeof tripRegisterSchema>;
