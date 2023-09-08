import "../Admin/admin.css";
import axios from "axios";
import "./marketing.css";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";

const MarketingDealer = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.List;
  let count = chargingList.Count;

  async function getChargingList() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/admin/agency",
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

  const [Count, setcount] = useState("");
  const [list, setlist] = useState("");
  //search
  const setoption = async (e) => {
    let res = await axios.get(
      `https://app.fuelfree.in/vendor/agency/filterByCity?city=${e.value}`,
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
  const [filteredList, setFilteredList] = new useState(list);
  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    const updatedList = list.filter((item) => {
      const vehicleTypeMatch = item.name.toLowerCase().indexOf(query) !== -1;
      const DrivingRangeMatch =
        item.city.toString().toLowerCase().indexOf(query) !== -1;
      const firmNameMatch =
        item.firmName.toString().toLowerCase().indexOf(query) !== -1;
      const addressMatch =
        item.address.toString().toLowerCase().indexOf(query) !== -1;
      return (
        vehicleTypeMatch || DrivingRangeMatch || addressMatch || firmNameMatch
      );
    });

    setFilteredList(updatedList);
  };
  const options = [
    { value: "Indore", label: "Indore" },
    { value: "Bhopal", label: "Bhopal" },
    { value: "gwalior", label: "gwalior" },
    { value: "jabalpur", label: "jabalpur" },
    { value: "surat", label: "surat" },
    { value: "Dewas", label: "Dewas" },
    { value: "Ujjain", label: "Ujjain" },
    { value: "Vidisha", label: "Vidisha" },
    { value: "Sehore", label: "Sehore" },
    { value: "Rajgarh", label: "Rajgarh" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const saveId = (id) => {
    localStorage.setItem("marketinVendorId", id);
  };
  const gologinMarketer = () => {
    if (!localStorage.getItem("Marketing-Info")) {
      navigate("/marketing-login");
    }
  };
  useEffect(() => {
    gologinMarketer();
  }, []);
  return (
    <>
      <div className="marketing-side-bar2">
        <h2 style={{textAlign:"center"}}>First Select City to get Dealer List</h2>
        <div id="lead-page-id">
          <div className="lead-dashboard">
            <div className="admin-dashboard-outer-list2">
              <div className="lead-title">
                <h3>Total dealers-: {Count}</h3>
              </div>
              <div className="section-title">
                <label style={{ color: "#000" }}>Select City</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setoption}
                  required
                  options={options}
                />
                <div className="search-text">Search Here:</div>
                <input
                  id="search-box"
                  className="form-control"
                  placeholder="Search Here....."
                  onChange={filterBySearch}
                />
              </div>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Dealer Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Firm Name</th>
                  </tr>
                </thead>
                {filteredList ? (
                  <>
                    {filteredList &&
                      filteredList.map((item) => (
                        <tbody>
                          <tr key={item._id}>
                            <th scope="row">
                              <span className="admin-emil">
                                {item.name}{" "}<br/>
                                <Link
                                  to={`/marketing-leads/${item._id}`}
                                  onClick={() => saveId(item._id)}
                                >
                                  See More
                                </Link>{" "}
                              </span>
                            </th>
                            <td>{item.email}</td>
                            <td>{item.city}</td>
                            <td>{item.firmName}</td>
                          </tr>
                        </tbody>
                      ))}
                  </>
                ) : (
                  <>
                    {list &&
                      list.map((item) => (
                        <tbody>
                          <tr key={item._id}>
                            <th scope="row">
                              <span className="admin-emil">
                                {item.name}<br/>
                                <Link
                                  to={`/marketing-leads/${item._id}`}
                                  onClick={() => saveId(item._id)}
                                >
                                  See More
                                </Link>{" "}
                              </span>
                            </th>
                            <td>{item.email}</td>
                            <td>{item.city}</td>
                            <td>{item.firmName}</td>
                          </tr>
                        </tbody>
                      ))}
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MarketingDealer;
