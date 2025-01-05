import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SideBarList = ({routeName, myCategory}) => {
    
  return (
    <NavLink className="sidebar__link" to={`/${routeName === "/" ? "" : routeName}`}>
      {myCategory[routeName === "/" ? "main" : routeName]}
    </NavLink>

    
  )
}

export default SideBarList;
