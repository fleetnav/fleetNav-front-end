export interface JWTPayload {
    id: string;
    email: string;
    iat: number;
    exp: number;
}

export interface JWTHeader {
    alg: string;
    typ: string;
}

export interface DecodedJWT {
    header: JWTHeader;
    payload: JWTPayload;
    signature: string;
}
