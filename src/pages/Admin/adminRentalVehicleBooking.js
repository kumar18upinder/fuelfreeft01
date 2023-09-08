import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Moment from 'react-moment';

function AdminRentalVehicleBookingList() {
  const navigate = useNavigate();
  const [vendorelist, setvendoreList] = useState({});
  let listtype = vendorelist.list;
  async function getvendoreList() {
    let resultvendore = await axios.get(
      `https://app.fuelfree.in/rentalCarBook/allList`,
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

  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <div class="admin-title">
<h2>Rental Bookings</h2>
          <table className="tabledata-charge">
            <div className="TABLE-ROW">
              <div>
              <tr>
                <th>user Name </th>
                <th>Booking Time</th>
                <th>Booking Date</th>
                <th>address</th>
                <th>Number</th>
              </tr>
            </div>
            {listtype &&
                listtype.map((data) => (
                  <div key={data._id}>
                      <>
                        <tr>
                          <td>{data.name}</td>
                          <td>{data.time}</td>
                          <td>
                          <Moment format="YYYY/MM/DD">
                          {data.preferredDate}
                         </Moment></td>
                          <td>{data.address}</td>
                          <td>{data.phoneNo}</td>
                        <Link><button>   ' ' </button></Link>
                        </tr>
                      </>
                  </div>
                ))}
                </div>
           
          </table>
        </div>
      </div>
    </div>
  );
}
export default AdminRentalVehicleBookingList;
