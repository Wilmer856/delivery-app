import dotenv from "dotenv";
// import config from "./config"
import express, { NextFunction, Request, Response } from "express";
import UsersRouter from "./routes/users";
import DeliveryRouter from "./routes/delivery"
import mongoose from "mongoose";

dotenv.config();

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.path, req.method);
    next();
});

// routes

app.use("/api/users", UsersRouter);

app.use("/api/delivery", DeliveryRouter);

// Connect to the database

mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log("Connected to database");

    // listen for request
    app.listen(process.env.PORT, () => {
        console.log('listening on port 3000');
    })
})
.catch((error) => {
    console.log(error);
});
