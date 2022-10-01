import {Routes, Route} from "react-router-dom"

  import Login from "./login/login"
  import Signup from "./login/signup"
  import Data from "./data/mensdata"


export default function Allroute(){

return (

<Routes>
<Route path="/"    ></Route>
<Route path="/login"    element={<Login/>}></Route>
<Route path="/signup"    element={<Signup/>}></Route>
<Route path="/product"    element={<Data/>}></Route>

</Routes>




);


} 