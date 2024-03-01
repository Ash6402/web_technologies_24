import { useContext } from "react";
import Checkbox from "./CheckBox";
import crossIcon from '../assets/images/icon-cross.svg';
import { TodosContext } from "../pages/AppPage";

export default function ListItem({todo}){
    const {todos, setTodos} = useContext(TodosContext);

    function handleCompletion(){
        setTodos(
            [...todos].map((_todo) => {
                if(_todo.id == todo.id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        )
    }

    function handleDelete(){
        setTodos(
            [...todos].filter((_todo) => _todo.id !== todo.id)
        ) 
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