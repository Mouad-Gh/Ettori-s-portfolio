

import NavBar from "./component/NavBar";
import Accueil from "./containers/Acceuil";



//#0daaaa
function App() {


  
    //-translate-x-full
//scoot this in 
//<video className="min-h-screen object-cover w-screen" src="images/website_logo&intro.mp4" autoPlay loop muted></video>
  return (
    
      <main className="bg-noir w-full min-h-screen flex-row text-white font-azonix h-full scroll-smooth ">
        <NavBar  />
        
        <div className="relative top-[70px]">
        
          
          <Accueil />
          
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