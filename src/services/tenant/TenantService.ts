import { instaceMultitenant } from "@/lib";
import axios from "axios";
import { headers } from "next/headers";

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
}
