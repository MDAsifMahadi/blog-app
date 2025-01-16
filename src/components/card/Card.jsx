import PropTypes from 'prop-types';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFeatherPointed } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import "./style.card.css";




const Card = ({ writer = "", cardData = {}, date, id}) => {
  
  const navigae = useNavigate()
  const {header, pera} = cardData
 const formatMongoDateToBangla = (mongoDate) => {
    const date = new Date(mongoDate);
  
    // Intl.DateTimeFormat ব্যবহার করে বাংলায় ফরম্যাট করা
    const formattedDate = new Intl.DateTimeFormat("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  
    return formattedDate;
  }
  
  const mainDate = formatMongoDateToBangla(date); 

  return (
    <article className='card post' onClick={()=>navigae(`/blog/${id}`)}>
     <div className='card__header'>
      <h2 className="title">{header}</h2>
   
        <p className="writer__name">
          <FaFeatherPointed className="feather" />{writer}
        </p>
     </div>

      <div 
        dangerouslySetInnerHTML={{__html : pera}} className='pera' 
      />

      <p 
        className="date">
          <FaRegCalendarAlt 
            className="calendar" 
          />
        {mainDate}
      </p>
    </article>
  )
}
Card.propTypes = {
  title: PropTypes.string,
  writer: PropTypes.string,
  cardData: PropTypes.object,
  isPublic: PropTypes.bool,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
