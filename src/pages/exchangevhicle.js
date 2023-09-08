import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";
import Audi from "../pages/images/car1.jpg";
import "./exchangevehicle.css";

function Exchangevehicle() {
  let userdata = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  let userId = userdata ? userdata._id : "";
  const [source, setsource] = useState("");
  const visitCount = async () => {
    const pageVisited = window.location.href;

    let res = await axios.post(
      `https://app.fuelfree.in/user/track-page/${userId}?source=${encodeURIComponent(
        pageVisited
      )}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      visitCount();
      setsource(window.location.href);
    }
  }, []);

  // main product
  const { id } = useParams();
  const [productDetails, setDetails] = useState("");
  let data1 = productDetails.vendorDetails;
  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/vendor/agency/details/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = await resultDetails.data;
    setDetails(data);
  }

  useEffect(() => {
    getProductdetails();
  }, []);

  const [vendorList, setvendorList] = useState({});
  let vendorType = vendorList.List;
  async function getvendorList() {
    let resultCycle = await axios.get(
      `https://app.fuelfree.in/vendor/myproduct/${ id }`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let vendorData = await resultCycle.data;
    setvendorList(vendorData);
  }

  useEffect(() => {
    getvendorList();
  }, []);
  return (
    <>
      <Header />
      <h3 className="outer-heading-exchange">Exchange Your Vehicle</h3>
      <div className="exchange-vehicle-outer">

        <div className="ExchangeVehicle-cards">
          <Link to="">
            <img src={Audi} alt="imaudi" className="Exchange" />
            <div className="Exchange-ca-ti">
              <div>
                <p>mahindra<br />
                  Starting at Rs. 250000</p>
              </div>
              <div>
                <Link to="/exchangevehicledetail">
                  <button className="view-offer-a">View More</button>
                </Link >
              </div>
            </div>
          </Link>
        </div>
        <div className="ExchangeVehicle-cards">
          <Link to="">
            <img src={Audi} alt="imaudi" className="Exchange" />
            <div className="Exchange-ca-ti">
              <div>
                <p>mahindra<br />
                  Starting at Rs. 250000</p>
              </div>

              <div>
                <Link to="/exchangevehicledetail">
                  <button className="view-offer-a">View More</button>
                </Link >
              </div>
            </div>
          </Link>
        </div>

        <div className="ExchangeVehicle-cards">

          <Link to="">
            <img src={Audi} alt="imaudi" className="Exchange" />
            <div className="Exchange-ca-ti">
              <div>
                <p>mahindra<br />
                  Starting at Rs. 250000</p>
              </div>

              <div>
                <Link to="/exchangevehicledetail">
                  <button className="view-offer-a">View More</button>
                </Link >
              </div>
            </div>
          </Link>
        </div>

        <div className="ExchangeVehicle-cards">

          <Link to="">
            <img src={Audi} alt="imaudi" className="Exchange" />
            <div className="Exchange-ca-ti">
              <div>
                <p>mahindra<br />
                  Starting at Rs. 250000</p>
              </div>
              <div>
                <Link to="/exchangevehicledetail">
                  <button className="view-offer-a">View More</button>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Exchangevehicle;
