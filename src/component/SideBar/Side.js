import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Side = ({menuOpen,toggleClick}) => {

    const [subMenu, setsubMenu] = useState(false);

    const toggleMenu=()=>{
        setsubMenu(!subMenu);
    }
//inset-y-0
    return ( 
        <div className={`z-50 h-screen w-60 fixed inset-y-0 transform transition  left-0 duration-200 ease-in-out  ${menuOpen ? "translate-x-0" : "-translate-x-full" }`}>

            <aside className={`relative top-[70px] h-screen w-60 bg-gradient-to-b from-bleu to-noir text-white`}>
                
                <nav className="pt-6 text-lg">
                    {/* subMenu */}
                    

                    <a href="#digital_art" className="block  px-4 py-2.5 mt-10 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest" onClick={()=>toggleClick()}>Digital art</a>
                    <a href="#graphic_design" className="block  px-4 py-2.5 mt-2 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest" onClick={()=>toggleClick()}>graphic design</a>
                    <a href="#animation" className="block  px-4 py-2.5 mt-2 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest" onClick={()=>toggleClick()}>animation</a>
                    <a href="#about" className="block  px-4 py-2.5 mt-5 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest" onClick={()=>toggleClick()}>About</a>
                    <a href="#contact" className="block  px-4 py-2.5  hover:bg-orange rounded transition duration-200" onClick={()=>toggleClick()}>Contact</a>

                </nav>
            
            </aside>
      </div>
     );
}
 
export default Side;