export interface CreateUserDto {
    name: string,
    email: string,
    password: string,
    role: string,
    profile: {
        phone: string,
        address: string,
        license_number: string
    }
}