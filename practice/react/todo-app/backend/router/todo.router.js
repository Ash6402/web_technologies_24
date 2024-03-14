import express from "express";
import { authenticateToken } from "../middleware/jwt.middleware.js";
import { getAllTodos, addTodo, deleteTodo, updateTodo, clearCompleted } from "../controllers/todo.controller.js";

const todoRouter = express.Router();

todoRouter.use(authenticateToken);

todoRouter.get("/", getAllTodos);

todoRouter.post("/", addTodo);

todoRouter.put("/", updateTodo);

todoRouter.delete("/completed/clear", clearCompleted);

todoRouter.delete("/:id", deleteTodo);

export default todoRouter;