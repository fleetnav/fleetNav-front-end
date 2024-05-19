import { DecodedJWT } from "@/interfaces";

// Función para decodificar una cadena Base64
const base64Decode = (base64: string): string => {
    // Reemplazar los caracteres de URL-safe por los normales
    const base64Url = base64.replace(/-/g, "+").replace(/_/g, "/");
    // Agregar los caracteres de padding necesarios
    const paddedBase64 = base64Url.padEnd(base64Url.length + ((4 - (base64Url.length % 4)) % 4), "=");
    // Decodificar Base64
    const decoded = atob(paddedBase64);
    // Convertir la cadena de bytes a texto
    return decodeURIComponent(
        decoded
            .split("")
            .map((c) => {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );
};

// Función para decodificar el JWT
export const decodeJWT = (token: string): DecodedJWT => {
    // Dividir el token en sus tres partes
    const [header, payload, signature] = token.split(".");

    // Decodificar cada parte
    const decodedHeader = JSON.parse(base64Decode(header));
    const decodedPayload = JSON.parse(base64Decode(payload));

    return {
        header: decodedHeader,
        payload: decodedPayload,
        signature: signature,
    };
};
