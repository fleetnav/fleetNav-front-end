import { z } from "zod";

export const tripRegisterSchema = z.object({
    dateStart: z.date().min(new Date(), "Start date must be in the future"),
    dateEnd: z.date().min(new Date(), " date end is required"),
    cost: z.number().min(1, "cost is required"),
    routeId: z.string().uuid().min(1, "route id is required"),
    vehicleId: z.string().uuid().min(1, "vehicle id is required"),
    driverId: z.string().min(1, "driver id is required"),
});
