import { LoginResponse, RegisterForm, RegisterResponse, User } from "@/interfaces";
import { instacheAuth } from "@/lib";

interface HttpError extends Error {
    response?: {
        data?: {
            message: string;
        };
    };
}

export class AuthService {
    private token;
    private user;

    constructor(token?: string, user?: Object) {
        this.token = token;
        this.user = user;
    }

    async registerUser(
        formData: RegisterForm,
        rol: "owner" | "driver"
    ): Promise<{ data: RegisterResponse; status: number }> {
        formData["phone"] = Number(formData.phone);
        formData["role"] = rol;

        if (rol === "owner") {
            formData["number_buses"] = 0;
        }

        try {
            const { data, status } = await instacheAuth.post<RegisterResponse>("auth/register/owner", {
                ...formData,
            });
            return {
                data,
                status,
            };
        } catch (error: unknown) {
            console.log(error);
            throw new Error("error creating user");
        }
    }

    async loginUser(email: string, password: string): Promise<{ data: LoginResponse; status: number }> {
        try {
            const { data, status } = await instacheAuth.post<LoginResponse>("auth/login", {
                email,
                password,
            });
            return {
                data,
                status,
            };
        } catch (error: unknown) {
            const httpError = error as HttpError;
            if (httpError.response?.data?.message) {
                throw new Error(httpError.response.data.message);
            }
            throw new Error("An unexpected error occurred");
        }
    }

    async getUserById(id: string): Promise<{ status: number; msg: string }> {
        try {
            const data = await fetch(`${process.env.NEXT_PUBLIC_AUTH_SERVICE_URL}/owner/${id}`).then((res) =>
                res.json()
            );

            if (data.statusCode) {
                return {
                    status: 404,
                    msg: "not found",
                };
            }

            return {
                status: 200,
                msg: "everything is ok",
            };
        } catch (error: unknown) {
            console.log(error);
            return {
                status: 404,
                msg: "not found",
            };
        }
    }
}
