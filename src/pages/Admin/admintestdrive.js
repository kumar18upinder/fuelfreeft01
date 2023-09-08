import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { GiCancel } from "react-icons/gi";
import { useEffect, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Admintestdrive = () => {
  const navigate = useNavigate();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.allData;

  async function getChargingList() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/testDrive/allBookingList",
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

  const gotodealer = (vid) => {
    navigate(`/vendorDetails/${vid}}`);
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
            <h3>Test Drive</h3>
          </div>
          <div className="admin-dashboard-table">
            <div className="admin-dashboard-table ">
              <ul>
                <li id="admint-table-haeding">
                  <div className="admin-dashboard-name-new">
                    <span> user name </span>
                    <span className="admin-emil">Vendor name</span>
                    <span className="admin-emil">ProductName</span>
                    <span className="admin-emil">Type</span>
                    <span className="admin-emil">Time</span>
                  </div>
                  <div className="vender-approvel"></div>
                </li>
                {chargingType &&
                  chargingType.map((data) => (
                    <li id="admint-table-haeding">
                      <div className="admin-dashboard-name-new">
                        <span
                          onClick={() => gotouser(data.userID)}
                          className="admin-emil"
                        >
                          {data.name}<br/>
                          <Link>see details</Link>
                        </span>
                        {data.vendorID ? (
                          <span
                            onClick={() => gotodealer(data.vendorID._id)}
                            className="admin-emil"
                          >
                            {data.vendorID.name}<br/>
                            <Link>see details</Link>
                          </span>
                        ) : (
                          ""
                        )}

                        <span className="admin-emil">{data.productName}</span>
                        <span className="admin-emil">{data.vehicleType}</span>
                        <span format="hh:mm:ss">
                          {data.time}
                          {"       "}
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
export default Admintestdrive;
