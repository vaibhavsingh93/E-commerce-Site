import React,{useEffect,useState}from "react";
import axios from "axios";
import VenderHome from "./VenderHome";
import  ReactDOM from "react-dom/client";
import "./VenderLogin.css"
import Button from "react-bootstrap/Button";

const VenderLogin = () => {
const[vuserid,setVUserId]=useState()
const[vuserpass,setVUserPass]=useState()

const handleVUserIdText=(evt)=>{
    setVUserId(evt.target.value)
}
const handleVUPaasText=(evt)=>{
    setVUserPass(evt.target.value)
}

const handleLoginButton=()=>{
    axios.get("http://localhost:2020/vender/login/"+vuserid+"/"+vuserpass).then((res)=>
    {
      if (res.data.vname != null && res.data.vname != undefined){

        var obj = {
          vname: res.data.vname,
          vpicname: res.data.vpicname,
        };
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<VenderHome data={obj}></VenderHome>)
      }else{
          alert("Invalid Credentials");
      }
}).catch((err)=>{
        alert(err)
    })
}
  return (
    <div>
      <center>
        <h1>Vender Login</h1>
        <table>
          <tr>
            <td>User Id</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={handleVUserIdText}
              />
            </td>
          </tr>
          <tr>
            <td>User Pass</td>
            <td>
              <input
                type="password"
                className="form-control"
                onChange={handleVUPaasText}
              />
            </td>
          </tr>
          <td></td>

          <tr>
            <td>
              <Button
                type="submit"
                onClick={handleLoginButton}
                variant="primary" >
                Login
              </Button>{" "}
            </td>
          </tr>
        </table>
      </center>
      <div className="reg">
        Don't have an account?<a href="VenderReg">Register</a>
      </div>
    </div>
  );
}

export default VenderLogin;
