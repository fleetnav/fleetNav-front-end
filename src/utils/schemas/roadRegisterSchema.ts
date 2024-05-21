import { z } from "zod";

export const roadRegisterSchema = z.object({
    // step1
    name: z.string().min(1, "Name is required"),
    averageTime: z.string().min(1, "average time is required").max(5, "average time can't be longer than 5 characters"),
    origin: z.string().min(1, "Origin category is required"),
    destination: z.string().min(1, "Destination details is required"),
    mileage: z.string().min(1, "Distance description is required"),

    // step2
    numberToll: z.string().min(1, "Tolls description is required"),
    priceToll: z.string().min(1, "Price is required"),
    priceGasoline: z.string().min(1, "Gasoline is required"),

    // step3
    stopName: z.string().min(1, "Stop name is required"),
    location: z.string().min(1, "Location is required"),
    timeStop: z.string().min(1, "Time is required"),
});
