
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar";
import Regform from "./Component/Rejform";
import Loginform from "./Component/Loginform";
import { contextapi } from "./Contextapi";
import { useEffect, useState } from "react";
import NewNavbar from "./Component/NewNavbar";
import Product from "./admin/Product";
import Dashboard from "./admin/Dashboard";
import Productform from "./admin/Productform";
import { Toaster } from "react-hot-toast";
import Updateform from "./admin/Updateform";


function App() {
  const [cart,setCart]=useState()
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))

  },[cart])
  
 const [loginname,setloginName] = useState(localStorage.getItem("loginName"))


  const myData = {
    userName:"mukul",
    age:"21"

  }




  return (
    <>
  
   



    <BrowserRouter>
    <contextapi.Provider value={{loginname,setloginName,myData, cart,setCart}}>

    
     <NewNavbar/>
     {/* <Navbar/> */}
      <Routes>
      <Route path="/Register" element={<Regform/>} />
      <Route path="/login" element={<Loginform/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/productform" element={<Productform/>}/>
      <Route path="/productupdate/:id" element={<Updateform/>}/>
      
      
      
      

      </Routes>
      <Toaster/>
      </contextapi.Provider>
     
    </BrowserRouter>

     
    
    
    
    </>
  );
}

export default App;
