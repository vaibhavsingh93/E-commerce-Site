var mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Admin = new Schema(
  {
    aid: { type: Number },
    aname: { type: String },
    aemail: { type: String },
    apicname: { type: String },
    auserid: { type: String },
    auserpass: { type: String },
  },
  {
    collection: "Admin",
  }
);
module.exports = mongoose.model("Admin", Admin);
