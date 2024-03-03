import { useContext } from "react";
import Checkbox from "./CheckBox";
import crossIcon from '../assets/images/icon-cross.svg';
import { TodosContext } from "../pages/AppPage";
import { http_deleteTodo, http_updateTodo } from "../services/http.service";

export default function ListItem({todo}){
    const {todos, setTodos} = useContext(TodosContext);

    function handleCompletion(){
        http_updateTodo({...todo, completed: !todo.completed}).then(() => {
            setTodos(
                [...todos].map((_todo) => {
                    if(_todo._id == todo._id){
                        todo.completed = !todo.completed;
                    }
                    return _todo;
                })
            )
        })
    }

    function handleDelete(){
        http_deleteTodo(todo._id).then(() => {
            setTodos(
                [...todos].filter((_todo) => _todo._id !== todo._id)
            ) 
        })
    }

    return (
        <li>
            <div className="flex item pad-m gap-m">
                <Checkbox set={handleCompletion} completed={todo.completed} />
                <p className={todo.completed ? 'completed' : ''} >{todo.text}</p>
                <button style={{marginLeft: 'auto'}} onClick={handleDelete}>
                    <img src={crossIcon} /> 
                </button>
            </div>
        </li>
    )
}