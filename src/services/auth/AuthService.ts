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
        try {
            formData.phone = Number(formData.phone);
            formData.role = rol;

            rol === "owner" ? this.prepareOwnerData(formData) : await this.prepareDriverData(formData);

            const { data, status } = await this.registerUserApi(formData, rol);
            return { data, status };
        } catch (error: any) {
            console.log(error);
            throw new Error(error.message || "Error creating user");
        }
    }

    private prepareOwnerData(formData: RegisterForm) {
        formData.number_buses = 0;
        formData.avatarNumber = 1;
    }

    private async prepareDriverData(formData: RegisterForm) {
        if (!formData.id_owner) {
            throw new Error("Owner ID is required for drivers");
        }

        const { status } = await this.getUserById(formData.id_owner, "owner");
        if (status === 200) {
            formData.avatarNumber = 3;
            formData.status = "inactive";
            formData.license = Number(formData.license);
            formData.age = Number(formData.age);
        } else {
            throw new Error("The owner ID is not valid");
        }
    }

    private async registerUserApi(
        formData: RegisterForm,
        rol: string
    ): Promise<{ data: RegisterResponse; status: number }> {
        try {
            const { data, status } = await instacheAuth.post<RegisterResponse>(`auth/register/${rol}`, formData);
            return { data, status };
        } catch (error) {
            console.log(error);
            throw new Error("Error registering user");
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

    async getUserById(id: string, role: "owner" | "driver"): Promise<{ status: number; msg: string }> {
        try {
            const data = await fetch(`${"https://fleetnav-auth-service-0-0-1.onrender.com"}/${role}/${id}`).then(
                (res) => res.json()
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
