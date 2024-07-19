
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar";
import Regform from "./Component/Rejform";
import Loginform from "./Component/Loginform";
import { contextapi } from "./Contextapi";
import { useState } from "react";
import NewNavbar from "./Component/NewNavbar";
import Product from "./admin/Product";
import Dashboard from "./admin/Dashboard";
import Productform from "./admin/Productform";
import { Toaster } from "react-hot-toast";


function App() {

 const [loginname,setloginName] = useState(localStorage.getItem("loginName"))


  return (
    <>
  
   

   
    
   
    <BrowserRouter>
    <contextapi.Provider value={{loginname,setloginName}}>

    
     <NewNavbar/>
     {/* <Navbar/> */}
      <Routes>
      <Route path="/Register" element={<Regform/>} />
      <Route path="/login" element={<Loginform/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/productform" element={<Productform/>}/>
      
      

      </Routes>
      <Toaster/>
      </contextapi.Provider>
     
    </BrowserRouter>

     
    
    
    
    </>
  );
}

export default App;
