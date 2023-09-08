import "./admin.css";
import axios from "axios";
import Moment from "react-moment";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewsLetterAdmin = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.list;

  async function getChargingList() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/subscribe/list",
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

  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <div className="admin-dashboard-outer-list">
          <div className="admin-title">
            <h3>News Letter</h3>
          </div>
          <div className="admin-dashboard-table">
            <div className="admin-dashboard-table ">
              <ul>
                <li id="admint-table-haeding">
                  <div className="admin-dashboard-name">
                    <span>phone No</span>
                    <span className="admin-emil" style={{ width: "auto" }}>
                      Date
                    </span>
                  </div>
                </li>
                {chargingType &&
                  chargingType.map((data) => (
                    <li id="admint-table-haeding" key={data._id}>
                      <div className="admin-dashboard-name">
                        <span className="admin-emil">{data.PhoneNO}</span>
                        <Moment format="YYYY/MM/DD" className="admin-emil">
                          <span className="admin-emil">{data.createdAt}</span>
                        </Moment>
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
export default NewsLetterAdmin;
