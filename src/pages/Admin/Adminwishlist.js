import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Adminwishlist = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.list;

  async function getChargingList() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/favorite/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingData = await resultCharging.data;
    setChargingList(chargingData);
  }

  const gotouser = (uid) => {
    navigate(`/userprofileadmin/${uid}`);
  };

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
          <div className="admin-title">
            <h3>Total Bookings</h3>
          </div>
          <div className="admin-dashboard-table">
            <div className="admin-dashboard-table ">
              <ul>
                <li id="admint-table-haeding">
                  <div className="admin-dashboard-name">
                    <span> user name </span>
                    <span className="admin-emil">ProductName</span>
                    <span className="admin-emil">ProductType</span>
                  </div>
                  <div className="vender-approvel"></div>
                </li>

                {chargingType &&
                  chargingType.map((data) => (
                    <li id="admint-table-haeding">
                      <div className="admin-dashboard-name">
                        {data.userID ? (
                          <span
                            onClick={() => gotouser(data.userID._id)}
                            className="admin-emil"
                          >
                            {data.userID.userName}
                            <Link>see details</Link>
                          </span>
                        ) : (
                          ""
                        )}
                        {data.productID ? (
                          <span className="admin-emil">
                            {data.productID.productName}
                          </span>
                        ) : (
                          ""
                        )}
                        {data.productID ? (
                          <span className="admin-emil">
                            {data.productID.VehicleType}
                            {"     "}
                          </span>
                        ) : (
                          ""
                        )}
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
export default Adminwishlist;
