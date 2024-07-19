const mongoose = require("mongoose")


const RegSchema = mongoose.Schema({
    userName: {type:String},
    Password: {type:String, require:true},
    Email: {type:String}
    
})
 


module.exports = mongoose.model("Reg",RegSchema)