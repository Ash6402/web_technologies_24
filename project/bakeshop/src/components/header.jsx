import { useState } from 'react';
import './header.css'
import menuicon from '/src/assets/menu-icon.svg'

export default function Header(){ 
    
    let [isMobile, setIsMobile] = useState(false);

    function isMobileFn(){
        window.innerWidth > 600 ? setIsMobile(false) : setIsMobile(true)
    }
    window.addEventListener('resize', isMobileFn);

    window.onload = isMobileFn   
    return (
        <div className='header pad-v-m pad-x-l'>
            <p className="logo-text">BakeShop</p>
            <ul className='menu-list pad-l'>
                <li><a href="">Products</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Cart</a></li>
            </ul>
            { isMobile ? <button><img src={menuicon} alt="menu icon" /></button> : null }
        </div>
    )
}