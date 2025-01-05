import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.jpg";
import "./style.sidebar_dashbord.css";

// icons
import { FaEdit } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { MdOutlinePostAdd, MdOutlineSettings } from "react-icons/md";



const Sidebar_Dashbord = () => {
  return (
    <aside className="admin__sidebar">
      <div className="admin__sidebar__header">
        <img src={logo} alt="logo" />
        <h3>Dashboard</h3>
      </div>
        <Link className="admin__links" to="/admin">
            <FiHome className="admin_sidebar_icon"/> Home
        </Link>
        <Link className="admin__links" to="/admin/create" > 
            <MdOutlinePostAdd className="admin_sidebar_icon" /> Create Post
        </Link>
        <Link className="admin__links" to="/admin/edit" >
            <FaEdit className="admin_sidebar_icon" /> Edit Posts
        </Link>
        <Link className="admin__links" to="/admin/setting" > 
            <MdOutlineSettings className="admin_sidebar_icon" /> Settings
        </Link>
     </aside>
  )
}

export default Sidebar_Dashbord
