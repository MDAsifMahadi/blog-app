// router
import axios from "axios";
import { useEffect } from "react";
import Router from "./Router";
import URL from "./utilities/config";
const App = () => {

  useEffect(()=> {
    axios.post(URL+"/api/track")
  }, [])

  return <Router />
}
 
export default App
