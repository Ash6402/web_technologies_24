import './CheckBox.css';

export default function Checkbox({disabled}){
    return (
        <>
            <div class="checkbox-container">
                <input type="checkbox" disabled={disabled} />
                <span className="checkbox"></span>
            </div> 
        </>
    )
}