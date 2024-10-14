export interface UserAttributesType {
    id: string;
    idToken?: string;
    accessToken?: string;
    refreshToken?: string;
    [key: string]: string | number | undefined
}
