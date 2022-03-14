import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const NavBar = ({menuOpen,toggleClick}) => {
//ChevronDownIcon
    
//-tracking-widest
    return ( 
        <header className="h-[70px] w-full top-0 left-0 bg-bleu fixed z-30 text-white flex lg:justify-evenly text-2xl lg:text-lg">
            <a href="#" ><img src="images/OE (3).png"  alt='logo' className="ml-5 lg:ml-0 h-[50px] my-[10px] fill-white " /></a>  
            
                <a href="#digital_art" className="hidden lg:block  my-6    hover:text-orange rounded transition duration-200  ">Digital art</a>
                <a href="#graphic_design" className="hidden lg:block  my-6    hover:text-orange rounded transition duration-200 mx-6">Graphic Design</a>
                <a href="#animation" className="hidden lg:block  my-6    hover:text-orange rounded transition duration-200 ">Animation</a>
            
                <a href="#about" className="hidden lg:block  my-6    hover:text-orange rounded transition duration-200 ">About</a>
                <a href="#contact" className="hidden lg:block  my-6   hover:text-orange rounded transition duration-200">Contact</a>
            
            {!menuOpen && <MenuIcon className="lg:hidden p-2 absolute right-4 top-4 z-100 w-12 h-12 text-white hover:text-orange cursor-pointer  " onClick={()=>toggleClick()}/>}
            {menuOpen && <XIcon className="lg:hidden p-2 absolute right-4 top-4 z-100 w-12 h-12 text-white hover:text-orange cursor-pointer " onClick={()=>toggleClick()}/>}
        </header>
     );
}
 
export default NavBar;


/**
 * <header className="lg:block h-20 w-full top-0 bg-bleu sticky">

            {!menuOpen && <MenuIcon className="lg:hidden p-2 absolute right-4 z-100 w-12 h-12 text-white hover:text-orange cursor-pointer  " onClick={()=>toggleClick()}/>}
            {menuOpen && <XIcon className="lg:hidden p-2 absolute right-4 z-100 w-12 h-12 text-white hover:text-orange cursor-pointer " onClick={()=>toggleClick()}/>}
        </header>
 */