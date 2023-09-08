import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import countdown from "../../pages/images/clock.gif"

const PaidVendorList = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState([]);

  async function getChargingList() {
    let resultCharging = await axios.get("https://app.fuelfree.in/vendor/agency/list/paid", {
      headers: {
        Accept: "application/json",
      },
    });
    let chargingData = await resultCharging.data.paidList;
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

  const calculateTimeRemaining = (updatedAt) => {
    const thirtyDaysInMillis = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
    const now = new Date();
    const updatedAtDate = new Date(updatedAt);
    const timeDiff = thirtyDaysInMillis - (now - updatedAtDate);
    
    if (timeDiff <= 0) {
      return "Expired"; // Or any other text you want to display for expired items
    }
    
    const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000); 

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedChargingList = chargingList.map((data) => ({
        ...data,
        countdown: calculateTimeRemaining(data.updatedAt),
      }));
      setChargingList(updatedChargingList);
    }, 1000); // Update every minute

    return () => {
      clearInterval(interval);
    };
  }, [chargingList])
  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <div className="admin-dashboard-outer-list">
          <div className="admin-title">
            <h3>Paid Vendor List</h3>
          </div>
            <div className="admin-dashboard-table-new ">
              <ul>
                <li id="admint-table-haeding-new">
                  <div className="admin-dashboard-name">
                    <span className="admin-emil"> Name </span>
                    <span className="admin-emil">Email</span>
                    <span className="admin-emil">Phone No / Alternate</span>
                    <span className="admin-emil">Firm Name </span>
                    <span className="admin-emil">Opening / Closing (Time)</span>
                    <span className="admin-emil">Address</span>
                    <span className="admin-emil">Time left</span>
                  </div>
                </li>

                {chargingList &&
                  chargingList.map((data) => (
                    <li id="admint-table-haeding-new">
                      <div className="admin-dashboard-name" key={data.id} >
                        <span className="admin-emil">{data.name}</span>
                        <span className="admin-emil">{data.email}</span>
                        <span className="admin-emil">{data.whatsappNo}<br/>{data.alternatePhoneNo?(<>- {data.alternatePhoneNo}</>):(" ")}</span>
                        <span className="admin-emil">{data.firmName}</span>
                        <span className="admin-emil">{data.openingTime}AM / {data.closingTime}PM</span>
                        <span className="admin-emil">{data.address}</span>
                        <span className="admin-emil">{calculateTimeRemaining(data.updatedAt)}<img src={countdown} alt="countdown" className="countdown"/></span>
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
export default PaidVendorList;
