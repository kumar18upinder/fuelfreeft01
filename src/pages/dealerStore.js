import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./storepage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../pages/images/image.png";
import Appstore from "../pages/images/app-store.jpeg";
import Appstoregoogle from "../pages/images/app-store-google.jpeg";
import Footer from "../components/footer";
import eboquos from "../pages/images/eboqis-sider.jpg";
import nexonsider from "../pages/images/nexon-ev-prime-sider.jpg";
import olasider from "../pages/images/ola-s1-sider.jpg";
import "./electricCarBrand.css";
import tvs from "../images/tvs.png";
import volvo from "../images/volvo.png";
import Audilogo from "../images/Audi.png";
import Kinaticlogoone from "../images/kinetic.png";
import MG from "../images/mg.png";
import ola from "../images/ola.png";
import eicher from "../images/eicher.png";
import kisspngmercedesbenz from "../images/kisspng-mercedes-benz.png";
import kia from "../images/kia.png";
import Mahindra from "../images/Mahindra.png";
import tata from "../images/tata.png";
import hyundai from "../images/hyundai.png";
// import Komaki from "../pages/images/komaki.jpeg";
import { useRef } from "react";
import Modal from "react-modal";
import bikestore from "../pages/images/bgbikestore2.png";
import car from "../pages/images/bmw-ix-removebg-preview.png";
import scooter from "../pages/images/scooter-bg-removebg-preview.png";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaBicycle } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { MdElectricRickshaw } from "react-icons/md";

const DealerStore = () => {
  // ===============for hover
  $(document).ready(function () {
    $(".dealer-product-content").hover(
      function () {
        $(this).addClass("dealer-product-hoved");
      },
      function () {
        $(this).removeClass("dealer-product-hoved");
      }
    );
  });
  // ===============for hover

  const Navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
  }, []);

  const gologin = () => {
    if (!localStorage.getItem("user")) {
      Navigate("/login");
      window.location.reload();
    }
  };
  $(document).ready(function () {
    $(".prodiuct-specifiacaton-title").click(function () {
      $(this).parent("div").isToggled("opn-product-content");
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // main product
  const { id } = useParams();
  const [productDetails, setDetails] = useState("");
  let data1 = productDetails.vendorDetails;
  function extractCoordinatesFromGoogleMapsURL(url) {
    const params = new URLSearchParams(new URL(url?url:'https://www.google.com/maps/search/?api=1&query=22.7226274,75.8866805').search);
    const query = params.get("query");
    if (!query) {
      return null; // Invalid URL
    }
    const [latitude, longitude] = query.split(",").map(parseFloat);
    if (isNaN(latitude) || isNaN(longitude)) {
      return null; // Invalid coordinates in URL
    }
    return { latitude, longitude };
  }

  let url = data1?.googleMapURL;
  const coordinates = extractCoordinatesFromGoogleMapsURL(url);
  console.log(coordinates, "ddd");
  const apiKey = "AIzaSyA_2eybqcLSYvWm2bn4PIoi_wYCEnjYlkQ"; // Replace with your API key

  const iframeSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${coordinates?.latitude},${coordinates?.longitude}&zoom=17`;
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
    // (data)
    setDetails(data);
  }

  useEffect(() => {
    getProductdetails();
  }, []);

  const [vendorList, setvendorList] = useState({});
  let vendorType = vendorList.List;
  console.log(vendorType, "ppp");
  async function getvendorList() {
    let resultCycle = await axios.get(
      `https://app.fuelfree.in/vendor/myproduct/${id}`,
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
    <div id="dealer-store-id">
      <section id="dealer-header">
        <div className="tanker">
          <div className="dealer-header-outer">
            <div className="dealer-header-logo">
              {data1 && data1.firmName}
              <div class="back-to-home">
                <a href="/">
                  <BsFillArrowLeftSquareFill />
                  back to home page
                </a>
              </div>
            </div>

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
            <span>Get up to 50% off Today Only!</span>
            <h2>A brand new way to buy new electric vehicle</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad,{" "}
            </p>
            <a href="">See products</a>
          </div>
          <div className="dealer-banner_img">
            <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/slider/home4-slider1-layer.webp"></img>
          </div>
        </div>
      </section>
      <section id="dealer-map-idd">
        <div class="tanker">
          <iframe
            src={iframeSrc}
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section id="deeler-Cotegory-idd">
        <div className="tanker">
          <div className="deeler-Cotegory-outer">
            <div className="deeler-Cotegory-content">
              <Link to=""></Link>
              <FaBicycle />
              <sapn>Cycle</sapn>
            </div>

            <div className="deeler-Cotegory-content">
              <Link to=""></Link>
              <FaMotorcycle />
              <sapn>Motorcycle</sapn>
            </div>

            <div className="deeler-Cotegory-content">
              <Link to=""></Link>
              <MdElectricRickshaw />
              <sapn>Rickshaw</sapn>
            </div>
          </div>
        </div>
      </section>

      <div className="mobile" ref={secRef}></div>

      <div className="tanker electric-vehicle-border  tanker">
        <h3 className="brands-heading">Brands You Will Get</h3>
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
        </div>
      </div>
      <div className="vehicles-you-found" ref={scRef}>
        <div className="tanker">
          <div className="dealer-section-title">
            <h2>
              {" "}
              <b>EXPLORE</b> PRODUCTS
            </h2>
          </div>
        </div>

        <div className="tanker">
          {vendorType ? (
            <div className="dealer-product-list">
              {vendorType &&
                vendorType.map((data) => (
                  <div class="dealer-product-content" key={data._id}>
                    <Link
                      to={`/products/${data.productName}/${data.VehicleType}/${data._id}`}
                    >
                      <div className="dealer-product-content-boorder-div">
                        <div class="selaer-firt-secand-img">
                          <img
                            className="delaer-pr-first-img"
                            alt="vendor"
                            src={`https://app.fuelfree.in/${data.productImage}`}
                          ></img>
                          <img
                            className="delaer-pr-secnd-img"
                            src="https://app.fuelfree.in//uploads/image_1691487579332.download%20(1).jpeg"
                          ></img>
                        </div>
                        <div class="dealer-product-text">
                          <h5>{data.productName}</h5>
                          <p>Starting at Rs. {data.productPrice}</p>
                          <p>{data.productName}</p>

                          <div className="deler-product-btn">
                            <Link
                              to={`/book-your-test-drive/${
                                data && data.productName
                              }/${data && data.VehicleType}/${
                                data && data.Brand
                              }/${data && data.city}`}
                              className="deler-product-testdrive"
                            >
                              Book Test Drive
                            </Link>
                            <Link
                              className="view-offer-a"
                              to={`/buy-electric-vehicle/${
                                data && data.productName
                              }/${data && data.productPrice}/${
                                data && data.VehicleType
                              }/${data && data.Brand}/${data && data.city}`}
                              onClick={gologin}
                            >
                              Buy Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          ) : (
            <div className="no-product">No Products Available</div>
          )}
        </div>
      </div>

      <section id="about-delaler">
        <div className="tanker">
          <h6>Nam provident sequi</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            provident sequi, nemo sapiente culpa nostrum rem eum perferendis
            quibusdam, magnam a vitae corporis! Magnam enim modi, illo harum
            suscipit tempore aut dolore doloribus deserunt voluptatum illum, est
            porro? Ducimus dolore accusamus impedit ipsum maiores, ea iusto
            temporibus numquam eaque mollitia fugiat laborum dolor tempora
            eligendi voluptatem quis necessitatibus nam ab?
          </p>
          <div className="store-image-outer" ref={seRef}>
            <div className="mobile-view-home">
              <img
                className="img-outer-side"
                src="https://images.hindustantimes.com/auto/img/2022/02/07/600x338/BLive_store_1644236388477_1644236397711.jpg"
                alt="fuelfree"
              ></img>
            </div>
            <div class="deler-about-right">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                nisi tempora quibusdam libero possimus magni impedit a, facere
                recusandae eos ut at quod sed praesentium!
              </p>
              {/* ========================== */}
              <div className="about-dealer-graph">
                <h3>Integrative control </h3>
                <div className="about-dealer-graph-content">
                  <p>58%</p>
                  <span
                    style={{ width: "58%", backgroundColor: "lightblue" }}
                  ></span>
                </div>
              </div>
              {/* ============================= */}

              {/* ========================== */}
              <div className="about-dealer-graph">
                <h3>Integrative control </h3>
                <div className="about-dealer-graph-content">
                  <p>30%</p>
                  <span style={{ width: "30%" }}></span>
                </div>
              </div>
              {/* ============================= */}

              {/* ========================== */}
              <div className="about-dealer-graph">
                <h3>Costumer support </h3>
                <div className="about-dealer-graph-content">
                  <p>80%</p>
                  <span
                    style={{ width: "80%", backgroundColor: "#5cf047" }}
                  ></span>
                </div>
              </div>
              {/* ============================= */}
            </div>
          </div>
        </div>
      </section>
      <section id="deler-ffoter">
        <div className="tanker">
          <div className="deler-ffoter-outr">
            <div className="deler-ffoter-content">
              <div className="deler-ffoter-logo">
                <h2>{data1 && data1.name}</h2>
              </div>
            </div>

            <div className="deler-ffoter-content">
              <h3>Important link</h3>
              <ul>
                <li>
                  <a href="">Store Details</a>
                </li>
                <li>
                  <a href="">Store Details</a>
                </li>
                <li>
                  <a href="">Vehicles</a>
                </li>
              </ul>
            </div>

            <div className="deler-ffoter-content">
              <h3>Contact us</h3>
              <ul>
                <div class="mob-main">
                  <div class="mob-icon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      class="mob-fill"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      ></path>
                    </svg>
                  </div>
                  <div class="mob-text">
                    <li class="mob-number-text">
                      <a href="tel:7880088944">7880088944</a>
                    </li>
                    <li class="mob-number-text">
                      <a href="tel:7880088955">7880088955</a>
                    </li>
                  </div>
                </div>
                <li>
                  <a href="mailto:info@fuelfree.in">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="mail-to"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
                    </svg>
                    info@fuelfree.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef}>
        <h3 className="vendor-details">Vendor Details</h3>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td sty>Vendor Name</td>
              <td>{data1 && data1.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{data1 && data1.email}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{data1 && data1.Brand}</td>
            </tr>
            <tr>
              <td>Vehicle Deals</td>
              <td>{data1 && data1.vehicleDeals}</td>
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

      <Footer />
    </div>
  );
};

export default DealerStore;
