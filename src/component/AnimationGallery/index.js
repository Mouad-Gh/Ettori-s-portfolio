const AnimationGallery = () => {

    const animations=[
        
        {
            index:1,
            src: "images/ANIMATION/snor 1.mp4",
            divClass:'relative ',
            imgClass:'h-full w-full object-cover object-center',
            title: "chmcreations's contest",
            style : "Illustration"
        },
        {
            index:2,
            src: "images/ANIMATION/snor 2.mp4",
            divClass:'relative ',
            imgClass:'h-full w-full object-cover object-center',
            title: "chmcreations's contest",
            style : "Illustration"
        },
        {
            index:3,
            src: "images/ANIMATION/snor 3.mp4",
            divClass:'relative ',
            imgClass:'h-full w-full object-cover object-center',
            title: "chmcreations's contest",
            style : "Illustration"
        },
        {
            index:4,
            src: "images/ANIMATION/animation scene 1.mp4",
            divClass:'relative  col-span-1 row-span-1 md:row-span-2 ',
            imgClass:'h-full w-full object-cover object-center',
            title: "chmcreations's contest",
            style : "Illustration"
        },
        {
            index:5,
            src: "images/ANIMATION/vintage room.mp4",
            divClass:'relative col-span-2 ',
            imgClass:'h-full w-full object-cover object-center',
            title: "chmcreations's contest",
            style : "Illustration"
        },
        {
            index:6,
            src: "images/ANIMATION/boat.mp4",
            divClass:'relative col-span-2 ',
            imgClass:'h-full w-full object-cover object-center',
            title: "chmcreations's contest",
            style : "Illustration"
        },
        
    ]

    return ( 
        <div className="relative my-[10px]">
            <div id="graphic_design"  className="overflow-hidden mb-[10px]">
                <div className="h-0 relative  pb-6 w-0 pr-[2500px]   ">
                    <img   alt=""  src="images/ANIMATION/ANIMATION-BAR.png" width="2500" height="28" className="absolute left-0 top-0 animate-move h-full max-h-full max-w-full w-full  " />
                
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 md:gap-[10px] auto-rows-[500px]">

    {
                    animations.map((item,index)=>{
                        return (
                            <div key={index} className={item.divClass} >
                                
                                <video className="w-full h-full object-cover object-center" src={item.src} autoPlay loop></video>
                                
                            </div>
                        );
                    })
                }
            </div>

    </div> );
}
 
export default AnimationGallery;