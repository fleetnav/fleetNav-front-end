import { LoginResponse, RegisterForm, RegisterResponse } from "@/interfaces";
import { instacheAuth } from "@/lib";
import axios, { AxiosError } from "axios";

export class AuthService {
    private token;
    private user;

    constructor(token?: string, user?: Object) {
        this.token = token;
        this.user = user;
    }

    async registerUser(formData: RegisterForm): Promise<{ data: RegisterResponse; status: number }> {
        formData["number_buses"] = 0;
        formData["phone"] = Number(formData.phone);

        try {
            const { data, status } = await instacheAuth.post<RegisterResponse>("auth/register/owner", {
                ...formData,
            });
            return {
                data,
                status,
            };
        } catch (error: unknown) {
            throw new Error("error creating user");
        }
    }

    async loginUser(email: string, password: string): Promise<{ data: LoginResponse; status: number }> {
        try {
            const { data, status } = await instacheAuth.post<LoginResponse>("auth/login/owner", {
                email,
                password,
            });
            return {
                data,
                status,
            };
        } catch (error) {
            throw new Error("error creating user");
        }
    }
}
