import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useEffect, useState } from "react";
import Select from 'react-select'
import { Link, useNavigate } from "react-router-dom";

const MarketingApprove = () => {
  const navigate = useNavigate();
  const [chargingList, setChargingList] = useState({});
  let chargingType = chargingList.list;
  let count = chargingList.count;

  async function getChargingList() {
    let resultCharging = await axios.get("https://app.fuelfree.in/admin/marketing", {
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
      return (
        vehicleTypeMatch
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

  const Approve = async (status, _id) => {
    let res = await axios.patch(
      `https://app.fuelfree.in/admin/marketing/statusUpdate/${_id}?status=${status}`,
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
                    <span className="admin-emil">email</span>
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
                              {item.email}
                            </span>
                            {item.status===true?(<><button><Link to={`/dealer Added-By-Marketer/${item._id}`} >see</Link></button><button  >Approved</button><button onClick={() => Approve("false", item._id)}>Remove</button></>):(<button onClick={() => Approve("true", item._id)} >Approve</button>)}
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
                              {item.email}
                            </span>
                            <span  className='btn-marketing' >
                            {item.status===true?(<><button><Link to={`/dealer Added-By-Marketer/${item._id}`} >see</Link></button><button  >Approved</button><button onClick={() => Approve("false", item._id)}>Remove</button></>):(<button onClick={() => Approve("true", item._id)} >Approve</button>)}
                            </span>
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
export default MarketingApprove;

 
