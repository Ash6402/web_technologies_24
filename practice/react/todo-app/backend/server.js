import  express  from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRouter from "./router/auth.router.js";
import todoRouter from "./router/todo.router.js";

const app = express();

mongoose.connect("mongodb://localhost/todoDB")
.then(() => {
    console.log("Connected to MongoDB!")
})
.catch(e => {
    console.log(`Unable to connect to MongoDB.\nError: ${e}`)
})

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.listen(3000, (req, res) => {
    console.log("Server Initialized!");
})

app.use("/auth", authRouter);
app.use("/todo", todoRouter);