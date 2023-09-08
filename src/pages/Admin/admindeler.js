import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Select from 'react-select';
import Adminsidebar from "./adminsidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Amindeler() {
  const navigate = useNavigate();
  const [vendorelist, setvendoreList] = useState({});
  let listtype = vendorelist.List;

  async function getvendoreList() {
    let resultvendore = await axios.get(
      `https://app.fuelfree.in/admin/agency`,
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
      `https://app.fuelfree.in/admin/agency/statusUpdate/${_id}?status=${status}`,
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

  const [selectedOption, setSelectedOption] = useState(null);
  const setcity=(selectedOption)=>{
    setSelectedOption(selectedOption.value);
    filterBySearch(selectedOption.value)
  }

  const [filteredList, setFilteredList] = new useState(listtype);
  const filterBySearch = (value) => {
    const query = value.toLowerCase();
    const updatedList = listtype.filter((item) => {
      const firmNameMatch = item.city.toLowerCase().indexOf(query) !== -1;
      return firmNameMatch ;
    });
    setFilteredList(updatedList);
  };
  const options = [
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'gwalior', label: 'gwalior' },
    { value: 'jabalpur', label: 'jabalpur' },
    { value: 'Dewas', label: 'Dewas' },
    { value: 'Ujjain', label: 'Ujjain' },
    { value: 'Vidisha', label: 'Vidisha' },
    { value: 'Sehore', label: 'Sehore' },
    { value: 'Rajgarh', label: 'Rajgarh' },
  ];
 

  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <div class="admin-title">
          <h3>Dealer</h3>
          <Link to="/approvedagency" className="Approved">
            <button>Approved Dealer</button>
          </Link>
          <Select
        defaultValue={selectedOption}
        onChange={setcity}
        required
        options={options}
      />

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
            {filteredList ? (
              <>
                {" "}
                {filteredList &&
                  filteredList.map((data) => (
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
                            <Link to={`/vendorDetails/${data._id}`}>
                              <button>See More</button>
                            </Link>
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
                            <Link to={`/agency-visit-count/${data._id}`}>
                              <button>See More</button>
                            </Link>
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
export default Amindeler;
