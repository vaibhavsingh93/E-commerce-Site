const express=require("express")
const stateRoute=express.Router()
let State=require("./State.model")

//save state
stateRoute.route("/savestate").post(function(req,res){
    let state=new State(req.body);
    state.save().then(state=>{
        res.status(200).json({"state":"state added successfully"+state});
    }).catch(err=>{
        res.status (400).send("unable to save to Database");
    })
})

//Get state

stateRoute.route("/showstate").get(function(req,res){
    State.find().then(state=>{
        console.log(state);
        res.send(state);
    }).catch(err=>{
        res.status(400).send("Data not found,somthing went wrong")
    });
});
module.exports= stateRoute;