const express=require("express");
const customerRoute=express.Router();
let Customer=require("./Customer.model")

//save customer details in database
customerRoute.route("/register").post(function(req,res){
    let cust=new Customer(req.body);
    cust.save().then(cust=>{
        res.status(200).json({"customer":"customer added successfully"+cust});
    }).catch(err=>{
        res.status(400).send("unable to save to database");
    });
});

//Login
customerRoute.route("/login/:cuserid/:cuserpass").get(function(req,res){
    Customer.findOne({$and:[{"cuserid":req.params.cuserid},{"cuserpass":req.params.cuserpass}]})
.then(cust=>{
    console.log(cust);
    res.send(cust);
}).catch(err=>{
    res.status(400).send("Data not found.Somthing went wrong");
});
})

//get customer image
customerRoute.route("/getimage/:picname").get((req,res)=>{
    res.sendFile("E:/PROGRAMS/MERN practice/React6 project/Backend/Server File/Customerimages/"+
    req.params.picname);
})
module.exports=customerRoute;