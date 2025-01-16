import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const List = ({category, i}) => {
  const {bangla, english} = category;

  if (i > 6){
    return null
  }
  return (
    <NavLink className="categary" to={`/${english}`}>
      {bangla}
    </NavLink>

    
  )
}

export default List;
