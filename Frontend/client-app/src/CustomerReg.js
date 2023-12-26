import React,{ useState,useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
 import Button from "react-bootstrap/Button";

const CustomerReg = () => {
const[cid,setCId]=useState();
const[cname,setCtName]=useState();
const[ccontact,setCContact]=useState();
const[cemail,setCEmail]=useState();
const[caddress,setCAddress]=useState();
const[cpincode,setCPinCode]=useState();
const[cpicname,setCPicName]=useState();
const[cuserid,setCUserId]=useState();
const[cuserpass,setCUserPass]=useState();
const[stid,setStId]=useState([]);
const[ctid,setCtId]=useState();
const[stlist,setStList]=useState([]);
const[ctlist,setCtList]=useState([]);
const[image,setImage]=useState({preview:"",data:""});
const[status,setStatus]=useState("");
const history = useNavigate("/customerlogin");

const handleCIdText=(evt)=>{
    setCId(evt.target.value)
}
const handleCNameText=(evt)=>{
    setCtName(evt.target.value)
}
const handleCContactText=(evt)=>{
    setCContact(evt.target.value)
}
const handleCEmailText=(evt)=>{
    setCEmail(evt.target.value)
}
const handleCAddressText=(evt)=>{
    setCAddress(evt.target.value)
}
const handleCPinCodeText=(evt)=>{
    setCPinCode(evt.target.value)
}
const handleCUserIdText=(evt)=>{
    setCUserId(evt.target.value)
}
const handleCUserPassText=(evt)=>{
    setCUserPass(evt.target.value)
}
const handleStateIdSelect=(evt)=>{
    setStId(evt.target.value)
axios.get("http://localhost:2020/city/showcitybystate/"+evt.target.value).then((res)=>{
    setCtList(res.data);
}).catch((err)=>{
    alert(err);
})
}
const handleCityIdSelect=(evt)=>{
    setCtId(evt.target.value)
}
const handleSubmit=async(evt)=>{
    evt.preventDefault()
    let formData=new FormData();
    formData.append("file",image.data);
    const response=await fetch("http://localhost:2020/savecustomerimage",{
        method:"POST",
        body:formData,
    })
    if(response){setStatus(response.statusText)}
}
const handleFileChange=(evt)=>{
    const img={
        preview:URL.createObjectURL(evt.target.files[0]),
        data:evt.target.files[0]
    }
    setImage(img)
    setCPicName(evt.target.files[0].name);
}
const handleRegisterButton=()=>{
    var obj={
        cid:cid,
        cname:cname,
        ccontact:ccontact,
        caddress:caddress,
        cemail:cemail,
        cpincode:cpincode,
        cpicname:cpicname,
        cuserid:cuserid,
        cuserpass:cuserpass,
        stid:stid,
        ctid:ctid,
    }
    axios.post("http://localhost:2020/customer/register",obj).then((res)=>{
    
    alert("Registration success!") 

    }).catch((err)=>{
        alert(err);
    })
}
useEffect(() => {
  axios
    .get("http://localhost:2020/state/showstate")
    .then((res) => {
      setStList(res.data);
    })
    .catch((err) => {
      alert(err);
    });
}, []);

  return (
    <div>
      <Button type="submit" variant="dark" onClick={() => history(-1)}>
        Back
      </Button>{" "}
      <center>
        <h1>Customer Registration</h1>
        <table>
          <tr>
            <td>Customer Id</td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleCIdText}
              />
            </td>
          </tr>
          <tr>
            <td>Customer Name</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={handleCNameText}
              />
            </td>
          </tr>
          <tr>
            <td>contact</td>
            <td>
              <input
                type="number"
                minLength="10"
                maxLength="10"
                className="form-control"
                onChange={handleCContactText}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={handleCEmailText}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={handleCAddressText}
              />
            </td>
          </tr>
          <tr>
            <td>Pin Code</td>
            <td>
              <input
                type="number"
                className="form-control"
                onChange={handleCPinCodeText}
              />
            </td>
          </tr>
          <tr>
            <td>State</td>
            <td>
              <select onClick={handleStateIdSelect}>
                {stlist.map((item) => (
                  <option value={item.stid}>{item.stname}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>city</td>
            <td>
              <select onClick={handleCityIdSelect}>
                {ctlist.map((item) => (
                  <option value={item.ctid}> {item.ctname}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <b>photo</b>
            </td>
            <td>
              {<img src={image.preview} width="100" height="100" />}
              <hr></hr>
              <form onSubmit={handleSubmit}>
                {" "}
                <input
                  type="file"
                  name="file"
                  className="form-control"
                  onChange={handleFileChange}
                />
                <Button type="submit" size="sm" variant="success">
                  Submit
                </Button>{" "}
              </form>
              <h4>Photo uploaded{status}</h4>
            </td>
          </tr>
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
            <td>password</td>
            <td>
              <input
                type="password"
                className="form-control"
                onChange={handleCUserPassText}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button
                type="submit"
                onClick={handleRegisterButton}
                variant="primary"
              >
                Register
              </Button>{" "}
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
}
export default CustomerReg;


