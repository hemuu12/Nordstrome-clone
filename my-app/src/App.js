import './App.css';
import Navbar from "./components/Navbar/navbar"
import Footers from "./components/footer/footer"
import Allroute from "./components/allrouter"
import Home from "./components/homepage/homepage"
function App() {
  
  const style={
    boxSizing:"borderBox",
    margin:"0px",
    padding:"0px"
  }
  
    return (
      <div className="App" style={style}>
         <Navbar  />
        {/* <Allroute/> */}<Home/>
         <Footers />
         
        
      </div>
    );
}


export default App;
