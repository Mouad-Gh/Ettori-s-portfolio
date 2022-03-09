import ImageGallery from "../component/ImageGallery";
import Style from "../component/Style";

const Accueil = () => {
    return ( <>
        <video className="sticky top-20 right-0  z-0 min-h-screen md:h-auto object-cover sm:object-fill w-screen" src="images/LOGO_ANIMATION.mp4" autoPlay loop muted></video>
        <div className="flex-1 mt-20 sticky bg-noir ">
            <video className="bg-blue w-screen " src="images/comp_1.mp4" autoPlay loop muted></video>
            <Style />
            <ImageGallery />
        </div>
    </> );
}
 
export default Accueil;