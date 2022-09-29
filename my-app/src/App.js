import './App.css';

// import Navbar from "./components/Navbar/navbar"
// import Footers from "./components/footer/footer"
//   import Login from "./components/login/login"
  import Signup from "./components/login/signup"

function App() {
  
  const style={
    boxSizing:"borderBox",
    margin:"0px",
    padding:"0px"
  }
  
    return (
      <div className="App" style={style}>
         {/* <Navbar  /> */}
         {/* <Login /> */}
         <Signup/>
         {/* <Footers /> */}
      </div>
    );
}


export default App;
