import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFeatherPointed } from "react-icons/fa6";
import image from "../../assets/img.jpg";
import "./style.card.css";

const CardM = () => {
  return (
    <article className='card'>
      <h2 className="title">Hello I am asif</h2>
      <img className="card__image" src={image} alt="Image" />

      <p className="writer__name"> 
        <FaFeatherPointed className="feather" /> writer name</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni esse ab rem voluptas odit, ea labore quam at quo </p>
      <p className="date"><FaRegCalendarAlt className="calendar" />Date</p>
    </article>
  )
}

export default CardM;
