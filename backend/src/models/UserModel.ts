
import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
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
})

userSchema.statics.login = async function(email, password) {
    if(!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email})

    if(!user) {
        throw Error('Invalid login details')
    }


}

export default mongoose.model("Users", userSchema);
