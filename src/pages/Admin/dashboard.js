import "./admin.css";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const gologinadmin = () => {
    if (!localStorage.getItem("Admin-Info")) {
      navigate("/admin");
    }
  };
  useEffect(() => {
    gologinadmin();
  }, []);

  //For user count
  const [chargingList, setChargingList] = useState({});
  let count = chargingList.count;

  async function getUserList() {
    let resultCharging = await axios.get("https://app.fuelfree.in/user/list", {
      headers: {
        Accept: "application/json",
      },
    });
    let chargingData = await resultCharging.data;
    setChargingList(chargingData);
  }

  useEffect(() => {
    getUserList();
  }, []);

  //Agency dealer
  const [vendorelist, setvendoreList] = useState({});
  let agencyvendorCount = vendorelist.Count;
  async function getvendoreList() {
    let resultvendore = await axios.get(
      "https://app.fuelfree.in/admin/agency",
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

  //charging dealer
  const [chargindealer, setChargingdealer] = useState({});
  let ChargingDealercount = chargindealer.Count;
  async function getChargingList() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/admin/charging",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingData = await resultCharging.data;
    setChargingdealer(chargingData);
  }

  useEffect(() => {
    getChargingList();
  }, []);

  //service
  const [sevicelist, setsrviceList] = useState({});
  let serviceCount = sevicelist.Count;
  async function getvendorcount() {
    let resultvendore = await axios.get(
      "https://app.fuelfree.in/admin/service",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let vendoreData = await resultvendore.data;
    setsrviceList(vendoreData);
  }

  useEffect(() => {
    getvendorcount();
  }, []);

  //used vehicle
  const [usedvehicle, setusedList] = useState({});
  let UsedVehicleCount = usedvehicle.count;
  async function usedvehicleList() {
    let resultvendore = await axios.get(
      "https://app.fuelfree.in/usedVehicle/allList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let vendoreData = await resultvendore.data;
    setusedList(vendoreData);
  }

  useEffect(() => {
    usedvehicleList();
  }, []);

  //Test drive
  const [testdrivedata, settestdrivedata] = useState({});
  let testdrivecount = testdrivedata.count;

  async function getTestdrive() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/testDrive/allBookingList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingData = await resultCharging.data;
    settestdrivedata(chargingData);
  }
  useEffect(() => {
    getTestdrive();
  }, []);

  //bookings
  const [bookingsdata, setbookingsdata] = useState({});
  let bookingscount = bookingsdata.count;

  async function getbookings() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/productBook/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingData = await resultCharging.data;
    setbookingsdata(chargingData);
  }
  useEffect(() => {
    getbookings();
  }, []);

  //Enquiryy
  const [enquirydata, setenquirydata] = useState({});
  let enquirycount = enquirydata.count;
  async function getenquirydata() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/enquiry/enquiryList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingData = await resultCharging.data;
    setenquirydata(chargingData);
  }

  useEffect(() => {
    getenquirydata();
  }, []);

  // offerss
  const [OfferList, setOfferList] = useState({});
  let OfferTypecount = OfferList.count;
  async function getenquiry() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/admin/offerList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingData = await resultCharging.data;
    setOfferList(chargingData);
  }
  useEffect(() => {
    getenquiry();
  }, []);

  //Newsletter
  const [Newsletter, setNewsletter] = useState({});
  let NewsletterCount = Newsletter.count;

  async function getNewsletter() {
    let resultCharging = await axios.get(
      "https://app.fuelfree.in/enquiry/enquiryList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let chargingData = await resultCharging.data;
    setNewsletter(chargingData);
  }
  useEffect(() => {
    getNewsletter();
  }, []);

  //News
  const [newsAllList, setNewsAllList] = useState({});
  let newsCount = newsAllList.count;
  async function getAllNewsList() {
    let resultCycle = await axios.get("https://app.fuelfree.in/news/all", {
      headers: {
        Accept: "application/json",
      },
    });
    let cycleData = await resultCycle.data;
    setNewsAllList(cycleData);
  }

  useEffect(() => {
    getAllNewsList();
  }, []);

  return (
    <div id="admin-page-id">
      <Adminsidebar />
      <div className="admin-dashboard">
        <div className="admin-dashboard-outer">
          {/* ================================================= */}
          <div className="admin-dashbord-content">
            <div className="admin-dashbord-content-inner">
              <div className="dashboard-inner-content">
                <div className="doashboard-content-line">
                  <h5>all user</h5>
                  <span>{count}</span>
                  <Link to="/userlist">
                    <button>See all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-dashbord-content-inner">
            <div className="dashboard-inner-content">
              <div className="doashboard-content-line">
                <h5>News List</h5>
                <span className="news-count">{newsCount}</span>
                <Link to="/news-list-admin">
                  <button>See all</button>
                </Link>
              </div>
            </div>
          </div>
          {/* ========================================================= */}

          {/* ================================================= */}
          <div className="admin-dashbord-content">
            <div className="admin-dashbord-content-inner">
              <div className="dashboard-inner-content">
                <div className="doashboard-content-line">
                  <h5>Agency Dealer</h5>
                  <span>{agencyvendorCount}</span>
                  <Link to="/amindeler">
                    <button>See all</button>
                  </Link>
                </div>
                <div className="doashboard-content-line">
                  <h5>Charging Dealer</h5>
                  <span>{ChargingDealercount}</span>
                  <Link to="/adminchargingstation">
                    <button>See all</button>
                  </Link>
                </div>
                <div className="doashboard-content-line">
                  <h5>Service Dealer</h5>
                  <span>{serviceCount}</span>
                  <Link to="/adminservicecenter">
                    <button>See all</button>
                  </Link>
                </div>
                <div className="doashboard-content-line">
                  <h5>Exchange Dealer</h5>
                  <span>{'8'}</span>
                  <Link to="/Exchange-vehicle-Dealer">
                    <button>See all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ========================================================= */}

          {/* ================================================= */}
          <div className="admin-dashbord-content">
            <div className="admin-dashbord-content-inner">
              <div className="dashboard-inner-content">
                <div className="doashboard-content-line">
                  <h5>Total Used Vehicles</h5>
                  <span>{UsedVehicleCount}</span>
                  <Link to="/usedvehicleApproval">
                    <button>See all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ========================================================= */}
          {/* ================================================= */}
          <div className="admin-dashbord-content">
            <div className="admin-dashbord-content-inner">
              <div className="dashboard-inner-content">
                <div className="doashboard-content-line">
                  <h5>TestDrives</h5>
                  <span>{testdrivecount}</span>
                  <Link to="/Admintestdrive">
                    <button>See all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ========================================================= */}
          <div className="admin-dashbord-content">
            <div className="admin-dashbord-content-inner">
              <div className="dashboard-inner-content">
                <div className="doashboard-content-line">
                  <h5>Total product bookings</h5>
                  <span>{bookingscount}</span>
                  <Link to="/totalbookingsAdmin">
                    <button>See all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-dashbord-content">
            <div className="admin-dashbord-content-inner">
              <div className="dashboard-inner-content">
                <div className="doashboard-content-line">
                  <h5>Total Enquiry</h5>
                  <span>{enquirycount}</span>
                  <Link to="/enquiryadmin">
                    <button>See all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-dashbord-content">
            <div className="admin-dashbord-content-inner">
              <div className="dashboard-inner-content">
                <div className="doashboard-content-line">
                  <h5>Total Newsletter</h5>
                  <span>{NewsletterCount}</span>
                  <Link to="/enquiryadmin">
                    <button>See all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          <div className="admin-dashbord-content">
            <div className="admin-dashbord-content-inner">
              <div className="dashboard-inner-content">
                <div className="doashboard-content-line">
                  <h5>sent Leads </h5>
                  <span></span>
                  <Link to="/totalsentleads">
                    <button>See all</button>
                  </Link>
                </div>
                <div className="doashboard-content-line">
                  <h5>Lead List </h5>
                  <span></span>
                  <Link to="/lead-list">
                    <button>See all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================== */}

          <div className="admin-dashbord-content">
            <div className="admin-dashbord-content-inner">
              <div className="dashboard-inner-content">
                <div className="doashboard-content-line">
                  <h5>Offers Leads</h5>
                  <span>{OfferTypecount}</span>
                  <Link to="/">
                    <button>See all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
