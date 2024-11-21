import { useState } from "react";

// my components
import List from "./Lists/List";

// styles
import "./style.header.css";

// images & icons
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

// icons
import { FaSearch } from "react-icons/fa";
import { LiaBarsSolid } from "react-icons/lia";


const Header = () => {

    const listItem = ["মূলপাতা", "ইসলাম", "উম্মাহ", "বাদ-মতবাদ", "সভ্যতা ও সংঘাত", "সমসাময়িক", "বিক্ষিপ্ত", "প্রকাশিত", "তালিকাসমূহ"]

    const [small, setSmall] = useState(false);

    window.addEventListener("scroll", () => {
      if(window.scrollY > 99) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    });

  return (
    <header className="header" style={small ? {height : "80px"} : {}}>

      <div className="three__line">
          <LiaBarsSolid className="three__line__icon"/>
      </div>

      <NavLink className="header__logo">
        <img src={logo} alt="Logo" />
      </NavLink>

      <nav className="nav">
        {listItem.map(item => <List key={Math.random()} item={item} />)}
      </nav>

      <NavLink className="search__box">
        <FaSearch className="search__icon"/> Search
      </NavLink>

    </header>
  )
}

export default Header
