var mongoose=require("mongoose");
const Schema=mongoose.Schema;
var Vender=new Schema({
    vid:{type:Number},
    vname:{type:String},
    vcontact:{type:Number},
    vemail:{type:String},
    vaddress:{type:String},
    vpicname:{type:String},
    vuserid:{type:String},
    vuserpass:{type:String}
},
{    collection:"Vender"
})
module.exports=mongoose.model("Vender",Vender);