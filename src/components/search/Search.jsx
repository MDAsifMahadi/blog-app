import { useState } from "react";

// my componnects
import CategoryName from "../categoryName/CategoryName";

// CSS style
import "./style.search.css";

// icons 

const Search = () => {
    // search value
    const [searchValue, setSearchValue] = useState("");

    // search controler function
    const handleChange = e => {
        setSearchValue(e.target.value);
    }

  return (
    <div className="search__div">
      <CategoryName cName="Search" />

      <form className="search__form">
        <input className="search__input" type="text" value={searchValue} onChange={handleChange} placeholder="Search a content"/>
      </form>
    </div>
  )
}

export default Search;
