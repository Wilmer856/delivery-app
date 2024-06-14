
import mongoose, { Schema } from "mongoose"

export const usersSchema = mongoose.model("Users", new Schema({
    user_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    profile: {
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        license_number: {
            type: String,
            required: true,
        }
    }
}))