import React from "react";
import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRentalVehicleVendor = () => {
  const navigate = useNavigate();
  const [vendorelist, setvendoreList] = useState({});
  let listtype = vendorelist.data;
  console.log(listtype, "jjj");

  async function getvendoreList() {
    let resultvendore = await axios.get(
      `https://app.fuelfree.in/carRental/vendorList`,
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

  const gologinadmin = () => {
    if (!localStorage.getItem("Admin-Info")) {
      navigate("/admin");
    }
  };
  useEffect(() => {
    gologinadmin();
  }, []);

  const Approve = async (status, _id) => {
    let res = await axios.patch(
      `https://app.fuelfree.in/admin/rental/statusUpdate/${_id}?status=${status}`,
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
        <div class="admin-title">
          <table className="tabledata-charge">
            <div className="TABLE-ROW-new">
              <tr>
                <th>Firm Name </th>
                <th>Vendor Name</th>
                <th>Email</th>
                <th>Opening/Closing(time)</th>
                <th>Phone No</th>
                <th>City</th>
              </tr>
            </div>
            {listtype &&
              listtype.map((data) => (
                <div key={data._id}>
                  <>
                    <tr>
                      <td>{data.firmName}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>
                        {data.openingTime}/{data.closingTime}
                      </td>
                      <td>{data.whatsappNo}</td>
                      <td>{data.city}</td>
                      {data.status === false ? (
                        <>
                          <button onClick={() => Approve("true", data._id)}>
                            Approve
                          </button>
                        </>
                      ) : (
                        <>
                          <button>
                            Approved
                          </button>
                          <button onClick={() => Approve("false", data._id)}>
                            Ignore
                          </button>
                        </>
                      )}
                    </tr>
                  </>
                </div>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminRentalVehicleVendor;
