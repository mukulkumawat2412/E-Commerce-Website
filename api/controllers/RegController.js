const Reg = require("../models/Reg")
const bcrypt = require("bcrypt")




exports.Register = async(req,res)=>{
    const {username,password,email} = req.body
    const checkpass = await bcrypt.hash(password,10)
    const userCheck = await  Reg.findOne({userName:username})

   
    try {
        if(userCheck==null){
        const record =  await new Reg({
            userName:username,
            Password:checkpass,
            Email:email 
        })
            
            record.save()

        res.json({
            status:201,
            apiData: record,
            // message:"Successfully Register"

        })

        // console.log(record)



        }else{ 
            res.json({
                status:401,
                // message:"userName is already exists"
            })
        }
        
    } catch (error) {
        res.json({
            status:400,
            message:error.message
        })
        
    }
    
  
    

}




exports.Login = async(req,res)=>{
     const {username,password} = req.body

    const record = await Reg.findOne({userName:username})
 
    try{
    if(record !== null){
        const userpasscheck = await bcrypt.compare(password, record.Password )
        
        if(userpasscheck){

        
        
        res.json({
            status:200,
            apiData:record,
            message: "Successful Login..."
        })
    
    }else{
        res.json({
            status:400,
            message:"oops something went wrong.."
        })
    }

    }else{
        res.json({
            status:400,
            message:"oops something went wrong..."
        })
    }
    
    }catch(error){
        res.json({
            status:401,
            message:"wrong credientials.."
        })

    }

}




