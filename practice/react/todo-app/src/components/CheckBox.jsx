import './CheckBox.css';

export default function Checkbox({disabled = false, set, completed}){
    return (
        <>
            <div className="checkbox-container">
                <input onChange={set} type="checkbox" disabled={disabled} checked={completed} />
                <span className="checkbox"></span>
            </div> 
        </>
    )
}