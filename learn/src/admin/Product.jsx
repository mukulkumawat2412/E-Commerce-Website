import {MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from "mdb-react-ui-kit"
import { useContext, useEffect, useState } from "react";
import { contextapi } from "../Contextapi";

function Product() {
    const[message,setMessage]= useState("")
    const[product,setProduct]=useState([])


    useEffect(()=>{
        fetch("/api/userproductData").then((res)=>{
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


   const {cart,setCart} = useContext(contextapi)


    function handleCart(e,valueid){
        // console.log(id)

        const _cart = {...cart}

        if(!_cart.item){
          _cart.item = {}
        }
      
        if(!_cart.item[valueid]){
          _cart.item[valueid] = 1
        }else{
          _cart.item[valueid] += 1
        }
      
        if(!_cart.totalItem){
          _cart.totalItem = 1
      
        }else{
          _cart.totalItem += 1
        }
      
      
        setCart(_cart)
        console.log(cart)
    
        
     
    }




    return ( 
        <>
      
        
        <div className="container">
            
            <div className="row">
            {product.map((value)=>(

           
            <div className="col-md-4 mt-3" id="usercard">
                <MDBCard id="userProductImage">
                <MDBCardImage src={`upload/${value.PImage}`} position='top' alt='...' style={{height:"300px"}} />
                <MDBCardBody>
                <MDBCardTitle>{value.PName}</MDBCardTitle>
                
                <MDBCardText>
                    <p>{value.PDesc}</p>
                    
                </MDBCardText>
                
                <MDBCardText>
                    Price :$ <b>{value.PAmount}</b>
                </MDBCardText>
                <MDBBtn  onClick={(e)=>{handleCart(e , value._id)}}>Add To Cart</MDBBtn>

                </MDBCardBody>
                </MDBCard>
                
            </div>








            ))} 
            </div>
        
        </div>
        
        
        </>
     );
}

export default Product;