import "./admin.css";
import axios from "axios";
import { GiCancel } from "react-icons/gi";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Totalchargingbookings = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.allData;

  async function getChargingList() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/booking/allChargingbookingList",
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

  const gotouser = (uid) => {
    navigate(`/userprofileadmin/${uid}`);
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
            <h3>Total Charging Booking</h3>
          </div>
          <div className="admin-dashboard-table">
            <div className="admin-dashboard-table ">
              <ul>
                <li id="admint-table-haeding">
                  <div className="admin-dashboard-name">
                    <span> user name </span>
                    {/* <span className="admin-emil">firm name</span> */}
                    <span className="admin-emil">VehicleType</span>
                    <span className="admin-emil">Status</span>
                  </div>
                </li>

                {chargingType &&
                  chargingType.map((data) => (
                    <li id="admint-table-haeding">
                      <div className="admin-dashboard-name">
                        <span
                          onClick={() => gotouser(data.userID)}
                          className="admin-emil"
                        >
                          {data.name}
                          <Link>see details</Link>
                        </span>
                        {data.vendorID ? (
                          <span className="admin-emil">
                            {data.vendorID.firmName}
                          </span>
                        ) : (
                          ""
                        )}
                        <span className="admin-emil">
                          {data.VehicleType}
                          {"     "}
                          {data.status === "booked" ? (
                            <BsCheck2Circle
                              title="booked"
                              className="total-booking-btn"
                            />
                          ) : (
                            <GiCancel
                              title="cancelled booking"
                              className="total-booking-btnn"
                            />
                          )}
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
export default Totalchargingbookings;
