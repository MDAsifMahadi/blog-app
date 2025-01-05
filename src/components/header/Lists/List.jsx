import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const List = ({item, index, routeName}) => {
  return (
    <NavLink className="categary" to={`/${routeName}`}>
      {index < 6 && item}
    </NavLink>

    
  )
}

export default List;
