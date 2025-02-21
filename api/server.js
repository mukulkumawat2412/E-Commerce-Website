const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")



const _dirname = path.resolve();

app.get("*", (req,res) => {
    res.sendFile(path.resolve(_dirname, "learn", "dist", "index.html"));
});

app.use(express.static(path.join(__dirname, "learn/dist"))); 

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "learn/dist/index.html"));
});


const frontendRouter = require("./routes/frontend")

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/merndb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  


app.use(cors())
 

app.use(express.static("public"))
app.use(express.json())
app.use("/api",frontendRouter) 



app.listen(5000,()=>{ 
    

    console.log("server is Running on Port :5000 ")


})                  