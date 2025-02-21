const mongoose = require("mongoose")
const dotenv  = require("dotenv")

dotenv.config()





const dbConnect = async()=>{

    try {

       await mongoose.connect(process.env.MONGO_URI)
       
            console.log("connection is successful")

    } catch (error) {

        console.log(error)
    }

}


export default dbConnect;