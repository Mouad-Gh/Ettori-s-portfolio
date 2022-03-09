import { useLayoutEffect, useRef, useState } from "react";


const Style = () => {

    const divRef = useRef(null);
    const refStyle = useRef(null);
    const reftuto = useRef(null);
    const [height, setheight] = useState(null);
    const [show, setshow] = useState(false);

    const dynamiclass =`relative w-auto h-0  ${'pb-['+height+'px]'}`


    const [percentshow, setpercentshow] = useState(0);

    useLayoutEffect(() => {
        const topPosition = (element) => element.getBoundingClientRect().top;
        const getHeight = (element) => element.offsetHeight;
        const bottomPosition = (element) => element.getBoundingClientRect().bottom;
        //div's coordinates
        const divPosition = topPosition(divRef.current);
        const divHeight = getHeight(divRef.current);
        const divBottom = bottomPosition(divRef.current);
        const imgBottom =refStyle.current.getBoundingClientRect().bottom;
        console.log("h:"+reftuto.current.getBoundingClientRect().height);
        //setheight(Math.round(reftuto.current.getBoundingClientRect().height));
        setheight(reftuto.current.offsetHeight);
        console.log("height=>"+reftuto.current.offsetHeight);
        const onScroll =()=>{
            let scrollPos = window.scrollY + window.innerHeight;
            let bottom = refStyle.current.getBoundingClientRect().bottom+window.scrollY;

            if (bottom < scrollPos) {
                // Element scrolled to
                setshow(true);
                console.log(bottom+"<"+scrollPos);
                console.log(show);
                
            }
            
        }
        window.addEventListener('scroll', onScroll);
        /*window.addEventListener('resize', ()=>{
            setheight(Math.round(reftuto.current.getBoundingClientRect().height));
        });*/
        
      return () => window.removeEventListener('scroll', onScroll);
    }, [show])

    /*useEffect(() => {
        
        setInterval(() => {
            var x=(inputRef.current.getBoundingClientRect().x<500) ? inputRef.current.getBoundingClientRect().x+10 : 0;
            inputRef.current.style.transform = "translate3d("+x+"px,0px,0px)";
            console.log(inputRef.current.getBoundingClientRect())
            
        }, 100);
        
    }, []);*/
    //overflow-hidden
    return ( 
    <div ref={divRef} className="  relative bg-contain h-auto  bg-no-repeat over mb-10 ">

        <img src="images/DIGITAL_ART_BG.png" alt="bg" className={`absolute top-0 left-0  transition duration-[5000ms] w-full  object-cover ${show ? "opacity-0" : "opacity-100" }`}/>
        
        <div id="graphic_design"  className="overflow-hidden">
            <div className="h-0 relative  pb-6 w-0 pr-[2500px]   ">
                <img   alt=""  src="images/DIGITAL_ART_BAR.png" width="2500" height="28" className="absolute left-0 top-0 animate-move h-full max-h-full max-w-full w-full  " />
            </div>
        </div>

        <div className={`flex justify-center  m-10 transition duration-[5000ms]   ${show ? "opacity-100" : "opacity-0" }`} >
            
            <div className="sticky top-[100px] w-1/3 h-full">
                <div className={``}>  
                    <img ref={refStyle} src="images/dizzy_dros.jpg" height={height} width={height+height/4}  alt="dizzy" className={`  `}  />
                    {//absolute inset-0 h-full w-auto object-fill
                    }
                </div>
            </div>
            
        
            <div className="w-2/3 ml-10">
                <img ref={reftuto} src="images/parallax_scroll_1.png" width="800" height="500" alt="tuto" className="sticky top-[100px] h-auto  " />
                <img src="images/parallax_scroll_2.png" width="800" height="500" alt="tuto" className="sticky top-[100px] h-auto " />
                <img src="images/parallax_scroll_3.png" width="800" height="500" alt="tuto" className="sticky  h-auto " />
            </div>
        </div>
        
    </div> );
}
 
export default Style;

/**
 * 
 * <img ref={refStyle} src="images/dizzy_dros.jpg" height="500" width="800" alt="dizzy" className=" m-auto  mt-0" />
 * 
 * 
 * <div className="flex justify-start h-auto max-w-screen">
        <div className="w-1/2 mx-2 sticky top-20 h-auto">
            <video className="sticky top-20 h-auto cursor-pen hover:shadow-lg hover:scale-[99%] " src="images/dizzy dros VA.mp4" autoPlay loop muted></video>
            
        </div>
        <div className="w-1/2 h-auto">
            
            <video className="sticky top-20 h-auto object-fill cursor-pen hover:shadow-lg hover:scale-[99%] " src="images/asmae VA.mp4" autoPlay loop muted></video>
            <video className="sticky top-28 h-auto cursor-pen hover:shadow-lg hover:scale-[99%] " src="images/small x VA.mp4" autoPlay loop muted></video>
            <video className=" sticky top-36 cursor-pen hover:shadow-lg hover:scale-[99%] " src="images/dizzy dros VA.mp4" autoPlay loop muted></video>
        </div>
    </div>
 */