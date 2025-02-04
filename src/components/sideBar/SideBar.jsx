
// my components

import SideBarList from "./SideBarList";
import "./style.sidebar.css";

// icons


const SideBar = ({sidebarOpen, setSidebarOpen, myCategory}) => {

  // sidebar close when click on the outside of sidebar = -1

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "close" }`}>
      <svg onClick={()=> setSidebarOpen(!sidebarOpen)} 
      className="sidebar__icon"
      xmlns="http://www.w3.org/2000/svg" 
      width="1.5em" 
      height="1.5em" 
      viewBox="0 0 24 24">
        <path fill="currentColor" d="m7.05 5.636l4.95 4.95l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95z"/></svg>

      <div className="sidebar__box" onClick={()=> setSidebarOpen(!sidebarOpen)} >

      <SideBarList key={Math.random()} category={{english : "main", bangla : "মূলপাতা"}} />

        {
          myCategory.map((category) => {
            return <SideBarList key={Math.random()} category={category} />
          })
        }
      </div>
    </aside>
  )
}

export default SideBar;
