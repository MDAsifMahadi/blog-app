import { NavLink } from "react-router-dom";
import "./style.createPost.css"; // css

const CreatePost = () => {
  return (
    <div className="create_page">
        <nav className="create_page_nav">
            <NavLink className="createPage_link">Add a Category</NavLink>
            <NavLink className="createPage_link">Create New Blog</NavLink>
        </nav>
    </div>
  )
}

export default CreatePost
