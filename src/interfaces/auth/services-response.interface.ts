export interface RegisterResponse {
    user: User;
    token: string;
}

export interface LoginResponse {
    user: User;
    token: string;
}

export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    role: string;
    avatarNumber: number;

    license?: number;
    age?: number;
    id_owner?: string;

    number_buses?: number;

    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
