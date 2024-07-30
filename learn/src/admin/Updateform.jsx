import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast"


function Updateform() {

    const [pname,setPName]=useState("")
    const [pdesc,setPDesc]=useState("")
    const [pamount,setPAmount]=useState("")
    const [pquantity,setPQuantity]=useState("")
    const [pstatus,setPStatus]=useState("")
    const [pimage,setPImage]=useState("")
    const [message,setMessage]=useState("")  
    
    
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`/api/productupdateData/${id}`).then((res)=>{
           return res.json()

        }).then((data)=>{
            console.log(data)
            if(data.status==200){
                setPName(data.apiData.PName)
                setPDesc(data.apiData.PDesc)
                setPAmount(data.apiData.PAmount)
                setPQuantity(data.apiData.PQty)
                setPStatus(data.apiData.PStatus)
                setPImage(data.apiData.PImage)

            }else{
                setMessage(data.message)
            }

        })
    },[])



    function handleForm(e){
        e.preventDefault()

    let Data = new FormData()

    Data.append("pname",pname)
    Data.append("pdesc",pdesc)
    Data.append("pamount",pamount)
    Data.append("pquantity",pquantity)
    Data.append("pstatus",pstatus)
    Data.append("pimage",pimage)


    fetch(`/api/updateproductData/${id}`,{
        method:"PUT",
        body:Data
    }).then((res)=>{
       return res.json()

    }).then((data)=>{
        console.log(data)
        if(data.status==200){
            navigate("/dashboard")
            

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
            <form  onSubmit={(e)=>{handleForm(e)}}>
            <label>Product Name</label>
            <input type="text" className="form-control" value={pname} onChange={(e)=>{setPName(e.target.value)}} />
            <label>Product Description</label>
            <input type="text" className="form-control" value={pdesc} onChange={(e)=>{setPDesc(e.target.value)}} required maxLength={25} />
            <label>Product Amount </label>
            <input type="text" className="form-control" value={pamount} onChange={(e)=>{setPAmount(e.target.value)}} required />
            <label>Product Quantity</label>
            <input type="text" className="form-control" value={pquantity} onChange={(e)=>{setPQuantity(e.target.value)}} required />
            <label>Product Status</label>
            <input type="text" className="form-control" value={pstatus} onChange={(e)=>{setPStatus(e.target.value)}} required />

            {/* <select value={pstatus} className="form-select mt-3">
                <option value="Out-of-stock">Out-of-stock</option>
                <option value="In-stock">In-stock</option>
            </select> */}

            <label>Product Image</label>
            <input type="file" className="form-control"  onChange={(e)=>{setPImage(e.target.files[0])}} />
            {/* <button className="btn btn-warning form-control mt-3" type="submit">Add Product Here</button> */}
            <Button className="form-control mt-3" type="submit" variant="contained" color="success" >Update Product Here</Button>
            
            
            
            
            
            </form> 

            </div>
            <div className="col-md-4"></div>
       
        </div>
        </>
    );
}


export default Updateform;