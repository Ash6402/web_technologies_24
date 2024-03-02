import todoModel from "../models/todo.model";

export async function getAllTodos(req, res){
   return await todoModel.find()
}