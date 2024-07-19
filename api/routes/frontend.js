const router = require("express").Router()
 const Regc = require("../controllers/RegController")
 const Proc = require("../controllers/ProductController")
 const multer = require("multer")


const Storage = multer.diskStorage({
    destination:(req,file, cb)=>{
       cb(null,"./public/upload");

    },


    filename: function (req,file,cb){
        cb(null, Date.now()+file.originalname);
    }



})


    let upload =    multer({
        storage:Storage,
        limits:{
            fileSize:1024*1024*4

        }

    })














 router.post("/register",Regc.Register)
 router.post("/Login", Regc.Login)
 router.post("/productInsertform",upload.single("pimg"),Proc.productInsertData)
    router.get("/productData",Proc.adminproductData)
    router.delete("/productDeleteData/:id",Proc.DeleteproductData) 




















module.exports = router


