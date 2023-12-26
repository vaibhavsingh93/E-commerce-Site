import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import logo from "./cart.jpg";
import "./CheckOut.css"

function CheckOut (props){
  var total = 0;
  const [selitems, setSelItems] = useState([]);
  


  function loadScript(src) {
    
    return new Promise((resolve) => {
      
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() 
  {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load.Are you online?");
      return;
    }
    var myamount = total * 100;
    //creating a new order
    const result = await axios.post(
      "http://localhost:2020/payment/orders/" + myamount
    );
  
  if (!result) {
    alert("Server error,Are you online?");
    return;
  }
  //Getting the order details back
  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: "rzp_test_8CxHBNuMQt1Qn8",
    amount: amount.toString(),
    currency: currency,
    name: "Vaibhav Technologies Pvt. Ltd. Indore",
    description: "Test Transaction",
    image: { logo },
    order_id: order_id,
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };
      const result = await axios.post(
        "http://localhost:4090/payment/success",
        data
      );
      alert(result.data.msg);
    },
    prefill: {
      name: "Vaibhav Technologies",
      email: "vaibhav2589@gmail.com",
      contact: "9080706050",
    },
    notes: {
      address: "Vaibhav Technologies Pvt. Ltd. Indore",
    },
    theme: {
      color: "#61dafb",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  
}


  return (
    <div>
      <div>
        <center>
          <h1>Order List</h1>
        </center>
        <center>
          <table>
            <tr className="ctrline">
              <th className="cthline">Item Code</th>
              <th className="cthline">Product Name</th>
              <th className="cthline">Price</th>
              <th className="cthline">Offer Price</th>
              <th className="cthline">Photo</th>
            </tr>
            {props.data.map((item) => (
              <tr className="ctrline">
                <td className="ctdline">{item.pid}</td>
                <td className="ctdline">{item.pname}</td>
                <td className="ctdline">{item.pprice}</td>
                <td className="ctdline">{item.oprice}</td>
                <td className="ctdline">
                  <img
                    src={
                      "http://localhost:2020/product/getproductimage/" +
                      item.ppicname
                    }
                    height="60"
                    width="60"
                  />
                </td>
              </tr>
            ))}
          </table>
          {props.data.map((item) => {
            total += item.oprice;
          })}
          <h1 style={{ backgroundColor: "green", color: "white" }}>
            <lable>Total Amount={total}</lable>
          </h1>
        </center>
        <center>
          <Button variant="danger" onClick={displayRazorpay} style={{margin:"10px"}}>
            {" "}
            Pay Now
          </Button>{" "}
        </center>
      </div>
    </div>
  );
};

export default CheckOut;
