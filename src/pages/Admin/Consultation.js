import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ConsultationAdmin = () => {
  const navigate = useNavigate();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.List;

  async function getChargingList() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/consult/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingData = await resultCharging.data;
    console.warn(chargingData, "enquiry");

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
            <h3>Consultation</h3>
          </div>

          <div className="admin-dashboard-table">
            <div className="admin-dashboard-table ">
              <ul>
                <li id="admint-table-haeding">
                  <div className="admin-dashboard-name">
                    <span> user name </span>
                    <span> Vehicle Name </span>
                    <span className="admin-emil">Message</span>
                    <span className="admin-emil">Phone No</span>
                    <span> Time </span>
                  </div>
                  <div className="vender-approvel"></div>
                </li>

                {chargingType &&
                  chargingType.map((data, index) => (
                    <li id="admint-table-haeding">
                      <div className="admin-dashboard-name">
                        <span>{data.Name}</span>
                        <span>Ather energy 450x </span>
                        <span className="admin-emil">{data.Message}</span>
                        <span className="admin-emil">{data.PhoneNo}</span>
                        <span> {data.time} </span>
                      </div>
                      <div>
                        <div
                          className="modal fade"
                          id={alphabet[index]}
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog"></div>
                        </div>
                      </div>

                      <div className="apporve-ignore">
                        <div>
                          <Link
                            to={`/userprofileadmin/${data.userID}`}
                            class="btn btn-primary"
                          >
                            See details
                          </Link>
                        </div>
                        <div></div>
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
export default ConsultationAdmin;
