import React, { useState, useEffect } from "react";
import axios from "axios";
import cart from "./cart.jpg";
import CheckOut from "./CheckOut";
import ReactDOM  from "react-dom/client";
import "./ProductList.css"
 import Button from "react-bootstrap/Button";


const ProductList = () => {
  const [plist, setPList] = useState([]);
  const [itemcount, setItemCount] = useState(0);
  const [selitems, setSelItems] = useState([]);

  const handleCheckOut = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<CheckOut data={selitems}></CheckOut>);
  };
 const  handleAddToCart = (item) => {
    setItemCount(itemcount + 1);
    selitems.push(item);
  };
  useEffect(() => {
    axios
      .get("http://localhost:2020/product/showproduct")
      .then((res) => {
        setPList(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  },[]);
  return (
    <div>
      <div
        style={{
          backgroundColor: "Lightblue",
          color: "red",
          height: "89px",
          width: "100%",
        }}
      >
        <img src={cart} height="88" width="88" />
        <label>{itemcount}</label>
        <span> </span>
        <Button
          type="submit"
          onClick={handleCheckOut}
          variant="primary"
          size="sm"
        >
          Check Out
        </Button>{" "}
      </div>
      <center>
        <h1 style={{ backgroundColor: "green", color: "white" }}>
          Product List
        </h1>
        <table>
          <tr className="pthline">
            <th className="pthline">Product Id</th>
            <th className="pthline">Product Name</th>
            <th className="pthline">Proce</th>
            <th className="pthline">Offer Price</th>
            <th className="pthline">Photo</th>
            <th className="pthline">Action</th>
          </tr>
          {plist.map((item) => (
            <tr className="tr">
              <td className="ptdline">{item.pid}</td>
              <td className="ptdline">{item.pname}</td>
              <td className="ptdline">{item.pprice}</td>
              <td className="ptdline">{item.oprice}</td>
              <td className="ptdline">
                <img
                  src={
                    "http://localhost:2020/product/getproductimage/" +
                    item.ppicname
                  }
                  height="100"
                  width="100"
                />
              </td>
              <td className="ptdline">
                <Button
                  type="submit"
                  onClick={() => handleAddToCart(item)}
                  variant="primary"
                  size="sm"
                >
                  Add to Cart
                </Button>{" "}
              </td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
};

export default ProductList;
