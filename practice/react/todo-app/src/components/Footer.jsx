import { useRef } from "react";

export default function Footer(){
    const buttonRef = useRef(null); 

    function handleClick(event){
        buttonRef.current?.classList.remove('active');
        buttonRef.current = event.target;
        buttonRef.current.classList.add('active'); 
    }

    return (
        <>
            <footer className="wrapper flex justify-center">
                <button 
                    onClick={handleClick}
                    className="btn-color">
                    All
                </button>
                <button
                    onClick={handleClick}
                    className="btn-color">
                        Active
                </button>
                <button
                    onClick={handleClick}
                    className="btn-color">
                        Completed
                </button>
            </footer>
        </>
    )
}