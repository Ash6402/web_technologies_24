import './header.css'
import iconLight from '../assets/images/icon-sun.svg';
import iconDark from '../assets/images/icon-moon.svg'
import { useState } from 'react';

export default function Header(){
    let [dark, setDark] = useState(true);
    function toggleMode(){
        document.body.classList.toggle("light");
        setDark(!dark);
    }

    return (
        <div className='header'>
            <div className='flex space-between'>
                <p className="main-text">TODO</p>
                <button onClick={toggleMode}>
                    <img src={dark ? iconLight : iconDark} alt="theme toggle icon" />
                </button>
            </div>
        </div>
    )
}