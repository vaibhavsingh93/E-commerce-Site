const express=require("express");
const venderRoute=express.Router();
let Vender=require("./Vender.model")

//save vender details in database
venderRoute.route("/register").post(function(req,res){
   
    let vender=new Vender(req.body);
   console.log(vender);
    vender.save().then(vender=>{
        res.status(200).json({"vender":"vender added successfully"+vender});
    }).catch(err=>{
        res.status(400).send("unable to save to database");
    });
});

//Login
venderRoute.route("/login/:vuserid/:vuserpass").get(function(req,res){
    Vender.findOne({$and:[{"vuserid":req.params.vuserid},{"vuserpass":req.params.vuserpass}]})
.then(vender=>{
    console.log(vender);
    res.send(vender);
}).catch(err=>{
    res.status(400).send("Data not found.Somthing went wrong");
});
})

//get vender image
venderRoute.route("/getimage/:picname").get((req,res)=>{
    res.sendFile(
      "E:/PROGRAMS/MERN practice/React6 project/Backend/Server File/Venderimages/" +
        req.params.picname
    );
})
module.exports=venderRoute;