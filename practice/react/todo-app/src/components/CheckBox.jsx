import './CheckBox.css';

export default function Checkbox({disabled = false, set}){
    return (
        <>
            <div className="checkbox-container">
                <input onChange={set} type="checkbox" disabled={disabled} />
                <span className="checkbox"></span>
            </div> 
        </>
    )
}