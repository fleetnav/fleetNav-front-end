import { truckRegisterSchema } from "@/utils";
import { z } from "zod";
import { Pageable, Sort } from "../pagination/paginationn.interface";

export type TruckFormInput = z.infer<typeof truckRegisterSchema>;

export interface GetVehiclesResponse {
    content: VehicleContent[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    numberOfElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    empty: boolean;
}

export interface VehicleContent {
    id: string;
    mileage: string;
    model: string;
    numberPlate: string;
    ownerId: string;
    status: string;
    nextMaintenance: NextMaintenance;
    vehicleStatus: VehicleStatus;
    maintenances: any[];
}

export interface NextMaintenance {
    id: string;
    date: number[];
    hour: string;
    location: string;
}

export interface VehicleStatus {
    id: string;
    observation: string;
    driverId: string;
}
