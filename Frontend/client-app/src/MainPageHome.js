import React from "react";
import {NavDropdown,Navbar,Nav,Container }from "react-bootstrap";
import {NavLink, Route,Routes} from "react-router-dom";
import CustomerReg from "./CustomerReg";
import CustomerLogin from "./CustomerLogin";
import VenderReg from "./VenderReg";
import VenderLogin from "./VenderLogin";
import AdminLogin from "./AdminLogin";
import ContactUs from "./ContactUs";
import Home from "./Home";
import About from "./About";

function MainPageHome() {
  return (
    <div>
      <div>
        <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/contactus"}>
                  Contact Us
                </Nav.Link>
                <NavDropdown title="Login as" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to={"/customerlogin"}>
                    Customer
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={"/venderlogin"}>
                    Vender
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={"/adminlogin"}>
                    Admin
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route
            path="/customerreg"
            element={<CustomerReg></CustomerReg>}
          ></Route>
          <Route
            path="/customerlogin"
            element={<CustomerLogin></CustomerLogin>}
          ></Route>
          <Route path="/venderreg" element={<VenderReg></VenderReg>}></Route>
          <Route
            path="/venderlogin"
            element={<VenderLogin></VenderLogin>}
          ></Route>

          <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default MainPageHome;
