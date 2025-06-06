import { useState } from "react";

// my components
import List from "./Lists/List";
import Menu from "./Lists/Menu";
// styles
import "./style.header.css";

// images & icons
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

// icons
import { FaSearch } from "react-icons/fa";
import { LiaBarsSolid } from "react-icons/lia";



const Header = ({setSidebarOpen, myCategory}) => {


    // this state stores is header height 120px or 90px !!
    const [small, setSmall] = useState(false);

    // header height becomes 90 px with this function !!
    window.addEventListener("scroll", () => {
      if(window.scrollY > 99) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    });

    const fastCategorys = myCategory.slice(0, 7)
    const lestCategorys = myCategory.slice(7);
    

    const location = useLocation().pathname;

  return (
    <header className="header" style={small ? {height : "80px"} : {}}>

      <div className="three__line" onClick={() => setSidebarOpen(true)}>
          <LiaBarsSolid className="three__line__icon"/>
      </div>

      <Link className="header__logo" to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <nav className="nav">

      <List key={Math.random()} category={{bangla : "মূলপাতা", english : ""}} index={1}/>
      
      {
       fastCategorys.map((categary, i) => {
        return <List 
          key={Math.random()}
          myCategory={myCategory}
          category={categary}
          i={i}
        />
       })
      }
      {
        lestCategorys.length !== 0 ? <Menu lestCategorys={lestCategorys} /> : null 
      }

      </nav>

     
        <NavLink to="/search" className="search__box" style={location === "/search" ? {color : "#33af7f"} : {}}>
          <FaSearch className="search__icon"/> Search
        </NavLink>
    

    </header>
  )
}

export default Header
