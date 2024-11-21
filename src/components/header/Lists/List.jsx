import { NavLink } from "react-router-dom";

const List = ({item}) => {
    
  return (
    <NavLink className="categary">
      {item}
    </NavLink>
  )
}

export default List;
