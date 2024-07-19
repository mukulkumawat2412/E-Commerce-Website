import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"


function Productform() {


   const [pname,setpName] = useState("")
   const [pdesc,setpDesc] = useState("")
   const [pamount,setpAmount] = useState("")
   const [pquantity,setpQuantity]=useState("")
   const [pstatus,setpStatus]= useState("")
   const [pimg,setpImg]= useState("")
   const [message,setMessage]=useState("")


   const nevigate = useNavigate()


    function handleForm(e){

    
        e.preventDefault()
        

        let Data = new FormData()

        Data.append("pname",pname)
        Data.append("pdesc",pdesc)
        Data.append("pamount",pamount)
        Data.append("pquantity",pquantity)
        Data.append("pstatus",pstatus)
        Data.append("pimg",pimg)
        
        

        fetch("/api/productInsertform",{
            method:"POST",
            body:Data
        }).then((res)=>{
           return res.json()

        }).then((data)=>{

            if(data.status===201){
                toast.success("successfully Add Product..")
                nevigate("/dashboard")
                setMessage(data.message)

            }else{
                setMessage(data.message)
            }


        })




    }







    return (  
        <>
        <div id="admin">
            <div className="col-md-4"></div>
            <div className="col-md-4 mx-auto" >
            <form  onSubmit={handleForm}>
            <label>Product Name</label>
            <input type="text" className="form-control" value={pname} onChange={(e)=>{setpName(e.target.value)}} />
            <label>Product Description</label>
            <input type="text" className="form-control" value={pdesc} onChange={(e)=>{setpDesc(e.target.value)}} />
            <label>Product Amount </label>
            <input type="text" className="form-control" value={pamount} onChange={(e)=>{setpAmount(e.target.value)}} />
            <label>Product Quantity</label>
            <input type="text" className="form-control" value={pquantity} onChange={(e)=>{setpQuantity(e.target.value)}} />
            <label>Product Status</label>
            <input type="text" className="form-control" value={pstatus} onChange={(e)=>{setpStatus(e.target.value)}} />
            <label>Product Image</label>
            <input type="file" className="form-control"  onChange={(e)=>{setpImg(e.target.files[0])}} />
            {/* <button className="btn btn-warning form-control mt-3" type="submit">Add Product Here</button> */}
            <Button className="form-control mt-3" type="submit" variant="contained" color="warning" >Add Product Here</Button>
            
            
            
            
            
            </form> 

            </div>
            <div className="col-md-4"></div>
       
        </div>
        </>
    );
}

export default Productform;