import { Document } from "mongoose"

export interface CreateUserDto extends Document{
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