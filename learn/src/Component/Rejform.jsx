import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@mui/material";

function Regform() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail]       = useState("")
    const [message,setMessage]   = useState("")


    function handleSubmit(e){
        e.preventDefault()
        
        
  
        const formData = {username,password,email}
        console.log(formData)

        fetch("/api/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        }).then((res)=>{
           return res.json()


        }).then((data)=>{
            if(data.status==201){
                toast.success("Successfully Register😍...")
                setMessage(data.message)
               

            }else{
                toast.error("UserName is Already taken😳...")
                setMessage(data.message)
            }

        })

       
        
        
    }






    return ( 
        <>
        
        <div className="container" id="Reg">
       
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <b><p className="text-center text-success">{message}</p></b>
            <form action="" onSubmit={handleSubmit} >
            <label className="label2">UserName</label>
            <input type="text" className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}} required />
            <label className="label2">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
            <label className="label2">Email</label>
            <input type="email"  className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
             <Button type="submit" color="error" variant="contained" className="form-control mt-3">Register</Button>
            <Link to={"/login"}><Button type="submit" color="info" variant="contained" className="form-control mt-3" >Login</Button></Link> 



            </form>


            </div>
            <div className="col-md-4"></div>
        </div>
        </div>
        
        
        </>
     );
}

export default Regform;