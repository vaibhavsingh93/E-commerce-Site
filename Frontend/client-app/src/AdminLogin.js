import React, {  useState } from "react";
import AdminHome from "./AdminHome";
import ReactDOM from "react-dom/client";
import Button from "react-bootstrap/Button";

const AdminLogin = () => 
{
const[aid,setAId]=useState()
const[apass,setAPass]=useState()
const handleAIdtext=(evt)=>
{
  setAId(evt.target.value);
}
const handleAPasstext=(evt)=>
{
  setAPass(evt.target.value);
}
const handleLoginButton=()=>
{
   const root = ReactDOM.createRoot(document.getElementById("root"));
   if(aid==="vaibhav123" & apass==="123"){
          root.render(<AdminHome></AdminHome>);
        }
        else {
          root.render(alert("Invalid Credential"));
           root.render(<AdminLogin></AdminLogin>);
        }
}
  return (
    <div>
      <div className="wrapper">
        <center>
          <h1> Admin Login</h1>
          <table>
            <tr>
              <td>User Id</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleAIdtext}
                />
              </td>
            </tr>
            <tr>
              <td>User Pass</td>
              <td>
                <input
                  type="password"
                  className="form-control"
                  onChange={handleAPasstext}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  type="submit"
                  onClick={handleLoginButton}
                  variant="primary"
                >
                  Login
                </Button>{" "}
              </td>
            </tr>
          </table>
        </center>
      </div>
    </div>
  );}
  export default AdminLogin
