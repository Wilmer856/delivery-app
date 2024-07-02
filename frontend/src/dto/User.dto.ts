export interface User {
    email: string,
    password: string,
    name: string,
    role: string,
    profile: {
        phone: string,
        address: string,
        license_number: string
    }
}