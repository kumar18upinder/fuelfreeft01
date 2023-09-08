import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ApprovedExchangeDealer() {
  const navigate = useNavigate();
  const [vendorelist, setvendoreList] = useState({});
  let listtype = vendorelist.List;
  async function getvendoreList() {
    let resultvendore = await axios.get(
      "https://app.fuelfree.in/exchangeVehicle/all/list",
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
  //search
  const [count,setcount]=useState('')
  const [list,setlist]=useState('')
  console.log(list,'list')
  //search
  const setoption = async (e) => {
    let res = await axios.get(
      `https://app.fuelfree.in/vendor/agency/filterByCity?city=${e.target.value}`,
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
          <h3>Approved  Dealer</h3>
          <h3>number--:{count}</h3>
          <Link to="/Exchange-vehicle-Dealer" className="Approved">
            <button>All agency Dealer</button>
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
          <option value="Vidisha">Vidisha</option>
            <option value="Sehore">Sehore</option>
            <option value="Rajgarh">Rajgarh</option>
          </select>
        </div>
        <table className="tabledata-charge">
          <div>
            <tr>
              <th> Vendor visitCount</th>
              <th> Vendor name </th>
              <th> City</th>
              <th> Email</th>
              <th>Address</th>
              <th>status</th>
            </tr>
          </div>
          {listtype ? (
            <>
              {listtype &&
                listtype.map((data) => (
                  <div key={data._id}>
                    {data.status === true ? (
                      <tr>
                        <td>
                          dashboard visit-:{data.visitCount} <br/>
                           Lead visit-:
                          {data.leadsSectionVisited}{" "}
                        </td>
                        <td>{data.name}</td>
                        <td>{data.city}</td>
                        <td className="widthsection">{data.email}</td>
                        <td>{data.address}</td>
                        {/* <Link to={`/agency-visit-count/${data._id}`}>
                          <button>see</button>
                        </Link> */}
                        <button onClick={() => Approve("false", data._id)}>
                          Ignore
                        </button>
                      </tr>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
            </>
          ) : (
            <>
              {listtype &&
                listtype.map((data) => (
                  <div key={data._id}>
                    {data.status === true ? (
                      <tr>
                        <td>
                          dashboard visit-:{data.visitCount} <br/>
                           Lead visit-:
                          {data.leadsSectionVisited}
                        </td>
                        <td>{data.name}</td>
                        <td>{data.city}</td>
                        <td className="widthsection">{data.email}</td>
                        <td>{data.address}</td>
                        {/* <Link to={`/agency-visit-count/${data._id}`}>
                          <button>see</button>
                        </Link> */}
                        <button onClick={() => Approve("false", data._id)}>
                          Ignore
                        </button>
                      </tr>
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
  );
}
export default ApprovedExchangeDealer;
