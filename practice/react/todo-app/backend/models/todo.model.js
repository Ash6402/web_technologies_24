import { Schema, model} from "mongoose";

const todoSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    }
})

const Todo = model("todo", todoSchema);
export default Todo;