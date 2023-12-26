import React,{useEffect,useState}  from "react";
import axios from "axios";
import CustomerHome from "./CustomerHome";
import ReactDOM from 'react-dom/client';
import "./CustomerLogin.css"
import Button from "react-bootstrap/Button";


const CustomerLogin = () => {
const[cuserid,setCUserId]=useState()
const[cuserpass,setCUserPass]=useState()

const handleCUserIdText=(evt)=>{
    setCUserId(evt.target.value)
}
const handleCUPaasText=(evt)=>{
    setCUserPass(evt.target.value)
}

const handleLoginButton=()=>{
    axios.get("http://localhost:2020/customer/login/"+cuserid+"/"+cuserpass).then((res)=>
    {
if(res.data.cname != null && res.data.cname!=undefined){

  
  var obj={
    cname:res.data.cname,
    cpicname:res.data.cpicname
  }
  const root= ReactDOM.createRoot(document.getElementById("root"));
  root.render(<CustomerHome data={obj}></CustomerHome>)
}else{
  alert("Invalid Credentials")
}
}).catch((err)=>{
        alert(err)
    })
}
  return (
    <div>
      <center>
        <h1>Customer Login</h1>
        <table>
          <tr>
            <td>User Id</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={handleCUserIdText}
              />
            </td>
          </tr>
          <tr>
            <td>User Pass</td>
            <td>
              <input
                type="password"
                className="form-control"
                onChange={handleCUPaasText}
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
      <div className="reg">
        Don't have an account?
        <a href="CustomerReg">Register</a>
      </div>
    </div>
  );
}

export default CustomerLogin;
