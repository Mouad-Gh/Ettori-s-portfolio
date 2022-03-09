import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Side = ({menuOpen}) => {

    const [subMenu, setsubMenu] = useState(false);

    const toggleMenu=()=>{
        setsubMenu(!subMenu);
    }
//inset-y-0
    return ( 
        <div className={`z-50 h-screen w-60 fixed inset-y-0 transform transition  left-0 duration-200 ease-in-out  ${menuOpen ? "translate-x-0" : "-translate-x-full" }`}>

            <aside className={`relative top-20 h-screen w-60 bg-gradient-to-b from-bleu to-noir text-white`}>
                
                <nav className="pt-6 text-lg">
                    {/* subMenu */}
                    <button className="block relative  px-4  hover:bg-noir active:text-orange rounded transition duration-200 -tracking-widest" onClick={toggleMenu}>Styles
                        {!subMenu &&<ChevronDownIcon className="h-8 w-5 inline-block absolute left-20" />}
                        {subMenu && <ChevronUpIcon className="h-8 w-5 inline-block absolute left-20" />}
                    </button>
                    {subMenu && <div className="ml-6 mb-20">
                        <a href="#" className="block ml-8  pr-4 py-0.5 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest">illustration</a>
                        <a href="#" className="block ml-8  pr-4 py-0.5 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest">retro</a>
                        <a href="#" className="block ml-8  pr-4 py-0.5 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest text-orange">realistique</a>
                        <a href="#" className="block ml-8  pr-4 py-0.5 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest">pixel art</a>
                        <a href="#" className="block ml-8  pr-4 py-0.5 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest">painting</a>
                        <a href="#" className="block ml-8  pr-4 py-0.5 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest">others</a>
                    </div>}

                    <a href="#" className="block  px-4 py-2.5 mt-24 hover:bg-noir hover:text-orange rounded transition duration-200 -tracking-widest">About</a>
                    <a href="#" className="block  px-4 py-2.5  hover:bg-orange rounded transition duration-200">Contact</a>

                </nav>
            
            </aside>
      </div>
     );
}
 
export default Side;