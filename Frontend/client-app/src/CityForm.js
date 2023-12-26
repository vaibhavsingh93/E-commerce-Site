import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./CityForm.css";

const CityForm = () => {
  const [ctid, setCtId] = useState();
  const [ctname, setCtName] = useState();
  const [stid, setStId] = useState();
  const [ctlist, setCtList] = useState([]);
  const [stlist, setStList] = useState([]);

  const handleCtIdText = (evt) => {
    setCtId(evt.target.value);
  };
  const handleCtNameText = (evt) => {
    setCtName(evt.target.value);
  };
  const handleStateSelect = (evt) => {
    setStId(evt.target.value);
  };

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

  const handleSaveButton = () => {
    if (ctid && ctname ){

      var obj = {
        ctid: ctid,
        ctname: ctname,
        stid: stid,
      };
      axios
      .post("http://localhost:2020/city/savecity", obj)
      .then((res) => {
        alert("city saved");
      })
      .catch((err) => {
        alert(err);
      });
    }else{
      alert("Please fill the Data!");
    }
  };
  const handleShowButton = () => {
    axios
      .get("http://localhost:2020/city/showcity")
      .then((res) => {
        setCtList(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <center>
        <div>
          <h4>Add City</h4>
          <table>
            <tr>
              <td>City Id</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleCtIdText}
                />
              </td>
            </tr>
            <tr>
              <td>City Name</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleCtNameText}
                />
              </td>
            </tr>
            <tr>
              <td>State</td>
              <td>
                <select onClick={handleStateSelect}>
                  {stlist.map((item) => (
                    <option value={item.stid}>{item.stname}</option>
                  ))}
                </select>
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
                  style={{ margin: "10px" }}
                >
                  Show
                </Button>{" "}
              </td>
            </tr>
          </table>
        </div>

        <h4>City List</h4>
        <div>
          <table>
            <tr className="trline">
              <th className="thline">ID</th>
              <th className="thline">City Name</th>
              <th className="thline">State ID</th>
            </tr>
            {ctlist.map((item) => (
              <tr>
                <td className="tdline">{item.ctid}</td>
                <td className="tdline">{item.ctname}</td>
                <td className="tdline">{item.stid}</td>
              </tr>
            ))}
          </table>
        </div>
      </center>
    </div>
  );
};
export default CityForm;
