import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const Bar = () => {

    const [menuOpen,setMenuOpen] = useState(false);
    const [size,setSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const sizeHundler= ()=>{
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        
        window.addEventListener('resize',sizeHundler)
        return () => {
            //the cleanUp function
            window.removeEventListener('resize',sizeHundler)
        }
    }, [])

    //to prevent the menuopen on the large size
    useEffect(() => {
        if(size.width>768 && menuOpen ){
            setMenuOpen(false);
        }
        
    }, [size.width,menuOpen])

    const toggleClick = () => {
        setMenuOpen(!menuOpen);
    }

    return ( 
    <nav className="w-full md:w-60 m-0 p-0">
        {//size.width>=768 && <header className="h-20  top-0 bg-bleu sticky"> </header>
        }
        
        <aside className={`w-full md:fixed md:h-screen md:w-60 top-0 bg-gradient-to-b from-bleu to-noir text-white ${menuOpen && size.width<768 ? "h-screen" : "h-10" } `}>
            {(size.width<768 && !menuOpen) &&
            (<MenuIcon className="md:hidden p-2 absolute right-4 z-100 w-12 h-12 text-white hover:text-orange cursor-pointer  " onClick={toggleClick}/>) 
            }
            {(size.width<768 && menuOpen) &&
            (<XIcon className="md:hidden p-2 absolute right-4 z-100 w-12 h-12 text-white hover:text-orange cursor-pointer " onClick={toggleClick}/>) 
            }
        </aside>
    </nav> );
}
 
export default Bar;