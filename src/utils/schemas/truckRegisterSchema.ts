import { z } from "zod";

export const truckRegisterSchema = z.object({
    // step1
    mileage: z.string().min(1, "mileage is required").max(10, "mileage can't be longer than 10 characters"),
    model: z.string().min(1, "model time is required").max(4, "model can't be longer than 4 characters"),

    numberPlate: z.string().min(6, "minimun length is 6"),
    status: z.string().min(1, "status is required"),

    //nextMaintenance
    date: z.string().min(1, "Distance description is required"),
    hour: z.string().min(1, "Distance description is required"),
    location: z.string().min(1, "location description is required"),

    // status
    observation: z.string().min(1, "Observation is required"),
});
