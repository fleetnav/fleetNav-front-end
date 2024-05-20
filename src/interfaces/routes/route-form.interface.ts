import { roadRegisterSchema } from "@/utils";
import { z } from "zod";
import { Pageable, Sort } from "../pagination/paginationn.interface";

export type RouteFormInput = z.infer<typeof roadRegisterSchema>;

export interface RouteResponse {
    id: string;
    name: string;
    destination: string;
    origin: string;
    averageTime: string;
    mileage: string;
    stop: Stop[];
    cost: Cost;
}

export interface GetRoutesResponse {
    content: RouteContent[];
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

export interface RouteContent {
    id: string;
    name: string;
    destination: string;
    origin: string;
    averageTime: string;
    mileage: string;
    stop: Stop[];
    cost: Cost;
}

export interface Cost {
    id: string;
    numberToll: number;
    priceToll: number;
    priceGasoline: number;
    totalPrice: number;
}

export interface Stop {
    id: string;
    name: string;
    location: string;
    time: string;
}
