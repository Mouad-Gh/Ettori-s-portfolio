
import { Suspense, lazy } from "react";
import Style from '../component/Style'

const ImageGallery =lazy(()=>import('../component/ImageGallery'));
const AnimationGallery =lazy(()=>import('../component/AnimationGallery'));
const Footer =lazy(()=>import('../component/Footer'));
const About =lazy(()=>import('../component/About'));

const Accueil = () => {

    const classes ={
        h_stretch : "relative row-span-1 col-span-1 md:col-span-2 ",
        big_h_stretch : "relative row-span-1 col-span-2 md:row-span-1 md:col-span-2 lg:row-span-2 lg:col-span-3 ",
        v_stretch : "relative  col-span-1 row-span-2",
        big_stretch : "relative row-span-1 col-span-1 md:row-span-2 md:col-span-2 ",
        simple_stretch : "relative row-span-1 md:row-span-1 col-span-1 ",


    }

    const digital_art =[
        {
            index:1,
            src: "images/chmcreations.jpg",
            divClass:'relative row-span-2 md:row-span-2',
            imgClass:'h-full w-full object-cover object-center',
            title: "chmcreations's contest",
            style : "Illustration"
        },
        {
            index:2,
            src: "images/spleux.jpg",
            divClass:'relative row-span-2 md:col-span-2 col-span-1',
            imgClass:'h-full w-full object-cover object-center',
            title: "spleux",
            style : "Illustration"
        },
        {
            index:3,
            src: "images/small x.jpg",
            divClass: classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "small x",
            style : "Illustration"
        },
        {
            index:4,
            src: "images/inko.jpg",
            divClass:classes.v_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "inko",
            style : "painting"
        },
        {
            index:5,
            src: "images/asmae.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-[10%_40%]',
            title: "asmae",
            style : "Illustration"
        },
        {
            index:9,
            src: "images/box 1.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "box",
            style : "painting"
        },
        
        {
            index:7,
            src: "images/madd-x-hisoka.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "madd x hisoha",
            style : "Illustration"
        },
        {
            index:8,
            src: "images/laaura.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "laaura",
            style : "Illustration"
        },
        {
            index:6,
            src: "images/joker.jpg",
            divClass:classes.v_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "joker",
            style : "Illustration"
        },
        {
            index:10,
            src: "images/anys-x-kurapika.jpg",
            divClass:classes.v_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "anys x kurapika",
            style : "Illustration"
        },
        {
            index:16,
            src: "images/john-wick.jpg",
            divClass:classes.h_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "john wick",
            style : "Illustration"
        },
        {
            index:11,
            src: "images/final sketch.jpg",
            divClass:classes.v_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "amine",
            style : "painting"
        },
        {
            index:12,
            src: "images/dax.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "dax",
            style : "Illustration"
        },
        {
            index:13,
            src: "images/drake.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "drake",
            style : "Illustration"
        },
        {
            index:14,
            src: "images/elifvzo.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "elifzo",
            style : "Illustration"
        },
        {
            index:15,
            src: "images/oulid-x-deku.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "oualid x deku",
            style : "Illustration"
        },
        {
            index:16,
            src: "images/b&w-red.jpg",
            divClass:'relative row-span-2 md:row-span-2',
            imgClass:'h-full w-full object-cover object-center',
            title: "black & white",
            style : "Illustration"
        },
        {
            index:17,
            src: "images/EGT-x-cameleon.jpg",
            divClass:'relative row-span-2 md:col-span-2 col-span-1',
            imgClass:'h-full w-full object-cover object-center',
            title: "EGT x cameleon",
            style : "Illustration"
        },
        {
            index:18,
            src: "images/sahara 1.jpg",
            divClass: classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "sahara",
            style : "painting"
        },
        {
            index:19,
            src: "images/fitjikh-x-supersaiyen.jpg",
            divClass:classes.v_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "fitjikh x supersaiyen",
            style : "Illustration"
        },
        {
            index:20,
            src: "images/bts-fan.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-[10%_40%]',
            title: "bts fan",
            style : "Illustration"
        },
        {
            index:20,
            src: "images/soulayman.jpg",
            divClass:classes.v_stretch,
            imgClass:'h-full w-full object-cover object-[40%_40%]',
            title: "soulayman",
            style : "Illustration"
        },
        {
            index:20,
            src: "images/me.jpg",
            divClass:classes.big_stretch,
            imgClass:'h-full w-full object-cover object-bottom',
            title: "portrait",
            style : "Illustration"
        },
        {
            index:20,
            src: "images/pixel.jpg",
            divClass:classes.big_stretch,
            imgClass:'h-full w-full object-cover object-bottom',
            title: "pixels",
            style : "pixel art"
        },
        
        
    ];
    const graphic_design = [
        {
            index:1,
            src: "images/GRAPHIC DESIGN/grandfather clock story.png",
            divClass:'relative row-span-2 md:row-span-2',
            imgClass:'h-full w-full object-cover object-center',
            title: "grandfather clock",
            style : "Illustration"
        },
        {
            index:2,
            src: "images/GRAPHIC DESIGN/floki-logo.jpg",
            divClass:'relative row-span-1 col-span-1',
            imgClass:'h-full w-full object-cover object-center',
            title: "floki",
            style : "Logo"
        },
        {
            index:3,
            src: "images/GRAPHIC DESIGN/Disfigured.jpg",
            divClass: classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "Disfigured",
            style : "Cover"
        },
        {
            index:4,
            src: "images/GRAPHIC DESIGN/ronnie osullivan poster.png",
            divClass:classes.v_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "ronnie osullivan",
            style : "Poster"
        },
        {
            index:5,
            src: "images/GRAPHIC DESIGN/artisanate.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "Artisanat",
            style : "Logo"
        },
        {
            index:9,
            src: "images/GRAPHIC DESIGN/M&N.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "m&n diamant",
            style : "Logo"
        },
        
        {
            index:7,
            src: "images/GRAPHIC DESIGN/son of floki.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "son of floki",
            style : "Logo"
        },
        {
            index:8,
            src: "images/GRAPHIC DESIGN/miss-doge.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "miss doge",
            style : "Logo"
        },
        {
            index:6,
            src: "images/GRAPHIC DESIGN/KALI-KALI-graffiti.jpg",
            divClass:classes.h_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "Kali kali",
            style : "graffiti"
        },
        {
            index:3,
            src: "images/GRAPHIC DESIGN/tocard 2.jpg",
            divClass: classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "tocard",
            style : "cover"
        },
        {
            index:16,
            src: "images/GRAPHIC DESIGN/K.C.F-cover.jpg",
            divClass:classes.h_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "K.C.F",
            style : "Cover"
        },
        {
            index:11,
            src: "images/GRAPHIC DESIGN/poseidon logo.jpg",
            divClass:classes.v_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "poseiden life",
            style : "Logo"
        },
        {
            index:12,
            src: "images/GRAPHIC DESIGN/PVES.png",
            divClass:classes.h_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "PVES",
            style : "Thumpnail"
        },
        {
            index:13,
            src: "images/GRAPHIC DESIGN/son-of-floki.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "son of floki",
            style : "Logo"
        },
        {
            index:3,
            src: "images/GRAPHIC DESIGN/cute-santa.jpg",
            divClass: classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "cute santa",
            style : "Logo"
        },
        {
            index:15,
            src: "images/GRAPHIC DESIGN/alien-santa.jpg",
            divClass:classes.simple_stretch,
            imgClass:'h-full w-full object-cover object-center',
            title: "alien santa",
            style : "Logo"
        },
        {
            index:16,
            src: "images/GRAPHIC DESIGN/santa-alien.jpg",
            divClass:'relative ',
            imgClass:'h-full w-full object-cover object-center',
            title: "santa alien",
            style : "Logo"
        },
        {
            index:17,
            src: "images/GRAPHIC DESIGN/clean-men.jpg",
            divClass:'relative row-span-1 col-span-2 ',
            imgClass:'h-full w-full object-cover object-bottom',
            title: "clean man",
            style : "Packaging"
        },
        
    ]

    //sticky top-20 right-0  z-0 min-h-screen md:h-auto object-cover sm:object-fill w-screen
    return ( 
    <>
        <video className="sticky top-[70px] right-0  object-cover  w-screen" src="images/LOGO_ANIMATION.mp4" autoPlay loop muted></video>
        <video className="bg-blue w-screen sticky top-[70px]" src="images/comp_1.mp4" autoPlay loop muted></video>
        <div className="flex-1 sticky bg-noir ">
        <Style />
         <Suspense fallback={<div>LOADING...</div>}>
            
            <ImageGallery images={digital_art} />
            <div className="relative my-[10px]">
                <div id="graphic_design"  className="overflow-hidden mb-[10px]">
                    <div className="h-0 relative  pb-6 w-0 pr-[2500px]   ">
                        <img   alt=""  src="images/GRAPHIC-DESIGN-BAR.png" width="2500" height="28" className="absolute left-0 top-0 animate-move h-full max-h-full max-w-full w-full  " />
                       
                    </div>
                </div>
                <ImageGallery images={graphic_design} />

            </div>
            <AnimationGallery />
            <About />
            <Footer />
         </Suspense>
        </div>
    </> );
}
 
export default Accueil;