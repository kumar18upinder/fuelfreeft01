import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExchangeDealer() {
  const navigate = useNavigate();
  const [vendorelist, setvendoreList] = useState({});
  let listtype = vendorelist.List;

  async function getvendoreList() {
    let resultvendore = await axios.get(
      `https://app.fuelfree.in/exchangeVehicle/all/list`,
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
      `https://app.fuelfree.in/admin/exchangeVehicle/statusUpdate/${_id}?status=${status}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    window.location.reload();
    let result = await res.data;
  };

  const [count, setcount] = useState("");
  const [list, setlist] = useState("");
  console.log(list, "list");
  //search
  const setoption = async (e) => {
    let res = await axios.get(
      `https://app.fuelfree.in/vendor/filterByCity?city=${e.target.value}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    let dealer = result.search;
    let count = result.count;
    setcount(count);
    setlist(dealer);
  };

  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <div class="admin-title">
          <h3>Dealer</h3>
          <Link to="/approved-Exchange-vehicle-Dealer" className="Approved">
            <button>Approved Dealer</button>
          </Link>
          <select
            name="cars"
            id="cars"
            className="form-control"
            onChange={setoption}
          >
            <option>Select City</option>
            <option value="">All</option>
            <option value="Indore">Indore</option>
            <option value="Bhopal">Bhopal</option>
            <option value="gwalior">gwalior</option>
            <option value="jabalpur">jabalpur</option>
            <option value="Dewas">Dewas</option>
            <option value="Ujjain">Ujjain</option>
          </select>

          <table className="tabledata-charge2">
            <div>
              <tr>
                <th>Vendor Name </th>
                <th>City</th>
                <th>Email</th>
                <th>Address</th>
                <th>Status</th>
              </tr>
            </div>
            {listtype ? (
              <>
                {" "}
                {listtype &&
                  listtype.map((data) => (
                    <div key={data._id}>
                      {data.status === false ? (
                        <>
                          <tr>
                            <td>{data.name}</td>
                            <td>{data.city}</td>
                            <td>{data.email}</td>
                            <td>{data.address}</td>

                            <button onClick={() => Approve("true", data._id)}>
                              Approve
                            </button>
                            {/* <Link to={`/vendorDetails/${data._id}`}>
                              <button>See More</button>
                            </Link> */}
                            <button onClick={() => Approve("false", data._id)}>
                              Ignore
                            </button>
                          </tr>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </>
            ) : (
              <>
                {" "}
                {listtype &&
                  listtype.map((data) => (
                    <div key={data._id}>
                      {data.status === false ? (
                        <>
                          <tr>
                            <td>{data.name}</td>
                            <td>{data.city}</td>
                            <td>{data.email}</td>
                            <td>{data.address}</td>

                            <button onClick={() => Approve("true", data._id)}>
                              Approve
                            </button>
                            {/* <Link to={`/agency-visit-count/${data._id}`}>
                              <button>See More</button>
                            </Link> */}
                            <button onClick={() => Approve("false", data._id)}>
                              Ignore
                            </button>
                          </tr>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
export default  ExchangeDealer;
