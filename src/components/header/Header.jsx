import { useState } from "react";

// my components
import List from "./Lists/List";
// styles
import "./style.header.css";

// images & icons
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";

// icons
import { FaSearch } from "react-icons/fa";
import { LiaBarsSolid } from "react-icons/lia";
import Menu from "./Lists/Menu";


// eslint-disable-next-line react/prop-types
const Header = ({setSidebarOpen, myCategory}) => {

    const listItem = Object.keys(myCategory);

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

      <List key={Math.random()} item={"মূলপাতা"} routeName={""} index={1}/>
      
       {listItem.map((item, index) => <List key={Math.random()} item={myCategory[item]} index={index} routeName={item} />)}

        {listItem.length > 6 && <Menu routeName={listItem} myCategory={myCategory}/>}

      </nav>

     
        <NavLink to="/search" className="search__box" style={location === "/search" ? {color : "#33af7f"} : {}}>
          <FaSearch className="search__icon"/> Search
        </NavLink>
    

    </header>
  )
}

export default Header
