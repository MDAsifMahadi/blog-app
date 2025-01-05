
import "./style.dashboard.css"; // style 
// components
import Sidebar_Dashbord from "./components/sidebar/Sidebar_Dashbord";
import CreatePost from "./pages/create/CreatePost";
//import Dashboard_Home from "./pages/home/Dashboard_Home";


const Dashboard = () => {
  return (
    <div className="dashbord" >
     <Sidebar_Dashbord />
     {/* <Dashboard_Home /> */}
     <CreatePost />
     
    </div>
  )
}

export default Dashboard;
