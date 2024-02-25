import { useState } from "react";
import Checkbox from "./CheckBox";

export default function ListItem({todo}){
    const [completed, setCompleted] = useState(todo.completed);

    function handleCompletion(){
        setCompleted(!completed);
        todo.completed = !todo.completed;
    }

    return (
        <li>
            <div className="flex item pad-m gap-m">
                <Checkbox set={handleCompletion} completed={todo.completed} />
                <p className={todo.completed ? 'completed' : ''} >{todo.text}</p>
            </div>
        </li>
    )
}