import React from "react";
import AdminPic from "./AdminPic.JPG"
import AdminLogin from "./AdminLogin"
import ReactDOM from 'react-dom/client';
import { MemoryRouter } from "react-router-dom";
import StateForm from "./StateForm"
import CityForm from "./CityForm"
import Button from 'react-bootstrap/Button';
import "./AdminHome.css";


const AdminHome = () => {
  const handleLogOutButton = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <MemoryRouter>
        <AdminLogin></AdminLogin>
      </MemoryRouter>
    );
  };
  return (
    <div>
      <div>
        <h3>Welcome Back Vaibhav</h3>
        <img src={AdminPic} alt="vaibhav" height="40" width="50" />
        <Button type="submit" onClick={handleLogOutButton} variant="primary">
          Logout
        </Button>{" "}
      </div>
      <div className="left">
        <StateForm></StateForm>
      </div>
      <div className="right">
        <CityForm></CityForm>
      </div>
    </div>
  );
};

export default AdminHome;
