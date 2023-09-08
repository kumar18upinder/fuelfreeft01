import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Approvedchargingstation = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.List;

  async function getChargingList() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/vendor/charging/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingData = await resultCharging.data;
    setChargingList(chargingData);
    
  }

  useEffect(() => {
    getChargingList();
  }, []);

  const gologinadmin = () => {
    if (!localStorage.getItem("Admin-Info")) {
      navigate("/admin");
    }
  };
  useEffect(() => {
    gologinadmin();
  }, []);

  const Approve = async (status, _id) => {
    let res = await axios.patch(
      `https://app.fuelfree.in/admin/charging/statusUpdate/${_id}?status=${status}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    window.location.reload();
    let result = await res.data;
  };

  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <div className="admin-dashboard-outer-list">
          <div className="admin-title">
            <h3>Charging Station</h3>
          </div>
          <Link to="/adminchargingstation" className="Approved">
            <button>All charging Dealer</button>
          </Link>
          <table className="tabledata-charge">
            <div>                
              <tr>
                <th> Vender name </th>
                <th>City</th>
                <th>Email</th>
                <th>address</th>

                <th>status</th>
              </tr>
            </div>

            {chargingType &&
              chargingType.map((data, index) => (
                <div key={data._id}>
                    <tr>
                      <td>{data.name}</td>
                      <td>{data.city}</td>
                      <td className="admin-emil">{data.email}</td>
                      <td>{data.address}</td>

                      <Link to={`/chargingDetails/${data._id}`}>
                        <button>See More</button>
                      </Link>
                      <button onClick={() => Approve("false", data._id)}>
                        Ignore
                      </button>
                    </tr>
                </div>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};
export default Approvedchargingstation;
