import { useState } from "react";
import Checkbox from "./CheckBox";

export default function ListItem({todoText}){
    const [completed, setCompleted] = useState(false);
    function handleCompletion(){
        setCompleted(!completed);
    }
    return (
        <li>
            <div className="flex item pad-m gap-m">
                <Checkbox set={handleCompletion} />
                <p className={completed ? 'completed' : ''} >{todoText}</p>
            </div>
        </li>
    )
}