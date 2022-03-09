import { useEffect, useRef } from "react";

const Circle = () => {
    const inputRef = useRef();
    //this inputRef equals the element that has ref={inputRef}

    const rotateCercle=()=>{
        inputRef.current.style.transform = "rotate(" + window.pageYOffset/2 + "deg)"
    }

    useEffect(() => {
        window.addEventListener("scroll",rotateCercle)
        
    }, [])
    return ( <div ref={inputRef} className="fixed top-8 left-2 z-50 ">
        <img alt="logo" src="images/circle_logo.png" />

    </div> );
}
 
export default Circle;