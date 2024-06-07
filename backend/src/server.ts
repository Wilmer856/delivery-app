import dotenv from "dotenv";
// import config from "./config"
import express, { Request, Response } from "express";
import UsersRouter from "./routes/users";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use("/api/users", UsersRouter);

// Connect to the database

mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log("Connected to database")

    // listen for request
    app.listen(process.env.PORT, () => {
        console.log('listening on port 3000');
    })
})
.catch((error) => {
    console.log(error)
})
