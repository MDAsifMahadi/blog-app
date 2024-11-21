import { BrowserRouter, Route, Routes } from "react-router-dom";

// my components
import Header from "./components/header/Header";
// all routes setup
const Router = () => {
  return (
    <div>
      <BrowserRouter>

        {/* header */}
        <Header />

        {/* routes */}
        <Routes>
          <Route path="/" element={<div className="big"></div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
