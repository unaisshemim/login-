
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import './App.css';
import Login from "./Pages/login/Login"





function App() {
  const [user,setUser]=useState(false)

  const login=(e)=>{
    
 if(e===true){
  setUser(true)
 }else{
  setUser(false)
}
  }
  return (
    <div className="App">
      {user ? <h1>signed succesfully</h1> : 
        <div>
        <Login login={login}/>
       </div>
      }
    
      </div>
  );
}

export default App;
