import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SideBarList = ({category}) => {
    const {bangla, english} = category;
  return (
    <NavLink className="sidebar__link" to={`/${english === "main" ? "" : english}`}>

      {bangla}
    </NavLink>

    
  )
}

export default SideBarList;
