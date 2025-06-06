import { useEffect } from "react";
import Router from "./Router";
import API from "./utilities/API";
const App = () => {

  useEffect(()=> {
    API.post("/api/track")
  }, [])

  return <Router />
}
 
export default App
