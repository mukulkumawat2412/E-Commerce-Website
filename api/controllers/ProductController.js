
const productC = require("../models/Product")


exports.productInsertData = (req,res)=>{

    const {pname,pdesc,pamount,pquantity,pstatus } = req.body

    const filename = req.file.filename;
    try{
        

      const record =  new productC({
        
        PName :pname,
        PDesc :pdesc,
        PAmount:pamount,
        PQty:pquantity,
        PStatus:pstatus,
        PImage:filename,


       
})
  

   record.save()
 
    
    res.json({
        status:201,
        apiData:record,
        message:"Product successfully Added."
    })

    }catch(error){
        res.json({
            status:400,
            message:error.message
        })

    }


}



exports.adminproductData = async(req,res)=>{
  

    try{
  const record =  await productC.find()
  
  

    res.json({
      status:200,
      apiData:record,
      message:"Succesful Data"
    })

  }catch(error){
    res.json({
      status:400,
      message:error.message
    })


  }




}


exports.DeleteproductData = async(req,res)=>{
  
 const id = req.params.id

 try{

  
    await productC.findByIdAndDelete(id)
  

 res.json({
  status:201,
  message:"Successfully Deleted"

 })
}catch(error){
  res.json({
    status:400,
    message:""
  })


}

}


exports.updateformdata = async(req,res)=>{
  const id = req.params.productId 

try{
 const record = await productC.findById(id)
 res.json({
  status:200,
  apiData:record
 })

}catch(error){
  res.json({
    status:400,
    message:error.message
  })

}



} 



exports.updateProductData = async(req,res)=>{
   const id = req.params.id
   
   const {pname,pdesc,pamount,pquantity,pstatus} = req.body
  //  console.log(req.file)

    const filename = req.file.filename

    
   try{
    if(req.file){
    await productC.findByIdAndUpdate(id,{

    PName :pname,
    PDesc :pdesc,
    PAmount:pamount,
    PQty:pquantity,
    PStatus:pstatus,
    PImage:filename,
  

   })
  }else{

    await productC.findByIdAndUpdate(id,{

      PName :pname,
      PDesc :pdesc,
      PAmount:pamount,
      PQty:pquantity,
      PStatus:pstatus,
      
    
  
     })

  }



    

  res.json({
    status:200,
    message:"successfully Update",

  })

  }catch(error){
    res.json({
      status:400,
      message:error.message
    })

  }
 

}



exports.usershowProduct = async(req,res)=>{
  try{
    const record = await productC.find()
    res.json({
      status:200,
      apiData:record,
      message:"Represent Successfully"
    })



  }catch(error){
    res.json({
      status:400,
      message:error.message
    })

  }

}




