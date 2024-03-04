import { useRef } from "react";

export default function Footer({actives, setFilter}){
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
            <footer className="wrapper flex space-between pad-m">
                <p className="basis-100">{actives} item{actives == 1 ? "": "s"} left</p>
                <div className="flex basis-100 justify-center gap-sm">
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
                </div>
                <button style={{textAlign: "right"}} className="basis-100 btn-color">
                    clear completed
                </button>
            </footer>
        </>
    )
}

// Instead of function binding we can pass the function with arguments wrapped in an
// anonymous function onClick={() => filter(args)}