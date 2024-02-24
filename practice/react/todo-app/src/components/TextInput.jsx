import Checkbox from './CheckBox'
import './TextInput.css'

export default function TextInput(){

    return (
        <div className='wrapper flex align-center pad-m'>
            <Checkbox disabled={true} />
            <input className='input' type="text" placeholder='create a todo...' />
        </div>
    )
}