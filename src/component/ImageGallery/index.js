import { useState } from "react";
import { XIcon } from "@heroicons/react/solid";

const ImageGallery = () => {

    const classes ={
        h_stretch : "relative row-span-1 col-span-1 md:col-span-2 ",
        big_h_stretch : "relative row-span-1 col-span-1 md:row-span-2 md:col-span-3 ",
        v_stretch : "relative  col-span-1 row-span-2",
        big_stretch : "relative row-span-1 col-span-1 md:row-span-2 md:col-span-2 ",
        simple_stretch : "relative row-span-2 md:row-span-1 col-span-1 ",


    }

    const images =[
        {
            index:1,
            src: "images/anys-x-kurapika.jpg",
            divClass:'relative row-span-3'
        },
        {
            index:2,
            src: "images/oulid-x-deku.jpg",
            divClass:'relative row-span-2 md:col-span-2 col-span-1'
        },
        {
            index:3,
            src: "images/fitjikh-x-supersaiyen.jpg",
            divClass: classes.simple_stretch
        },
        {
            index:4,
            src: "images/b&w-red.jpg",
            divClass:classes.v_stretch
        },
        {
            index:5,
            src: "images/inko.jpg",
            divClass:classes.simple_stretch
        },
        {
            index:9,
            src: "images/alice-thorpe.jpg",
            divClass:classes.simple_stretch
        },
        
        {
            index:7,
            src: "images/madd-x-hisoka.jpg",
            divClass:classes.simple_stretch
        },
        {
            index:8,
            src: "images/laaura.jpg",
            divClass:classes.simple_stretch
        },
        {
            index:6,
            src: "images/joker.jpg",
            divClass:classes.v_stretch
        },
        {
            index:10,
            src: "images/soulayman.jpg",
            divClass:classes.v_stretch
        },
        {
            index:16,
            src: "images/john-wick.jpg",
            divClass:classes.big_h_stretch
        },
        {
            index:11,
            src: "images/commando.jpg",
            divClass:classes.v_stretch
        },
        {
            index:12,
            src: "images/dax.jpg",
            divClass:classes.simple_stretch
        },
        {
            index:13,
            src: "images/drake.jpg",
            divClass:classes.simple_stretch
        },
        {
            index:14,
            src: "images/elifvzo.jpg",
            divClass:classes.simple_stretch
        },
        {
            index:15,
            src: "images/imad.jpg",
            divClass:classes.simple_stretch
        },
        
    ]

    

    const [model, setModel] = useState(false);
    const [imgSrc, setImgSrc] = useState('')

    //
    const getImg = (src) =>{
        setImgSrc(src);
        setModel(true);
    }


    return ( 
    <>  
        <div className={`fixed top-20 popHeight w-full inset-0 flex items-center justify-center bg-noir z-50 transition[opacity] transition[visibility]  ease-in-out delay-[5s] ${model ? "block opacity-100 scale-100" : "hidden opacity-0 scale-0" }`}>
            <img src={imgSrc} alt='' className=' w-auto max-w-full h-auto max-h-full p-10 mx-0 my-auto object-center'  />
            <XIcon className="h-11 w-8 inline-block absolute right-4 top-2 hover:cursor-pointer" onClick={()=>{setModel(false)}} />

        </div>
        <div className="mx-0 my-auto grid gap-[10px] grid-cols-fit auto-rows-[250px] grid-flow-[dense] overflow-hidden">
            
            {
                images.map((item,index)=>{
                    return (
                        <div key={index} className={item.divClass} onClick={()=>getImg(item.src)}>
                            <img src={item.src}  alt="" className=" h-full w-full object-cover object-center " />
                            <div className="px-10 py-32 m-auto absolute inset-0 z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-70 hover:cursor-pointer">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {"jgjhh,n"}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {"project.title"}
                                        </h1>
                                        <p className="leading-relaxed">{"project.description"}</p>
                            </div>
                        </div>
                    );
                })
            }
            

        </div>
    </>  );
}
 
export default ImageGallery;