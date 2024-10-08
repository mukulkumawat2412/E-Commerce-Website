import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextapi } from "../Contextapi";
import { toast, Toaster} from "sonner";
import { Button } from "@mui/material";
import {CircularProgress} from "@mui/material"




function Loginform() {

    
      


    const {setloginName} = useContext(contextapi)

    const nevigate = useNavigate()

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail]       = useState("")
    const [message,setMessage]   = useState("")

 
  
    function handleSubmit(e){

            
        e.preventDefault()
       const formdata =  {username,password,email}

       

       fetch("/api/Login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formdata)
       }).then((res)=>{
        return res.json()

       }).then((data)=>{
        console.log(data)

        if(data.status===200){
           

            localStorage.setItem("loginName",data.apiData.userName)
            setloginName(localStorage.getItem("loginName"))
            if(data.apiData.userName==="admin"){
                <CircularProgress style={{color:"orangered"}}/>
              toast.success("Successfully Admin Login...😍 ")
                
                //  nevigate("/dashboard")

      
            }else{
                toast.success(`${username} Successfully Login😍...`)
                // nevigate("/product")

            }



            setMessage(`${username} Successfully Login...`)
        }else{
            toast.error("Oops something went wrong...")
            // setMessage(data.message)
        }

       })
       
        
        
    }

    return ( 
        <>

            



        <Toaster position="top-center" duration={"1500"} richColors/>
        <div className="container" id="login">

<div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4">
        <b><p className="text-center text-warning">{`${message }`}</p></b>
    <form action="" onSubmit={handleSubmit} >
    <label className="label1">UserName</label>
    <input type="text" className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}} required />
    <label className="label1">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
    <label className="label1">Email</label>
    <input type="email"  className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
   <Button type="submit" color="success" variant="contained" className="form-control mt-3">Login</Button>
   
   <Link to={"/Register"}><Button type="submit" color="error" variant="contained" className="form-control mt-3">Register</Button></Link>     
       

    </form>
 


    </div>
    <div className="col-md-4"></div>
    <h1>hjhjhjhjh</h1>
    <h1>hjhjhjhjh</h1>
    <h1>hjhjhjhjh</h1>
    <h1>hjhjhjhjh</h1>
    <h1>hjhjhjhjh</h1>
    <h1>hjhjhjhjh</h1>
    <h1>hjhjhjhjh</h1>
    <p>lorem</p>
</div>
</div>
        
        </>
     );
}

export default Loginform;