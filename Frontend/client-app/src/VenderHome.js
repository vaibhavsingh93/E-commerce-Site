import React from 'react'
import SaveProduct from './SaveProduct';
import VenderLogin from "./VenderLogin"
import ReactDOM from 'react-dom/client';
import { MemoryRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
const VenderHome = (props) => {
  const handleLogOutButton = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <MemoryRouter>
        <VenderLogin></VenderLogin>
      </MemoryRouter>
    );
  };
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}> Vender Home Page</h1>
        <h3>Welcome{props.data.vname}</h3>
        <img
          src={"http://localhost:2020/vender/getimage/" + props.data.vpicname}
          height="100"
          width="100"
        />
        <Button
          type="submit"
          onClick={handleLogOutButton}
          variant="dark"
          size="sm"
        >
          Logout
        </Button>{" "}
      </div>
      <div>
        <SaveProduct></SaveProduct>
      </div>
    </div>
  );
}

export default VenderHome;
