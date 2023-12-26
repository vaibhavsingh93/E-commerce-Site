const express=require("express");
const cityRoute=express.Router();
let City=require("./City.model");

//save city
cityRoute.route("/savecity").post(function(req,res){
    let city=new City(req.body);
    city.save().then(city=>{
        res.status(200).json({"city":"city added successfully"+city});
    }).catch(err=>{
        res.status (400).send("unable to save to Database");
    })
})

//Get  city by state

cityRoute.route("/showcitybystate/:stid").get(function(req,res){
    City.find({"stid":req.params.stid}).then(city=>{
        console.log(city);
        res.send(city);
    }).catch(err=>{
        res.status(400).send("Data not found,somthing went wrong")
    })
})
//get state

cityRoute.route("/showcity").get(function(req,res){
    City.find().then(city=>{
        console.log(city);
        res.send(city);
    });
});
module.exports=cityRoute;