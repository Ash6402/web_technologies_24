import { Schema, model } from "mongoose";
import { todoSchema } from "./todo.model.js";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    todos: {
        type: [todoSchema],
    },
})

const User = model("user", userSchema);

export default User;