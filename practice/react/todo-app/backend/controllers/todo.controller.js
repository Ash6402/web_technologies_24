import Todo from "../models/todo.model.js"
import User from "../models/user.model.js"

export async function getAllTodos(req, res){
   const id = req.body.id;
   const user = await User.findById(id).exec();
   res.status(200).json(user.todos);
}

export async function addTodo(req, res){
   const _todo = new Todo(req.body.todo);
   const user = await User.findById(req.body.id).exec();
   user.todos.push(_todo);
   await user.save();
   res.status(200).json({_id: _todo._id});
}

export async function deleteTodo(req, res){
   try{
      const todoId = req.params.id;
      const userId = req.body.id;
      const user = await User.findById(userId).exec();
      user.todos = user.todos.filter(todo => !todo._id.equals(todoId));
      await user.save();
      res.sendStatus(200);
   }catch(e){
      console.log(e);
   }
}

export async function updateTodo(req, res){
   try{
      const userId = req.body.id;
      const todo = req.body.todo;
      const user = await User.findById(userId).exec();
      user.todos = user.todos.map(_todo => {
         if(_todo._id.equals(todo._id))
            return todo
         else
            return _todo
      });
      user.save();
      res.sendStatus(200);
   }catch(e){
      console.log(e);
   }
}

export async function clearCompleted(req, res){
   try{
      const id = req.body.id;
      const user = await User.findById(id).exec();
      user.todos = user.todos.filter(todo => !todo.completed)
      await user.save();
      res.sendStatus(200)
   }catch(e){
      console.log(e);
   }
}