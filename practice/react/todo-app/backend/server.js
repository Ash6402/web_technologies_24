import  express  from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import { getAllTodos, addTodo, deleteTodo, updateTodo, clearCompleted } from "./controllers/todo.controller.js";
import authRouter from "./router/auth-router.js";

const app = express();

mongoose.connect("mongodb://localhost/todoDB")
.then(() => {
    console.log("Connected to MongoDB!")
})
.catch(e => {
    console.log(`Unable to connect to MongoDB.\nError: ${e}`)
})

app.use(cors());
app.use(express.json());

app.listen(3000, (req, res) => {
    console.log("Server Initialized!");
})

app.get("/", getAllTodos);

app.post("/", addTodo);

app.put("/", updateTodo);

app.delete("/todo/clear", clearCompleted);

app.delete("/:id",deleteTodo);

app.use("/auth", authRouter);