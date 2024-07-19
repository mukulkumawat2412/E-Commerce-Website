
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








