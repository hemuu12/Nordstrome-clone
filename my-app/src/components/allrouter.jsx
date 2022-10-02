import {Routes, Route} from "react-router-dom"

  import Login from "./login/login"
  import Signup from "./login/signup"
  import Data from "./data/mensdata"
  import Home from "./homepage/homepage"


export default function Allroute(){

return (

<Routes>
<Route path="/"        element={<Home/>} ></Route>
<Route path="/login"    element={<Login/>}></Route>
<Route path="/signup"    element={<Signup/>}></Route>
<Route path="/dataStore"    element={<Data/>}></Route>

</Routes>




);


} 