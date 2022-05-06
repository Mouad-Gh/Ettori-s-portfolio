import { useEffect, useState } from "react";

const ProgressBar = () => {

    const [scroll, setScroll] = useState(0);
    const progressMainStyle = {
        
        width: scroll
      };
    
    useEffect(() => {
        
      const setProgressBar =()=>{
        const scrollTotal = document.documentElement.scrollTop;
        const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const value = `${scrollTotal / heightWin * 100}%`;
            setScroll(value)
        
      }
      window.addEventListener('scroll',setProgressBar);
      return () => {
        window.removeEventListener('scroll',setProgressBar)
      }
    }, [scroll])

    return ( <div className={`fixed top-[70px] h-[7px] left-0 w-full z-[90] m-0 p-0   bg-bleu `}>
            <div className="bg-orange h-full" style={progressMainStyle}></div>
        </div> );
}
 
export default ProgressBar;