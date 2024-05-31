import express, { Request, Response } from "express";
import UsersRouter from "./routes/users";

const app = express();
const port = 3000;

app.use('/api/users', UsersRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
