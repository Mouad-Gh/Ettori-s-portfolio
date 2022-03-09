import Item from "./Item";
import { PRODUCTS,RESOURCES,COMPANY,SUPPORT } from "./Menus";

const Footer = () => {
    return ( <footer id="contact" className=" mt-10 flex flex-col items-center md:flex-row md:justify-around  p-2 bg-gray-900">

        <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />


    </footer> );
}
 
export default Footer;