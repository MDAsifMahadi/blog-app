import { Link, NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Menu = ({lestCategorys}) => {


  return (
    <Link className="more menu__btn">
      আরো
      <svg className="down__arrow" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m11.808 14.77l-3.715-4.458A.8.8 0 0 1 8.708 9h6.584a.8.8 0 0 1 .614 1.312l-3.714 4.458a.25.25 0 0 1-.384 0"/></svg>



      <ul className="menu">
        {lestCategorys.map((category, i) => {
          const {bangla, english} = category;

          return <NavLink className="li" 
                    key={Math.random()} 
                    to={`/${english}`}> {bangla}
                  </NavLink>
        })}
      </ul>
    </Link>
  )
}

export default Menu;
