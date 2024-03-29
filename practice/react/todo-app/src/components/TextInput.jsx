import { useRef } from 'react'
import Checkbox from './CheckBox'
import './TextInput.css'

export default function TextInput({add}){
    const inputRef = useRef(null);

    function handleSubmit(event){
        const input = inputRef.current;
        if(event.keyCode=="13" && input.value){
            add({
                text: input.value,
                completed: false,
            });
            input.value = null;
        }
    }

    return (
        <div className='text-input wrapper flex align-center pad-m'>
            <Checkbox disabled={true} />
            <input 
                ref={inputRef}
                onKeyDown={handleSubmit} 
                className='input' 
                type="text" 
                placeholder='create a todo...'
            />
        </div>
    )
}