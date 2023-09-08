import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.list;
  let count = chargingList.Count;

  async function getChargingList() {
    let resultCharging = await axios.get("https://app.fuelfree.in/user/list", {
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
          <div class="admin-title">
            <h3>User List</h3>
          </div>
            <div className="admin-dashboard-table-new ">
              <ul>
                <li id="admint-table-haeding-new">
                  <div class="admin-dashboard-name">
                    <span> User Name </span>
                    <span class="admin-emil">Email</span>
                    <span class="admin-emil">phoneNo</span>
                  </div>
                </li>

                {chargingType &&
                  chargingType.map((data, index) => (
                    <li id="admint-table-haeding-new">
                      <div className="admin-dashboard-name">
                        <span>{data.userName}</span>
                        <span className="admin-emil">{data.userEmail}</span>
                        <span className="admin-emil">{data.phoneNo}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};
export default UserList;
