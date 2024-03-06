import Todo from "../models/todo.model.js"

export async function getAllTodos(req, res){
   const result = await Todo.find().exec()
   res.status(200).json(result);
}

export async function addTodo(req, res){
   const _todo = new Todo(req.body);
   await _todo.save();
   res.status(200).json({_id: _todo._id});
}

export async function delelteTodo(req, res){
   try{
      await Todo.deleteOne({_id: req.params.id}).exec();
      res.status(200).json({successful: true});
   }catch(e){
      console.log(e);
   }
}

export async function updateTodo(req, res){
   try{
      const todo = req.body;
      await Todo.updateOne({_id: todo._id}, todo).exec();
      res.status(200).json({successful: true})
   }catch(e){
      console.log(e);
   }
}

export async function clearCompleted(req, res){
   try{
      await Todo.deleteMany({completed: true}).exec();
      res.status(200).json({successful: true});
   }catch(e){
      console.log(e);
   }
}