import React,{ useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
 import Button from "react-bootstrap/Button";

const VenderReg = () => {

const[vid,setVId]=useState();
const[vname,setVName]=useState();
const[vcontact,setVContact]=useState();
const[vemail,setVEmail]=useState();
const[vaddress,setVAddress]=useState();
const[vpicname,setVPicName]=useState();
const[vuserid,setVUserId]=useState();
const[vuserpass,setVUserPass]=useState();
const[image,setImage]=useState({preview:"",data:""});
const[status,setStatus]=useState("");
const history = useNavigate("/venderlogin");
const handleVIdText=(evt)=>{
    setVId(evt.target.value)
}
const handleVNameText=(evt)=>{
    setVName(evt.target.value)
}
const handleVContactText=(evt)=>{
    setVContact(evt.target.value)
}
const handleVEmailText=(evt)=>{
    setVEmail(evt.target.value)
}
const handleVAddressText=(evt)=>{
    setVAddress(evt.target.value)
}

const handleVUserIdText=(evt)=>{
    setVUserId(evt.target.value)
}
const handleVUserPassText=(evt)=>{
    setVUserPass(evt.target.value)
}


const handleSubmit=async(evt)=>{
    evt.preventDefault()
    let formData=new FormData();
    formData.append("file",image.data);
    const response=await fetch("http://localhost:2020/savevenderimage",{
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
    setVPicName(evt.target.files[0].name);
}
const handleRegisterButton=()=>{
    var obj={
        vid:vid,
        vname:vname,
        vcontact:vcontact,
        vemail:vemail,
        vaddress:vaddress,
        vpicname:vpicname,
        vuserid:vuserid,
        vuserpass:vuserpass  
    }
    axios.post("http://localhost:2020/vender/register",obj).then((res)=>{
        alert("Registration done")
    }).catch((err)=>{
        alert(err);
    })
}

  return (
    <div>
      <Button
        type="submit"
        onClick={() => history(-1)}
        variant="dark"
        size="sm"
      >
        Back
      </Button>{" "}
      <center>
        <h1>Vender Registration</h1>
        <table>
          <tr>
            <td>Vender Id</td>
            <td>
              <input type="number" onChange={handleVIdText} />
            </td>
          </tr>
          <tr>
            <td>Vender Name</td>
            <td>
              <input type="text" onChange={handleVNameText} />
            </td>
          </tr>
          <tr>
            <td>contact</td>
            <td>
              <input
                type="number"
                minLength="10"
                maxLength="10"
                onChange={handleVContactText}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="text" onChange={handleVEmailText} />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input type="text" onChange={handleVAddressText} />
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
                <input type="file" name="file" onChange={handleFileChange} />
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
              <h4>Photo uploaded {status}</h4>
            </td>
          </tr>
          <tr>
            <td>User Id</td>
            <td>
              <input type="text" onChange={handleVUserIdText} />
            </td>
          </tr>
          <tr>
            <td>password</td>
            <td>
              <input type="password" onChange={handleVUserPassText} />
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleRegisterButton}
              >
                Register
              </button>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
}
export default VenderReg;