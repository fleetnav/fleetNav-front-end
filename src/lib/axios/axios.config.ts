import axios from "axios";
import { useAuthStore } from "@/store";

const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": true,
};

export const instaceChat = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CHAT_SERVICE_URL,
    headers: headers,
});

export const instacheAuth = axios.create({
    baseURL: process.env.NEXT_PUBLIC_AUTH_SERVICE_URL,
    headers: headers,
});

export const instaceMultitenant = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_GATEWAY_URL,
    headers: headers,
});

// tesloApi.interceptors.request.use((config) => {
//     const token = useAuthStore.getState().token;

//     console.log({ token });

//     if (token) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
// });

instaceMultitenant.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    const user = useAuthStore.getState().user;

    console.log({ token });

    if (token && user) {
        config.headers["Authorization"] = `Bearer ${token}`;
        config.url = `${user._id}/${config.url}`;
    }

    return config;
});
