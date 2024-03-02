import { Schema, model} from "mongoose";

const todoSchema = new Schema({
    text: {
        type: String,
        required: true,
    }
})

export default Todo = model("todo", todoSchema);