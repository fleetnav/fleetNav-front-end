import type {
    RouteResponse,
    RouteFormInput,
    TruckFormInput,
    GetRoutesResponse,
    GetVehiclesResponse,
    RouteContent,
    VehicleContent,
} from "@/interfaces";
import { instaceMultitenant } from "@/lib";
import axios from "axios";

export class TenantService {
    constructor() {}

    async createTenant(tenantId: string, token: string): Promise<number> {
        try {
            const { status } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/tenants/${tenantId}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            return status;
        } catch (error) {
            throw new Error("Error creating tenant");
        }
    }

    private async routeRequest(formData: RouteFormInput) {
        const totalPrice = +formData.priceToll * +formData.numberToll + formData.priceGasoline;
        const routeRequest = {
            name: formData.name,
            destination: formData.destination,
            origin: formData.origin,
            averageTime: formData.averageTime,
            mileage: formData.mileage,
            cost: {
                numberToll: formData.numberToll,
                priceToll: formData.priceToll,
                priceGasoline: formData.priceGasoline,
                totalPrice,
            },
        };
        try {
            const { status, data } = await instaceMultitenant.post<RouteResponse>(`routes`, routeRequest);
            return { status, data };
        } catch (error) {
            throw new Error("Error creating route");
        }
    }

    private async stopRequest(formData: RouteFormInput, routeId: string) {
        const stopRequest = {
            name: formData.name,
            location: formData.location,
            time: formData.timeStop,
            routeId: routeId,
        };
        try {
            const { status } = await instaceMultitenant.post(`stops`, stopRequest);

            return status;
        } catch (error) {
            throw new Error("Error creating stop");
        }
    }

    async createRoute(formData: RouteFormInput): Promise<number> {
        try {
            const { status, data } = await this.routeRequest(formData);
            const statusStop = await this.stopRequest(formData, data.id);

            return status;
        } catch (error) {
            throw new Error("Error creating route");
        }
    }

    async createVehicle(formData: TruckFormInput): Promise<number> {
        const vehicleRequest = {
            status: formData.status,
            mileage: formData.mileage,
            model: formData.model,
            numberPlate: formData.numberPlate,
            ownerId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            nextMaintenance: {
                date: formData.date,
                hour: formData.hour,
                location: formData.location,
            },
            vehicleStatus: {
                observation: formData.observation,
                driverId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            },
        };

        try {
            const { data, status } = await instaceMultitenant.post(`vehicles`, vehicleRequest);
            return status;
        } catch (error) {
            throw new Error("Error creating vehicle");
        }
    }

    async getRoutes(): Promise<RouteContent[]> {
        try {
            const { data, status } = await instaceMultitenant.get<GetRoutesResponse>(`routes`);
            console.log(data);
            return data.content;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting routes");
        }
    }

    async getVehicles(): Promise<VehicleContent[]> {
        try {
            const { data, status } = await instaceMultitenant.get<GetVehiclesResponse>(`vehicles`);
            return data.content;
        } catch (error) {
            console.log(error);
            throw new Error("Error getting vehicles");
        }
    }
}
