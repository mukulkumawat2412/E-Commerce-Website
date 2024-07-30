const express = require("express")
const app = express()

const frontendRouter = require("./routes/frontend")

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/merndb")
 

app.use(express.static("public"))
app.use(express.json())
app.use("/api",frontendRouter) 
app.listen(5000,()=>{ 
    

    console.log("server is Running on Port :5000 ")


})