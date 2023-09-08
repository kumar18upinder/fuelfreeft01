import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import { useState, useEffect } from "react";

function Adminservicecenter() {
  const [vendorelist, setvendoreList] = useState({});
  let listtype = vendorelist.List;
  async function getvendoreList() {
    let resultvendore = await axios.get(
      "https://app.fuelfree.in/admin/service",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let vendoreData = await resultvendore.data;
    setvendoreList(vendoreData);
  }
  useEffect(() => {
    getvendoreList();
  }, []);

  const Approve = async (status, _id) => {
    let res = await axios.patch(
      `https://app.fuelfree.in/admin/service/statusUpdate/${_id}?status=${status}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    window.location.reload();
    let result = await res.data;
  };

  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <div className="admin-dashboard-outer">
          <div class="admin-title">
            <h3>Service center</h3>
          </div>

          <div className="admin-dashboard-table">
            <div className="admin-dashboard-table ">
              <ul>
                <li id="admint-table-haeding">
                  <div className="admin-dashboard-name">
                    <Link>
                      <span> Vender name</span>
                      <span>Address</span>
                      <span>firmName</span>
                    </Link>
                  </div>
                  <div className="vender-approvel">
                    <span>status</span>
                  </div>
                </li>

                {listtype &&
                  listtype.map((data) => (
                    <li id="admint-table-haeding">
                      <div className="admin-dashboard-name">
                        <Link>
                          <span>{data.name}</span>
                          <span>{data.address}</span>
                          <span>{data.firmName}</span>
                        </Link>
                      </div>
                      <div className="vender-approvel">
                        {data.status === true ? (
                          <>
                            {" "}
                            <Link>Approved</Link>
                            <Link>See More</Link>
                          </>
                        ) : (
                          <>
                            <Link onClick={() => Approve("true", data._id)}>
                              Approve
                            </Link>
                            <Link onClick={() => Approve("false", data._id)}>
                              Ignore
                            </Link>{" "}
                            <Link>See More</Link>
                          </>
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
}
export default Adminservicecenter;
