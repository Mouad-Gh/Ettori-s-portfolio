//sfc

const StyleCard = ({name}) => {
    return ( 
        <fieldset className="m-5 border border-orange p-2 text-white ">
            <legend className=" mx-2 px-2 ">{name}</legend>
            <img className="w-120 h-96 object-cover rounded-lg shadow-lg" src='images/Digital_art/aghoucht.jpg' alt="art" />
        </fieldset>
     );
}
 
export default StyleCard;