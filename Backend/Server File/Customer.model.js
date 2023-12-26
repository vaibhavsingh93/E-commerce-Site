var mongoose=require('mongoose');
const { collection } = require('./Bill.model');
const Schema=mongoose.Schema;
var Customer=new Schema({
    cid:{type:Number},
    cname:{type:String},
    ccontact:{type:Number},
    cemail:{type:String},
    caddress:{type:String},
    cpincode:{type:Number},
    cpicname:{type:String},
    cuserid:{type:String},
    cuserpass:{type:String},
    stid:{type:Number},
    ctid:{type:Number}
},
{
    collection:"Customer"
}
);
module.exports=mongoose.model("Customer",Customer);