import { useRef } from "react";

export default function Footer({setFilter}){
    const buttonRef = useRef(null); 

    function filter(_filter, e){
        if(!e) return;
        buttonRef.current.classList.remove('active');
        buttonRef.current = e.target;
        buttonRef.current.classList.add('active');
        setFilter(_filter);
    }

    return (
        <>
            <footer className="wrapper flex justify-center pad-m">
                <button 
                    ref={buttonRef}
                    onClick={filter.bind(null, "all")}
                    className="btn-color active">
                    All
                </button>
                <button
                    onClick={filter.bind(null, 'active')}
                    className="btn-color">
                    Active
                </button>
                <button
                    onClick={filter.bind(null, 'completed')}
                    className="btn-color">
                    Completed
                </button>
            </footer>
        </>
    )
}