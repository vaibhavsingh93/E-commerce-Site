import React from "react";
import CustomerLogin from "./CustomerLogin"
import ProductList from "./ProductList";
import { MemoryRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Button from "react-bootstrap/Button";

const CustomerHome = (props) => {
  const handleLogOutButton=()=>{
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<MemoryRouter><CustomerLogin></CustomerLogin></MemoryRouter>)
  }
  
  return (
    <div>
      <div>
        <h3>Welcome {props.data.cname}</h3>
        <img
          src={"http://localhost:2020/customer/getimage/" + props.data.cpicname}
          height="100"
          width="100"
          className="Cpic"
        />
        <Button
          type="submit"
          onClick={handleLogOutButton}
          variant="primary"
          size="sm"
        >
          Logout
        </Button>{" "}
       
      </div>
      <div>
        <ProductList></ProductList>
      </div>
    </div>
  );
}

export default CustomerHome;
