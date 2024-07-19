import { Link, useNavigate, useParams,  } from "react-router-dom";
import Left from "./Left";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import toast from "react-hot-toast";


function Dashboard() {

   const [product,setProduct] = useState([])
   const [message,setMessage] = useState("")



    const nevigate =   useNavigate()
    

    useEffect(()=>{
        fetch("/api/productData").then((res)=>{
            return res.json()
        
           }).then((data)=>{
          
            console.log(data)
            if(data.status===200){
                setProduct(data.apiData)
        
            }else{
                setMessage(data.message)
            }
        
           })
        

    },[])


        function handleDelete(e,id){
            fetch(`/api/productDeleteData/${id}`,{
                method:"DELETE"
        
            }).then((res)=>{
               return res.json()
    
            }).then((data)=>{
                if(data.status===201){
                    toast.success("Successfully Deleted")
                    setMessage(data.message)
                    nevigate("/dashboard")
    
                }
    
            })
        
        

        }
    
        




   







    return ( 
        <>
        <h1>Dashboard</h1>
        
            <div className="container">
                <div className="row">
                   <Left/>
                   <div className="col-md-3">
                  
                   </div>
                    <div className="col-md-9">
                        <table className="table table-dark table-striped mt-3">
                            <thead>

                            
                            <tr>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Product Amount</th>
                                <th>Product Quantity</th>
                                <th>Product Status</th>
                                <th>Product Delete</th>
                                <th>Product Update</th>
                                
                               
                            </tr>
                            </thead>

                            
            {
                product.map((item)=>(
                <tbody>
                <tr className="border-2 ">
                    <td><img src={`upload/${item.PImage}`} alt="img" id="myimg"/></td>
                    <td>{item.PName}</td>
                    <td>{item.PDesc}</td>
                    <td>{item.PAmount}</td>
                    <td>{item.PQty}</td>
                    <td>{item.PStatus}</td>
                    <td><Link to={`/productdelete/${item._id}`}><Button color="error" startIcon={<DeleteIcon/>} onClick={(e)=>{handleDelete(e,item._id)}} >Delete</Button></Link></td>
                    <td><Link to={`/productupdate/${item._id}`}><Button color="primary" startIcon={<UpdateIcon/>}>Update</Button></Link></td>

        
              
                
                </tr>
                 </tbody>
            ))
         }

                            





                        </table>
                    </div>
                </div>
            </div>
        
        </>
     );
}

export default Dashboard;