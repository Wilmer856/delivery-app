
import mongoose, { Document, Model } from "mongoose"
import bcrypt from "bcrypt"
import { CreateUserDto } from "../dto/CreateUser.dto";
  
interface IUserModel extends Model<CreateUserDto> {
    login(email: string, password: string): Promise<CreateUserDto>;
}


const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
        throw new Error('Invalid login details')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw new Error('Invalid login details')
    }

    return user;
}

const User = mongoose.model<CreateUserDto, IUserModel>("User", userSchema);
export default User;