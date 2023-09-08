import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ApprovedUsedVehicle() {
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
        </div>
        <div className="OUR-CARS-outer">
          {listtype &&
            listtype.map((data) => (
              <>
                {data.status === true ? (
                  <div class="Carcard" key={data._id}>
                    <img
                      alt="cycle"
                      src={`https://app.fuelfree.in/${data.Image}`}
                    ></img>
                    <div class="Cartitle">
                      <h5>{data.vehicleName}</h5>
                      <p>Current Price at Rs. {data.currentPrice}</p>
                      <p>{data.productName}</p>
                      <p>seller:{data.sellerName}</p>
                      <p>contactNo:{data.contactNo}</p>
                      <p>city:{data.city}</p>
                      <Link to={`/userprofileadmin/${data.userID}`}>
                        User details
                      </Link>
                      <Link
                        class="view-offer-a"
                        to={`/usedvehicledetailsadmin/${data._id}`}
                      >
                        View Product
                      </Link>
                      <Link
                        to={`/addvariant/${data._id}`}
                        onClick={() => Approve("false", data._id)}
                        class="view-offer-a"
                      >
                        Ignore
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
export default ApprovedUsedVehicle;
