import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState , useEffect } from "react";
import Side from "../SideBar/Side";



const NavBar = () => {
//ChevronDownIcon
const [activeLink, setActiveLink] = useState(null)
const [menuOpen,setMenuOpen] = useState(false);
    const [size,setSize] = useState({
        width: 777,
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
        if(size.width>1024 && menuOpen ){
            setMenuOpen(false);
        }
        
    }, [size.width,menuOpen])

    const toggleClick = () => {
        setMenuOpen(!menuOpen);
    }
    //console.log(document.getElementsByTagName('section')[0].id)
    //add the active link option
    useEffect(() => {
        
      const getActiveSection =()=>{
        const sections=document.querySelectorAll('section');
          

          //if it's before the first section
          if(sections[0].getBoundingClientRect().top-70 > 0){
              setActiveLink(null)
          }
          
          sections.forEach(section => {
              const sectionTop = section.getBoundingClientRect().top-70;
              const sectionBottom=section.getBoundingClientRect().bottom-70;

              
              if(sectionTop<=0 && sectionBottom>=0  ){
                  setActiveLink(section.getAttribute('id'));
                  console.log("***",sectionTop,sectionBottom,section.getAttribute('id'),activeLink);
                  
              }
          });
      }
      window.addEventListener('scroll',getActiveSection);
      return () => {
        window.removeEventListener('scroll',getActiveSection)
      }
    }, [activeLink])
    

//-tracking-widest
    return ( 
        <>
        <header className="h-[70px] w-full top-0 left-0 bg-bleu fixed z-30 text-white flex lg:justify-evenly text-2xl lg:text-lg">
            <a href="#" ><img src="images/OE.png"  alt='logo' className="ml-5 lg:ml-0 h-[50px] my-[10px] fill-white " /></a>  
            
                <a href="/#digital_art"   className={`hidden lg:block  py-6    hover:text-orange rounded defaut ${activeLink==="digital_art" ? "selected": ""}  `} >Digital art</a>
                <a href="#graphic_design"  className={`hidden lg:block  py-6    hover:text-orange rounded   mx-6 defaut ${activeLink==="graphic_design" ? "selected": ""}  `}>Graphic Design</a>
                <a href="#animation" className={`hidden lg:block  py-6    hover:text-orange rounded defaut ${activeLink==="animation" ? "selected": ""}  `}>Animation</a>
            
                <a href="#about" className={`hidden lg:block  py-6    hover:text-orange rounded defaut ${activeLink==="about" ? "selected": ""}  `}>About</a>
                <a href="#contact" className={`hidden lg:block  py-6   hover:text-orange rounded ${activeLink==="contact" ? "selected": ""}  `}>Contact</a>
            
            {!menuOpen && <MenuIcon className="lg:hidden p-2 absolute right-4 top-4 z-100 w-12 h-12 text-white hover:text-orange cursor-pointer  " onClick={()=>toggleClick()}/>}
            {menuOpen && <XIcon className="lg:hidden p-2 absolute right-4 top-4 z-100 w-12 h-12 text-white hover:text-orange cursor-pointer " onClick={()=>toggleClick()}/>}
        </header>
        <Side menuOpen={menuOpen} toggleClick={toggleClick}  />
        </>
     );
}
 
export default NavBar;


/**
 * <header className="lg:block h-20 w-full top-0 bg-bleu sticky">

            {!menuOpen && <MenuIcon className="lg:hidden p-2 absolute right-4 z-100 w-12 h-12 text-white hover:text-orange cursor-pointer  " onClick={()=>toggleClick()}/>}
            {menuOpen && <XIcon className="lg:hidden p-2 absolute right-4 z-100 w-12 h-12 text-white hover:text-orange cursor-pointer " onClick={()=>toggleClick()}/>}
        </header>
 */