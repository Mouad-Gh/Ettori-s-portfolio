import { useEffect, useState } from "react";
import Bar from "./component/Bar";
import NavBar from "./component/NavBar";
import Side from "./component/SideBar/Side";
import StyleCard from "./component/StyleCard";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Style from "./component/Style";


//#0daaaa
function App() {


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
        if(size.width>768 && menuOpen ){
            setMenuOpen(false);
        }
        
    }, [size.width,menuOpen])

    const toggleClick = () => {
        setMenuOpen(!menuOpen);
    }
    //-translate-x-full
//scoot this in 
//<video className="min-h-screen object-cover w-screen" src="images/website_logo&intro.mp4" autoPlay loop muted></video>
  return (
    
      <main className="bg-noir w-full min-h-screen flex-row text-white font-azonix h-full ">
        <NavBar toggleClick={toggleClick} menuOpen={menuOpen}  />
        <div className="">
        
          <Side menuOpen={menuOpen}  />
          <div className="flex-1 mt-20  ">
            
             
            <video className="sticky top-20 right-0  z-0 min-h-screen md:h-auto object-cover sm:object-fill w-screen" src="images/LOGO_ANIMATION.mp4" autoPlay loop muted></video>
              
            <div className="sticky bg-gradient-to-b from-bleu to-noir h-screen top-20  ">
              <StyleCard name={"Illustration"} />
                
            </div>
            {/*<video className="sticky top-20 bg-black h-screen " src="images/website_logo&intro.mp4" autoPlay loop muted></video>*/}
            <div className="sticky top-40 h-screen flex justify-around flex-wrap ">
              <video className="w-1/3 cursor-pen hover:shadow-lg hover:scale-[99%] " src="images/dizzy dros VA.mp4" autoPlay loop muted></video>
              <video className="w-1/3 cursor-pen hover:shadow-lg hover:scale-[99%] " src="images/asmae VA.mp4" autoPlay loop muted></video>
              
              <video className="w-1/3 cursor-pen hover:shadow-lg hover:scale-[99%] " src="images/small x VA.mp4" autoPlay loop muted></video>
              
            </div>
            
          </div>
          
          <Style />
        </div>
      </main>
    
  );
}

export default App;

/**
 * <Router >

      <div className=" bg-noir w-full min-h-screen flex justify-start ">
        
        <SideBar menuOpen={menuOpen}  />
        <div className="flex-1 ">
          <NavBar toggleClick={toggleClick} menuOpen={menuOpen}  />
          
          <h1 className=" font-dalek p-4 ">Ettori Othman</h1>
          <h1 className="font-pinpoint px-4 ">Ettori Othman</h1>
          <StyleCard name={"Illustration"} />
        </div>
        
      </div>
    </Router>

    <Router >

      <div className=" bg-noir w-full min-h-screen flex justify-start ">
        
        <SideBar menuOpen={menuOpen}  />
        <div className="flex-1 ">
          <NavBar toggleClick={toggleClick} menuOpen={menuOpen}  />
          
          <h1 className=" font-dalek p-4 ">Ettori Othman</h1>
          <h1 className="font-pinpoint px-4 ">Ettori Othman</h1>
          <StyleCard name={"Illustration"} />
            <StyleCard name={"Retro"} />
            <StyleCard name={"PixelArt"} />
            <StyleCard name={"Painting"} />
        </div>
        
      </div>
    </Router>
 */

    /**
     * <h1 className=" font-dalek p-4 ">Ettori Othman</h1>
              <h1 className="font-pinpoint px-4 ">Ettori Othman</h1>
              <div className="flex justify-around">
                <h1 className="font-pinpoint px-4 ">Hey, i'm Ettori Othman :)</h1>
                <video className="h-20 w-100 mr-10" src="images/ex.mp4" autoPlay loop muted></video>
              </div>
     */