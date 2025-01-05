import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// my components
import Article from "./components/ Article/ Article";
import CategoryName from "./components/categoryName/CategoryName";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Search from "./components/search/Search";
import Setting from "./components/settings/Setting";
import SideBar from "./components/sideBar/SideBar";

// all routes setup
const Router = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const myCategory = {
    islam : "ইসলাম",
    ummah : "উম্মাহ",
    bad_motobad : "বাদ-মতবাদ",
    sovvota : "সভ্যতা ও সংঘাত",
    somosamoyk : "সমসাময়িক",
    bikkhipto : "বিক্ষিপ্ত",
    prokashito : "প্রকাশিত",
    hello: "hello",
    name : "asif mahadi",
    desh : "bangladest"
  }

  let routeNames = Object.keys(myCategory);

  return (
    <div>
      <BrowserRouter>
  
        {/* routes */}
        <Routes>
          <Route path="/" element={<>

            <Header setSidebarOpen={setSidebarOpen} myCategory={myCategory}/>
            <Setting />
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} myCategory={myCategory}/> 
            <Main />
            <Footer />
          </>}/>
          <Route path="/blog" element={<>
          
            <Header setSidebarOpen={setSidebarOpen} myCategory={myCategory}/>
            <Setting />
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} myCategory={myCategory}/>

            <Article />

            <Footer />
          </>}/>

          {
            // dynamic route 
            routeNames.map((name) => {
              let cName = myCategory[name];

              return <Route key={Math.random()} path={`/${name}`} element={<>
              
              <Header setSidebarOpen={setSidebarOpen} myCategory={myCategory}/>
              <Setting />
              <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} myCategory={myCategory}/>
              
              <CategoryName cName={cName}/> 
              <Main />
              <Footer />
              </>} />
            })
          }

          <Route path="/search" element={<>
          
            <Header setSidebarOpen={setSidebarOpen} myCategory={myCategory}/>
            <Setting />
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} myCategory={myCategory}/>


            <Search />

            <Footer />
          </>}/>

          
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
