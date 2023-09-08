import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import Select from 'react-select'
import { Link, useNavigate } from "react-router-dom";

const LeadList = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.list;
  let count = chargingList.count;

  async function getChargingList() {
    let resultCharging = await axios.get("https://app.fuelfree.in/lead/list", {
      headers: {
        Accept: "application/json",
      },
    });
    let chargingData = await resultCharging.data;
    setChargingList(chargingData);
  }
  useEffect(() => {
    getChargingList();
  }, []);

  const gologinadmin = () => {
    if (!localStorage.getItem("Admin-Info")) {
      navigate("/admin");
    }
  };
  useEffect(() => {
    gologinadmin();
  }, []);
  const [filteredList, setFilteredList] = new useState(chargingType);
  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    const updatedList = chargingType.filter((item) => {
      const vehicleTypeMatch = item.name.toLowerCase().indexOf(query) !== -1;
      const productNameMatch =
        item.vehicleType.toLowerCase().indexOf(query) !== -1;
      const productPriceMatch =
        item.phoneNo.toString().toLowerCase().indexOf(query) !== -1;
      const DrivingRangeMatch =
        item.city.toString().toLowerCase().indexOf(query) !== -1;
        const LeadsMatch = item.vendorIds.some(
          (deal) => deal.firmName.toLowerCase().indexOf(query) !== -1
        );

      return (
        productPriceMatch ||
        productNameMatch ||
        vehicleTypeMatch ||
        LeadsMatch||
        DrivingRangeMatch
      );
    });

    setFilteredList(updatedList);
  };
  const filterByCity = (event) => {
    const query = event.value.toLowerCase();
    const updatedList = chargingType.filter((item) => {
      const  LeadcityMatch = item.city.toLowerCase().indexOf(query) !== -1;
      

      return (
        LeadcityMatch
      );
    });

    setFilteredList(updatedList);
  };

  const options = [
    { value: 'Indore', label: 'Indore' },
    { value: 'Bhopal', label: 'Bhopal' },
    { value: 'gwalior', label: 'gwalior' },
    { value: 'jabalpur', label: 'jabalpur' },
    { value: 'surat', label: 'surat' },
    { value: 'Dewas', label: 'Dewas' },
    { value: 'Ujjain', label: 'Ujjain' },
    { value: 'Vidisha', label: 'Vidisha' },
    { value: 'Sehore', label: 'Sehore' },
    { value: 'Rajgarh', label: 'Rajgarh' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <div className="admin-dashboard-outer-list">
          <div className="admin-title">
            <h3>Total Sent leads-: {count}</h3>
          </div>
          <div className="section-title">
          <Select
        defaultValue={selectedOption}
        onChange={filterByCity}
        required
        options={options}
      />
            <div className="search-text">Search Lead:</div>
            <input
              id="search-box"
              className="form-controle"
              onChange={filterBySearch}
            />
          </div>
          <div className="admin-dashboard-table">
            <div className="admin-dashboard-table ">
              <ul>
                <li id="admint-table-haeding">
                  <div className="admin-dashboard-name">
                    <span> Custmor name </span>
                    <span>PhoneNo</span>
                    <span className="admin-emil">City</span>
                    <span className="admin-emil">Vehicle</span>
                    <span className="admin-emil">firmName</span>
                  </div>
                </li>

                {filteredList ? (
                  <>
                    {filteredList &&
                      filteredList.map((item) => (
                        <li id="admint-table-haeding" key={item._id}>
                          <div className="admin-dashboard-name">
                            <span className="admin-emil">{item.name}</span>
                            <span className="admin-emil">{item.phoneNo}</span>
                            <span className="admin-emil">{item.city}</span>
                            <span className="admin-emil">
                              {item.vehicleType}
                            </span>
                            <ul>
                              {item.vendorIds.map((vendor) => (
                                <li key={vendor._id}>{vendor.firmName},</li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                  </>
                ) : (
                  <>
                    {chargingType &&
                      chargingType.map((item) => (
                        <li id="admint-table-haeding" key={item._id}>
                          <div className="admin-dashboard-name">
                            <span className="admin-emil">{item.name}</span>
                            <span className="admin-emil">{item.phoneNo}</span>
                            <span className="admin-emil">{item.city}</span>
                            <span className="admin-emil">
                              {item.vehicleType}
                            </span>
                            <ul>
                              {item.vendorIds.map((vendor) => (
                                <li key={vendor._id}>{vendor.firmName},</li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeadList;
