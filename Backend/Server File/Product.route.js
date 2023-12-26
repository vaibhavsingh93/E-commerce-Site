const express=require("express");
const productRoute=express.Router();
let Product=require("./Product.model")
const multer=require("multer")

//save product details in database
productRoute.route("/saveproduct").post(function(req,res){
    let product=new Product(req.body);
    product.save().then(product=>{
        res.status(200).json({"product":"product added successfully"+product});
    }).catch(err=>{
        res.status(400).send("unable to save to database");
    });
});

//get product
productRoute.route("/showproduct").get(function(req,res){
    Product.find()
.then(product=>{
    console.log(product);
    res.send(product);
}).catch(err=>{
    res.status(400).send("Data not found.Somthing went wrong");
});
})
//get pid
productRoute.route("/getmaxpid").get(function(req,res){
    Product.find()
.then(product=>{
    console.log(product);
    res.send(product);
}).catch(err=>{
    res.status(400).send("Data not found.Somthing went wrong");
});
})
 //save product image
const stv=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Productimages/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
})
const uploadv=multer({storage:stv});
productRoute.post("/saveproductimage", uploadv.single("file"), (req, res) => {
  res.json({});
});

//get product image
productRoute.route("/getproductimage/:picname").get((req,res)=>{
    res.sendFile(
      "E:/PROGRAMS/MERN practice/React6 project/Backend/Server File/Productimages/" +
        req.params.picname
    );
})
module.exports=productRoute;