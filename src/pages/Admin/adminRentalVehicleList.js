import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminRentalVehicleList() {
  const navigate = useNavigate();
  const [vendorelist, setvendoreList] = useState({});
  let listtype = vendorelist.list;
  async function getvendoreList() {
    let resultvendore = await axios.get(
      `https://app.fuelfree.in/carRental/list`,
      {
        headers:{
          Accept: "application/json",
        },
      }
    )
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

          <table className="tabledata-charge">
            <div className="TABLE-ROW">
              <tr>
                <th>Product Name </th>
                <th>Brand</th>
                <th>Vehicle Type</th>
                <th>Vehicle Price/h</th>
                <th>Top Speed</th>
              </tr>
            </div>
            {listtype &&
                listtype.map((data) => (
                  <div key={data._id}>
                      <>
                        <tr>
                          <td>{data.productName}</td>
                          <td>{data.Brand}</td>
                          <td>{data.vehicleType}</td>
                          <td>Rs.{data.vehiclePricePerHour}</td>
                          <td>{data.topSpeed}Km/h</td>
                          <Link to={``}>
                            <button>See More</button>
                          </Link>
                        </tr>
                      </>
                  </div>
                ))}
           
          </table>
        </div>
      </div>
    </div>
  );
}
export default AdminRentalVehicleList;
