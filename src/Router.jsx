import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// my components

import Article from "./components/ Article/ Article";
import CategoryName from "./components/categoryName/CategoryName";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import OtherPage from "./components/other/OtherPage";
import Search from "./components/search/Search";
import Setting from "./components/settings/Setting";
import SideBar from "./components/sideBar/SideBar";
import API from "./utilities/API";

// all routes setup
const Router = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    API.get(`/categorie`)
      .then(res => {
        setCategory(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div>
      <BrowserRouter>
      <Header setSidebarOpen={setSidebarOpen} myCategory={categorys} />

      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} myCategory={categorys} />
        {/* routes */}
        <Routes>
          <Route path="/" element={<><Setting /><Main /></>} />
          
          {
            // dynamic routes and paths
            categorys.map(category => {
              const {english, bangla} = category;
              return <Route
                      key={Math.random().toString()}
                      path={`/${english}`} 
                      element={<><Setting /><CategoryName cName={bangla} /><OtherPage category={category}/></>}
                    />
            })
          }

          <Route path="/search" element={<><Setting /><Search /></>}/>

          <Route path="/blog/:id" element={<><Setting /><Article /></>}/>
  
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Router
