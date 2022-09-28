import './App.css';

import Navbar from "./components/Navbar/navbar"
import Footers from "./components/footer/footer"
  


function App() {
  
  const style={
    boxSizing:"borderBox",
    margin:"0px",
    padding:"0px"
  }
  
    return (
      <div className="App" style={style}>
         <Navbar  />
         <Footers />
      </div>
    );
}


export default App;
