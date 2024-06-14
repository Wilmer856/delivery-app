import { Request, Response } from "express";
import { deliveriesSchema as Deliveries } from "../models/deliveriesModel";
import { CreateDeliveryDto } from "../dto/CreateDelivery.dto";
import mongoose from "mongoose";


// Get all deliveries
export const getDeliveries = async (req: Request, res: Response) => {
    const deliveries = await Deliveries.find()
    res.status(200).json(deliveries)
}

// get single delivery
export const getDelivery = async (req: Request, res: Response) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such delivery"})
    }

    const delivery = Deliveries.findById(id);

    if(!delivery) {
        return res.status(404).json({error: "No such delivery"})
    }

    res.status(200).json(delivery)
}

// export const createDelivery = async (req: Request, res: Response) => {
    
// }

// delete delivery
export const deleteDelivery = async (req: Request, res: Response) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such delivery"})
    }

    const delivery = await Deliveries.findOneAndDelete({delivery_id: id})

    if(!delivery) {
        return res.status(400).json({error: "No such delivery"})
    }

    res.status(200).json(delivery)
}



