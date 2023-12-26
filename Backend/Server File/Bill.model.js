var mongoose=require("mongoose");
const Schema=mongoose.Schema;
var Bill=new Schema({
    bid:{type:Number},
    bdate:{type:Date},
    cid:{type:Number},
    cname:{type:String},
    pid:{type:Number},
    pname:{type:String},
    price:{type:Number},
    qty:{type:Number},
    amt:{type:Number},
    total:{type:Number},
    picname:{type:String}
},
{
    collection:"Bill"
});
module.exports=mongoose.model("Bill",Bill);