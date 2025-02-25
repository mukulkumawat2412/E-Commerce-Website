const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const dotenv = require('dotenv')


dbConnect()
dotenv.config()

const _dirname = path.resolve();

app.get("*", (req,res) => {
    res.sendFile(path.resolve(_dirname, "learn", "build", "index.html"));
});

app.use(express.static(path.join(__dirname, "learn/build"))); 

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "learn/build/index.html"));
});


const frontendRouter = require("./routes/frontend")
const { default: dbConnect } = require("./db/dbConfig")






app.use(cors())
 

app.use(express.static("public"))
app.use(express.json())
app.use("/api",frontendRouter) 



app.listen(5000,()=>{ 
    

    console.log("server is Running on Port :5000 ")


})                  