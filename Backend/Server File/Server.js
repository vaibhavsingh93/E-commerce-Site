var express = require("express");
var app = express();
var cors = require("cors");
var bodyparser = require("body-parser");
const PORT = 2020;
var mongoose = require("mongoose");
var config = require("./Db");
var customerRoute = require("./Customer.Route");
var stateRoute = require("./State.route");
var cityRoute = require("./city.route");
var venderRoute = require("./Vender.route");
var productRoute = require("./Product.route");
var paymentRoute=require("./Payment")
const multer = require("multer");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/customer", customerRoute);
app.use("/state", stateRoute);
app.use("/city", cityRoute);
app.use("/vender", venderRoute);
app.use("/product", productRoute);
app.use("/payment",paymentRoute);

mongoose
  .connect(config.URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected to " + config.URL);
  })
  .catch((err) => {
    console.log(err);
  });

//image save customer
const st = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Customerimages/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: st });
app.post("/savecustomerimage", upload.single("file"), (req, res) => {
  res.json({});
});
//image save vendor
const stv = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Venderimages/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadv = multer({ storage: stv });
app.post("/savevenderimage", uploadv.single("file"), (req, res) => {
  res.json({});
});

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
