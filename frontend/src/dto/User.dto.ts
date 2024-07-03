export interface User {
    _id: string,
    email: string,
    password: string,
    name: string,
    role: string,
    profile: {
        phone: string,
        address: string,
        license_number: string,
        status: string
    }
}