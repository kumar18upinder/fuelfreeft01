import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AffiliateList = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.List;
  let count = chargingList.Count;

  async function getChargingList() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/affiliate/list",
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
          <div class="admin-title">
            <h3>Affiliate List</h3>
          </div>
          <div className="admin-dashboard-table">
            <div className="admin-dashboard-table ">
              <table className="tabledata-charge">
                <div>
                  <tr>
                    <th>Name</th>
                    <th></th>
                    <th>Email</th>
                    <th></th>
                    <th>phoneNo</th>
                    <th>City </th>
                    <th>Referral </th>
                    <th>points</th>
                  </tr>
                </div>
                {chargingType &&
                  chargingType.map((data) => (
                    <div key={data._id}>
                      <>
                        <tr className="table-data-auction">
                          <td className="table-data-auction">{data.name}</td>
                          <td className="table-data-auction">{''}</td>
                          <td className="table-data-auction">{data.email}</td>
                          <td className="table-data-auction">{''}</td>
                          <td className="table-data-auction">{data.phoneNo}</td>
                          <td className="table-data-auction">{data.city}</td>
                          <td className="table-data-auction">
                            {data.referralCode}
                          </td>
                          <td className="table-data-auction">{data.points}</td>
                          {data.userID ? (
                            <Link to={`/userprofileadmin/${data.userID._id}`}>
                              <button>see user</button>{" "}
                            </Link>
                          ) : (
                            ""
                          )}
                        </tr>
                      </>
                    </div>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AffiliateList;
