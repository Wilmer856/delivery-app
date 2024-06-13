import mongoose, { Schema } from "mongoose";

export const deliveriesSchema = mongoose.model('Deliveries', new Schema({
    delivery_id: {
        type: String,
        required:true
    },
    pickup_location: {
        type: String,
        required: true
    },
    dropoff_location: {
        type: String,
        required: true
    },
    assigned_driver: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    updated_at: {
        type: Date,
        required: true
    }
}, {timestamps:true}));


