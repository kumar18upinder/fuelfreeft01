import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TotalSentLeads = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.List;
  let count=chargingList.Count


  async function getChargingList() {
    let resultCharging = await axios.get("https://app.fuelfree.in/admin/agency", {
      headers: {
        Accept: "application/json",
      },
    });
    let chargingData = await resultCharging.data;
    setChargingList(chargingData);
  }
  useEffect(() => {
    getChargingList();
  }, []);

  const gotouser = (uid) => {
    navigate(`/agency-visit-count/${uid}`);
  };

  const gologinadmin = () => {
    if (!localStorage.getItem("Admin-Info")) {
      navigate("/admin");
    }
  };
  useEffect(() => {
    gologinadmin();
  }, []);

  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <div className="admin-dashboard-outer-list">
          <div className="admin-title">
            <h3>Total Sent leads</h3>
            <h3>Total dealers:--{count}</h3>
          </div>
          <div className="admin-dashboard-table">
            <div className="admin-dashboard-table ">
              <ul>
                <li id="admint-table-haeding">
                  <div className="admin-dashboard-name">
                    <span> dealerName name </span>
                    <span className="admin-emil">Vendors firm name</span>
                    {/* <span className="admin-emil">vehicleType</span> */}
                  </div>
                  <div className="vender-approvel"></div>
                </li>

                {chargingType &&
                  chargingType.map((data) => (
                    <li id="admint-table-haeding">
                      <div className="admin-dashboard-name">
                        <span
                          onClick={() => gotouser(data._id)}
                          className="admin-emil"
                        >
                          {data.name}
                          <Link>see leads</Link>
                        </span>
                                <span className="admin-emil">
                                  {data.firmName},
                                </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TotalSentLeads;
