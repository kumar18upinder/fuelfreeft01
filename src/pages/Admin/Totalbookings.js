import { Link, useNavigate } from "react-router-dom";
import "./admin.css";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "jquery";
import { GiCancel } from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";

const Totalbookings = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.list;

  async function getChargingList() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/productBook/list",
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
            <h3>Total Bookings</h3>
          </div>
            <div className="admin-dashboard-table-new ">
              <ul>
                <li id="admint-table-haeding">
                  <div className="admin-dashboard-name">
                    <span> User Name </span>
                    <span className="admin-emil">Firm Name</span>
                    <span className="admin-emil">Product Name</span>
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
                          {data.productName}
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
  );
};
export default Totalbookings;
