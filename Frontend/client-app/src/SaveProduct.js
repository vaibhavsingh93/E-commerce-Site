import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./SaveProduct.css"
 import Button from "react-bootstrap/Button";
const SaveProduct = () => {
    const[pid,setPId]=useState();
    const[pname,setPName]=useState();
    const[pprice,setPPrice]=useState();
    const[oprice,setOPrice]=useState();
    const[ppicname,setPPicName]=useState();
    const[plist,setPList]=useState([]);
    const[image,setImage]=useState({preview:"",data:""});
    const[status,setStatus]=useState("");

    useEffect(() => {
        axios
          .get("http://localhost:2020/product/getmaxpid")
          .then((res) => {
           var pid=res.data.length;
           var nextpid=pid+1;
           setPId(nextpid)
          })
          .catch((err) => {
            alert(err);
          });
      });

      const handlePNameText=(evt)=>{
        setPName(evt.target.value);
    }
    const handlePriceText=(evt)=>{
        setPPrice(evt.target.value);
    }
    const handleOPriceText=(evt)=>{
        setOPrice(evt.target.value);
    }
    
const handleSubmit=async(evt)=>{
    evt.preventDefault()
    let formData=new FormData();
    formData.append("file",image.data);
    const response=await fetch("http://localhost:2020/product/saveproductimage",{
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
    setPPicName(evt.target.files[0].name);
}
const handleSaveButton=()=>{
    if(pname===""||pprice===""||oprice==="")
    {
        alert("fill all fields")
    }
    else{
    var obj={
        pid:pid,
        pname:pname,
        pprice:pprice,
        oprice:oprice,
        ppicname:ppicname
       };
       axios.post("http://localhost:2020/product/saveproduct",obj).then((res)=>{
        alert("product saved");
        setPName("")
        setPPrice("")
        setOPrice("")
       }).catch((err)=>{
        alert (err);
       })
}
}
const handleShowButton=()=>{
    axios.get("http://localhost:2020/product/showproduct").then((res)=>{
        setPList(res.data);
    }).catch((err)=>{
        alert(err);
    })
}

  return (
    <div>
      <center>
        <h2 style={{ backgroundColor: "green", color: "white" }}>
          Product Details Form
        </h2>
        <table>
          <tr>
            <td>Product Id</td>
            <td>{pid}</td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>
              <input
                type="text"
                onChange={handlePNameText}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <td> Price</td>
            <td>
              <input
                type="text"
                onChange={handlePriceText}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <td>Offer Price</td>
            <td>
              <input
                type="text"
                onChange={handleOPriceText}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <td>Photo</td>
            <td>
              {<img src={image.preview} width="50" height="50" />}
              <hr></hr>
              <form onSubmit={handleSubmit}>
                <input type="file" name="file" onChange={handleFileChange} />
                <Button type="submit" variant="success" size="sm">
                  Submit
                </Button>{" "}
              </form>
              <h4>Photo uploaded {status}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <Button
                type="submit"
                onClick={handleSaveButton}
                variant="primary"
              >
                Save
              </Button>{" "}
            </td>
            <td>
              <Button
                type="submit"
                onClick={handleShowButton}
                variant="primary"
              >
                Show
              </Button>{" "}
            </td>
          </tr>
        </table>
        <h4 style={{ backgroundColor: "green", color: "black" }}>
          Product List
        </h4>
        <table>
          <tr className="sptrline">
            <th className="spthline">Product Id</th>
            <th className="spthline">Product Name</th>
            <th className="spthline"> Actual Price</th>
            <th className="spthline">Offer Price</th>
            <th className="spthline">Photo</th>
          </tr>
          {plist.map((item) => (
            <tr>
              <td className="sptdline">{item.pid}</td>
              <td className="sptdline">{item.pname}</td>
              <td className="sptdline">{item.pprice}</td>
              <td className="sptdline">{item.oprice}</td>
              <td className="sptdline">
                <img
                  src={
                    "http://localhost:2020/product/getproductimage/" +
                    item.ppicname 
                  } height="100" width="100"
                  
                />
              </td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
}

export default SaveProduct
