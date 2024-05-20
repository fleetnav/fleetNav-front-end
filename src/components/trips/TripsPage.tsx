"use client";
import { titleFont } from "@/config";
import { TripForm } from "./trip-register/TripForm";
import { useEffect, useState } from "react";
import { RouteContent, VehicleContent } from "@/interfaces";
import { TenantService } from "@/services";

export const TripsPage = () => {
    const tenantService = new TenantService();

    const [routesData, setRoutesData] = useState<RouteContent[]>([]);
    const [vehiclesData, setVehiclesData] = useState<VehicleContent[]>([]);

    useEffect(() => {
        tenantService.getRoutes().then((data) => {
            setRoutesData(data);
        });
        tenantService.getVehicles().then((data) => {
            setVehiclesData(data);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="flex flex-col gap-16  items-center border h-full p-10  ">
            <h3 className={`${titleFont.className} border-b pb-4 text-6xl`}>Add a trip</h3>

            <TripForm routesData={routesData} vehiclesData={vehiclesData} />
        </section>
    );
};
