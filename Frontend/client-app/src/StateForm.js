import React,{useState} from "react"
import axios from "axios"
import "./StateForm.css"
 import Button from "react-bootstrap/Button";
const StateForm = () => {
    const [stid,setStId]=useState();
    const [stname,setStName]=useState();
    const [stlist,setStList]=useState([]);

    const handleStIdText=(evt)=>{
        setStId(evt.target.value);
    }
    const handleStNameText=(evt)=>{
        setStName(evt.target.value);
    }
    const handleSaveButton=(res)=>{
      if (stid && stname) {
        var obj = {
          stid: stid,
          stname: stname,
        };
        axios
          .post("http://localhost:2020/state/savestate", obj)
          .then((res) => {
            alert("state saved");
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        alert("Please fill the Data!");
      }
      }
   
    const handleShowButton=()=>{
        axios.get("http://localhost:2020/state/showstate").then((res)=>{
            setStList(res.data);
        }).catch((err)=>{
            alert(err);
        })
    }

  return (
    <div>
      <center>
        <h4>Add State</h4>
        <table>
          <tr>
            <td>State Id</td>
            <td>
              <input
                type="number"
                onChange={handleStIdText}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <td>State Name</td>
            <td>
              <input
                type="text"
                onChange={handleStNameText}
                className="form-control"
              />
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
                variant="primary" style={{margin:"10px"}}
              >
                Show
              </Button>{" "}
            </td>
          </tr>
        </table>
        <h4>State List</h4>
        <table>
          <tr className="trline">
            <th className="thline">State Id</th>
            <th className="thline">State Name</th>
          </tr>
          {stlist.map((item) => (
            <tr>
              <td className="tdline">{item.stid}</td>
              <td className="tdline">{item.stname}</td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
}

export default StateForm;