import { z } from "zod";

export const roadRegisterSchema = z.object({
    name: z.string().min(1, "Name is required"),
    time: z.object({
        year: z.number(),
        month: z.number(),
        day: z.number(),
    }),
    origin: z.string().min(1, "Origin category is required"),
    destination: z.string().min(1, "Destination details is required"),
    distance: z.string().min(1, "Distance description is required"),
    tolls: z.string().min(1, "Tolls description is required"),
    price: z.string().min(1, "Price is required"),
    gasoline: z.string().min(1, "Gasoline is required"),
    quantity: z.string().min(1, "Quantity title is required"),
});
