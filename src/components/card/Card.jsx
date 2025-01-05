import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFeatherPointed } from "react-icons/fa6";
import "./style.card.css";


const Card = () => {
  return (
    <article className='card'>
      <h2 className="title">Hello I am asif</h2>
      <p className="writer__name"> 
        
      <FaFeatherPointed className="feather" /> writer name</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni esse ab rem voluptas odit, ea labore quam at quo dolores officia eius sit atque repellat nihil, sint expedita optio sunt fugiat? Nostrum laboriosam beatae vel,Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, esse alias? Rerum accusamus eligendi voluptatibus provident </p>
      <p className="date"><FaRegCalendarAlt className="calendar" />Date</p>
    </article>
  )
}

export default Card
