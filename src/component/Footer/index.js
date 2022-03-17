

const Footer = () => {
    return ( <footer id="contact" className=" mt-10 flex flex-col items-center leading-8   p-2 ">


      
      <div className="flex flex-col pb-8 ">
        <p className=" text-center leading-normal pb-2">Get in touch via email on <a href="mailto:Othmaneettori@gmail.com" className="underline text-orange hover:text-bleu">Othmaneettori@gmail.com</a> 
        <br/>or find me on social media as <a href="https://www.instagram.com/othmaneettori/" className="underline text-orange hover:text-bleu" target="_blank" rel='noreferrer'>@Othmaneettori</a> </p>
        <div className="inline-flex self-center ">
          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/othmane-ettori-624930210/">
            <span className="inline-flex items-center p-2  cursor-pointer rounded-full h-full mx-0.5 md:mx-1.5  text-xl hover:bg-white">
              <img src="images/icons/IN.png" alt="" className="h-5 w-5" />
            </span>
          </a>
          <a target="_blank" rel='noreferrer' href="https://www.instagram.com/othmaneettori/">
            <span className="inline-flex items-center p-2 cursor-pointer rounded-full h-full mx-0.5 md:mx-1.5 text-xl hover:bg-white">
              <img src="images/icons/Insta.png" alt="" className="h-5 w-5" />
            </span>
          </a>
          <a target="_blank" rel='noreferrer' href="https://www.behance.net/othmaneettori/projects">
            <span className="inline-flex items-center p-2 cursor-pointer rounded-full h-full mx-0.5 md:mx-1.5 text-xl hover:bg-white">
              <img src="images/icons/Be.png" alt="binance" className="h-5" />
            </span>
          </a>
          <a target="_blank" rel='noreferrer' href="https://www.fiverr.com/ettori?up_rollout=true">
            <span className="inline-flex items-center p-2 cursor-pointer rounded-full h-full mx-0.5 md:mx-1.5 text-xl hover:bg-white">
              <img src="images/icons/fi.png" alt="" className="h-5 w-5" />
            </span>
          </a>
        </div>
        
      </div>
      <span className="text-center">© 2022 Appy. All rights reserved.</span>
      <span className="text-center">Created by <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/mouad-ghouichat-9b480a197/" className="underline text-orange hover:text-bleu" >Ghouichat Mouad</a></span>


    </footer> );
}
 
export default Footer;