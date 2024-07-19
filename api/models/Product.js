const mongoose = require("mongoose")



const productSchema = mongoose.Schema({

    PName :{type:String },
    PDesc :{type:String },
    PAmount:{type:Number},
    PQty:{type:Number},
    PStatus:{type:String},
    PImage:{type:String}

})


module.exports = mongoose.model("Products",productSchema)