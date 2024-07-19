import { useContext } from "react";
import { Link } from "react-router-dom";
import { contextapi } from "../Contextapi";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
  




function Navbar() {

 const {loginname,setloginName} = useContext(contextapi)

 const nevigate =  useNavigate()


 function handleLogout(e){
  setloginName(localStorage.removeItem("loginName"))
  nevigate("/Register")


 }


    return (  
        <>
            <div id="navbar">
            <nav className="navbar navbar-expand-lg  ">
              
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {loginname ?
        <>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Register">Register</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="#">{loginname}</Link>
        </li>

        <li class="nav-item dropdown" id="list1">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Setting
            <SettingsIcon color="info">

          </SettingsIcon> 

          </a>
         
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="list1">
            {/* <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li> */}
            {/* <li><hr class="dropdown-divider"/></li> */}
            <Button variant="text"  onClick={(e)=>{handleLogout(e)}}>Log-out</Button>
              
              
          </ul>
          
        </li>
   
        </>  
        : 
        <></>

        }


        {/* <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li> */}
        </ul>


    
        

    </div>
  </div>
</nav>
            </div>

        
        </>
    );
}

export default Navbar;