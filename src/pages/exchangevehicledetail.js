import "./storepage.css";
import axios from "axios";
import React from "react";
import { useRef } from "react";
import Modal from "react-modal";
import "./electricCarBrand.css";
import MG from "../images/mg.png";
import tvs from "../images/tvs.png";
import ola from "../images/ola.png";
import kia from "../images/kia.png";
import tata from "../images/tata.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import volvo from "../images/volvo.png";
import eicher from "../images/eicher.png";
import Footer from "../components/footer";
import Audilogo from "../images/Audi.png";
import hyundai from "../images/hyundai.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Mahindra from "../images/Mahindra.png";
import "slick-carousel/slick/slick-theme.css";
import Komaki from "../pages/images/komaki.jpeg";
import Kinaticlogoone from "../images/kinetic.png";
import Appstore from "../pages/images/app-store.jpeg";
import bikestore from "../pages/images/bgbikestore2.png";
import car from "../pages/images/bmw-ix-removebg-preview.png";
import Appstoregoogle from "../pages/images/app-store-google.jpeg";
import kisspngmercedesbenz from "../images/kisspng-mercedes-benz.png";
import scooter from "../pages/images/scooter-bg-removebg-preview.png";
import Header from "../components/header";

function Exchangevehicledetails() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //visitor count
  let userdata = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  let userId = userdata ? userdata._id : "";
  const visitCount = async () => {
    const pageVisited = window.location.href;
    let res = await axios.post(
      `https://app.fuelfree.in/user/track-page/${userId}?source=${encodeURIComponent(
        pageVisited
      )}`,
      {
        headers: {
          Accept: "aaplication/json",
        },
      }
    );
    let result = await res.data;
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      visitCount();
    }
  }, [userdata]);

  // main product
  const { id } = useParams();
  const [productDetails, setDetails] = useState("");
  let data1 = productDetails.vendorDetails;
  async function getProductdetails() {
    let resultDetails = await axios.get(
      `https://app.fuelfree.in/exchangeVehicle/details/${id}`,
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
  }, [id]);
const sectionRef = useRef(null);
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const seRef = useRef(null);
  const scrollToSec = () => {
    seRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const secRef = useRef(null);
  const scrollToS = () => {
    secRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scRef = useRef(null);

  const scrollTo = () => {
    scRef.current.scrollIntoView({ behavior: "smooth" });
  };

 
  return (
    <div>
    <Header/>
      {/* <div className="charging-cls">
        <div className="charging-page">
          <div>
            <div className="store-para1">
              <h4 className="storepage-heading">{data1 && data1.firmName}</h4>
              <div class="container">
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Vendor Name</td>
                      <td>{data1 && data1.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{data1 && data1.email}</td>
                    </tr>
                    <tr>
                      <td>Vehicle Deals</td>
                      <td>{data1 && data1.vehicleDeals}</td>
                    </tr>
                    <tr>
                      <td>Whatsapp No.{" "}/{" "}Alternate No.</td>
                      <td>{data1 && data1.whatsappNo}{" "}/{" "}{data1 && data1.alternatePhoneNo}</td>
                    </tr>
                    <tr>
                      <td>Opening Time{" "}/{" "}Closing Time</td>
                      <td>
                        {data1 && data1.openingTime}{" "}/{" "}{data1 && data1.closingTime}
                      </td>
                    </tr>
                    <tr>
                      <td>About the Store</td>
                      <td>{data1 && data1.aboutTheStore}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{data1 && data1.address}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{data1 && data1.city}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        <div id="dealer-store-id">
      <section id="dealer-header">
        <div className="tanker">
          <div className="dealer-header-outer">
            <div className="dealer-header-logo">{data1 && data1.firmName}</div>
            <div className="dealer-header-link">
              <Link to="" className="map" onClick={scrollToSection}>
                Store Details
              </Link>
              <Link className="map" onClick={scrollToSec}>
                About
              </Link>
              <Link className="map" onClick={scrollToS}>
                Brands
              </Link>
              <Link className="map" onClick={scrollTo}>
                Vehicles
              </Link>
            </div>
            <div className="dealer-header-contact">
              <Link className="contact-store" onClick={openModal}>
                contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="dealer-banner">
        <div className="dealer-banner-outer">
          <div className="dealer-banner-text">
            <h2>A brand new way to exchange electric vehicle</h2>
          </div>
        </div>
      </section>

      <div className="mobile" ref={secRef}></div>

      <div className="tanker electric-vehicle-border  tanker">
        <div className="electric-vehicle-logo-name"></div>
        <div className="vehicle-log-outer m-4">
          <Link className="company-logo" to="/hyundai">
            <img
              src={hyundai}
              alt="1ampere"
              className="electric-car-brand-img"
            />
            <p className="logo-car">Hyundai</p>
          </Link>
          <Link className="company-logo" to="/tata">
            <img src={tata} alt="1ampere" className="electric-car-brand-img" />
            <p className="logo-car">Tata</p>
          </Link>
          <Link className="company-logo" to="/mahindra">
            <img
              src={Mahindra}
              alt="1ampere"
              className="electric-car-brand-img"
            />
            <p className="logo-car">Mahindra</p>
          </Link>
          <Link className="company-logo" to="/kia">
            <img src={kia} alt="1ampere" className="electric-car-brand-img" />
            <p className="logo-car">Kia</p>
          </Link>
          <Link className="company-logo" to="/mercedesbenz">
            <img
              src={kisspngmercedesbenz}
              alt="1ampere"
              className="electric-car-brand-img"
            />
            <p className="logo-car">Mercedes-Benz</p>
          </Link>
          <Link className="company-logo" to="/audi">
            <img
              src={Audilogo}
              alt="1ampere"
              className="electric-car-brand-img"
            />
            <p className="logo-car">Audi</p>
          </Link>
          <Link className="company-logo" to="/volvo">
            <img src={volvo} alt="1ampere" className="electric-car-brand-img" />
            <p className="logo-car">Volvo</p>
          </Link>

          <Link className="company-logo" to="/tvs">
            <img src={tvs} alt="1ampere" className="electric-car-brand-img" />
            <p className="logo-car">TVS Motor</p>
          </Link>
          <Link className="company-logo" to="/eicher">
            <img
              src={eicher}
              alt="1ampere"
              className="electric-car-brand-img"
            />
            <p className="logo-car">Eicher</p>
          </Link>
          <Link className="company-logo" to="/ola">
            <img src={ola} alt="1ampere" className="electric-car-brand-img" />
            <p className="logo-car">Ola</p>
          </Link>
          <Link className="company-logo" to="/kinetic">
            <img
              src={Kinaticlogoone}
              alt="1ampere"
              className="electric-car-brand-img"
            />
            <p className="logo-car">Kinatic</p>
          </Link>
          <Link className="company-logo" to="/mg">
            <img src={MG} alt="1ampere" className="electric-car-brand-img" />
            <p className="logo-car">MG</p>
          </Link>
          <Link className="company-logo" to="/komaki">
            <img
              src={Komaki}
              alt="1ampere"
              className="electric-car-brand-img"
              id="elct-brnd-komaki"
            />
            <p className="logo-car">Komaki</p>
          </Link>
        </div>
      </div>
    
      <div className="dealer-banner-text">
        <h2>Explore the most explosion of categories</h2>
      </div>
      <div className="dealer-banner-text-p">
        <p>Download the app and explore the full power of shopping.</p>
      </div>
      {/* </div> */}
      <div className="fot-store-outer">
        <div className="fot-store">
          <Link to="">
            <img className="app-store-image" src={Appstore} alt="store" />
          </Link>
          <Link to="">
            <img
              className="app-store-image"
              src={Appstoregoogle}
              alt="store"
            ></img>
          </Link>
        </div>
      </div>

      <div className="store-image-outer" ref={seRef}>
        <div>
          <h3 className="store-image-heading">
            Everything you
            <br /> need with the
            <br /> Big brands.
          </h3>
          <p className="store-image-para">
            Leading Analysts have made us one of the most
            <br /> acclaimed ecommerce Platforms.
          </p>
        </div>

        <div className="mobile-view-home">
          <img className="img-outer-side" src={bikestore} alt="fuelfree"></img>
        </div>
      </div>

      <div className="store-image-oute">
        <div className="mobile-view-home">
          <img
            className="img-outer-side"
            style={{ width: "600px" }}
            src={car}
            alt="fuelfree"
          ></img>
        </div>
        <div>
          <h3 className="store-image-heading">
            A lot of amazing
            <br /> Products are
            <br /> Being Created.
          </h3>
          <p className="store-image-para">
            Leading Analysts have made us one of the most
            <br /> acclaimed ecommerce Platforms.
          </p>

        </div>
      </div>

      <div className="store-image-outer">
        <div>
          <h3 className="store-image-heading">
            You'll love
            <br />
            Our People.
            <br />
          </h3>
          <p className="store-image-para">
            Leading Analysts have made us one of the most
            <br /> acclaimed ecommerce Platforms.
          </p>
        </div>

        <div className="mobile-view-home">
          <img className="img-outer-side" src={scooter} alt="fuelfree"></img>
        </div>
      </div>

      <section ref={sectionRef}>
        <h3 className="vendor-details">Vendor Details</h3>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>Vendor Name</td>
              <td>{data1 && data1.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{data1 && data1.email}</td>
            </tr>
            <tr>
              <td>Whatsapp No. / Alternate No.</td>
              <td>
                {data1 && data1.whatsappNo} / {data1 && data1.alternatePhoneNo}
              </td>
            </tr>
            <tr>
              <td>Opening Time / Closing Time</td>
              <td>
                {data1 && data1.openingTime} / {data1 && data1.closingTime}
              </td>
            </tr>
            <tr>
              <td>GST Number</td>
              <td>{data1 && data1.GSTNo? (<>{data1 && data1.GSTNo}</>):("-")}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{data1 && data1.address}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{data1 && data1.city}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div className="dealer-bg">
          <h3>Whatsapp No. / Alternate No.</h3>
          <p>
            {data1 && data1.whatsappNo} / {data1 && data1.alternatePhoneNo}
          </p>
          <h3>Email</h3>
          <p>{data1 && data1.email}</p>
          <button className="close-btn-popup" onClick={closeModal}>
            close
          </button>
        </div>
      </Modal>
    </div>
      <Footer />
    </div>
  );
}

export default Exchangevehicledetails;
