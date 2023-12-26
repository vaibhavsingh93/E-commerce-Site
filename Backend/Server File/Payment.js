

require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

router.post("/orders/:amt", async (req, res) => {
  try {
   
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: req.params.amt,
      currency: "INR",
      receipt: "receipt_order_74394",
    };
    
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send("Some error occured");
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }

})

//success page
router.post("/success", async (req, res) => {
  res.send("payment success!!");
  res.end();
});
module.exports = router;