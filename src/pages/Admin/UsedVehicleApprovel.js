import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UsedvehicleApproval() {
  const navigate = useNavigate();
  const [vendorelist, setvendoreList] = useState({});
  let listtype = vendorelist.List;
  async function getvendoreList() {
    let resultvendore = await axios.get(
      "https://app.fuelfree.in/usedVehicle/allList",
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
      `https://app.fuelfree.in/admin/usedVehicle/statusUpdate/${_id}?status=${status}`,
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
          <h3>Used vehicles</h3>
          <Link to="/approvedusedvehicle" className="Approved">
            <button>Approved Vehicle</button>
          </Link>
        </div>
        <div className="OUR-CARS-outer">
          {listtype &&
            listtype.map((data) => (
              <div class="Carcard" key={data._id}>
                <img
                  alt="cycle"
                  src={`https://app.fuelfree.in/${data.Image}`} className="used-ev-new"
                ></img>
                <div class="Cartitle">
                  <h5 className="used-name-new">Vehicle Name: {data.vehicleName}</h5>
                  <p className="used-para-new">Current Price at Rs. {data.currentPrice}</p>
                  <p className="used-para-new">Seller Name:{data.sellerName}</p>
                  <p className="used-para-new">Contact :{data.contactNo}</p>
                  <p className="used-para-new">City:{data.city}</p>
                  <Link to={`/userprofileadmin/${data.userID}`}>
                    User details
                  </Link>
                  <Link
                    class="view-offer-a"
                    to={`/usedvehicledetailsadmin/${data._id}`}
                  >
                    View Product
                  </Link>
                  {data.status === false ? (
                    <Link
                      onClick={() => Approve("true", data._id)}
                      class="view-offer-a"
                    >
                      Approve{" "}
                    </Link>
                  ) : (
                    <Link class="view-offer-a">already Approved </Link>
                  )}
                  <Link
                    to={`/addvariant/${data._id}`}
                    onClick={() => Approve("false", data._id)}
                    class="view-offer-a"
                  >
                    Ignore
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default UsedvehicleApproval;
