import "./style.css";
import axios from "axios";
import "firebase/firestore";
import "./Becomeadealer.css";
import { Helmet } from "react-helmet";
import Mobileview from "./mobileview";
import NewsLetter from "./NewsLetterEV";
import UsedVehicle from "./UsedVehicle";
import Whatpowerus from "./whatpowerus";
import Header from "../components/header";
import Footer from "../components/footer";
import WhyChooseUs from "./why-choose-us";
import Slider1 from "../components/Slider";
import { BsCarFrontFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import ElectricCarBrand from "./electricCarBrand";
import FeaturedCarSection from "./NewsliderProduct"; 
import { FaUniversalAccess, FaMoneyCheckAlt } from "react-icons/fa";

const Home = ({ handleclick }) => {
  const [visitorCount, setVisitorCount] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Retrieve the count from localStorage
    const count = parseInt(localStorage.getItem("visitorcount")) || 0;
    setVisitorCount(count);

    // Increment the count and update localStorage
    const newCount = count + 1;
    localStorage.setItem("visitorcount", newCount.toString());
  }, []);

  const [limitedProduct, setlimitedProduct] = useState([]);
  let LimitedPRO = limitedProduct.List;

  const getProductList = async () => {
    let result = await axios.get("https://app.fuelfree.in/product/list", {
      headers: {
        Accept: "application/json",
      },
    });
    let data = await result.data;
    setlimitedProduct(data);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <Header />
      <Helmet>
        <title>FuelFree</title>
        <meta
          name="google-site-verification"
          content="T-w0_OoPkvJTW6TyXJEDVIKe6f9dGdZNuAkfEsHOuUw"
        />

        <meta
          name="description"
          content="this is a webite for ev where we you can see all ev vehicle"
        />

        <meta property="og:title" content="All ev solutions" />
        <meta property="og:description" content="lets make go green" />
        <meta
          property="og:image"
          content="https://example.com/path/to/image.jpg"
        ></meta>
      </Helmet>
      <div id="banner-slider-home">
        <Slider1 />
      </div>
      <div className="desktop-view">
        <ElectricCarBrand />
        <FeaturedCarSection handleclick={handleclick} />
        <UsedVehicle />
        <WhyChooseUs />
        <section className="benefits-dealer-spotlight-area">
          <div className="tanker">
            <div className="row">
              <div className="col-lg-6">
                <div className="benefits-area">
                  <div className="dealer-title">
                    <h3 className="title" style={{ backgroundColor: "white" }}>
                      {" "}
                      <strong
                        className="before-horizontal-line-orange"
                        style={{
                          color: "#262681",
                          backgroundColor: "#fff",
                          fontSize: "32px",
                        }}
                      >
                        Benefits of{" "}
                      </strong>
                      <strong
                        className="before-horizontal-line-blue"
                        style={{ color: "#F08A04", fontSize: "32px" }}
                      >
                        Fuel Free
                      </strong>
                    </h3>
                    <p style={{ fontSize: "11px" }}>
                      Join our dealers network and get full benefits for your
                      business. Help your business growth faster and approach
                      with more potential customers
                    </p>
                  </div>
                  <div className="benefits-content">
                    <div className="single-benefits">
                      <div className="benefits-icon">
                        <i>
                          <BsCarFrontFill />
                        </i>
                      </div>
                      <div className="benefits-content">
                        <p>
                          Top notch SEO Support so that you can rank your
                          business.{" "}
                          <strong style={{ color: "#F08A04" }}>Fuel</strong>{" "}
                          <strong style={{ color: "#262681" }}>Free</strong>
                        </p>
                      </div>
                    </div>
                    <div className="single-benefits">
                      <div className="benefits-icon">
                        <i>
                          <FaUniversalAccess />
                        </i>
                      </div>
                      <div className="benefits-content">
                        <p>
                          24*7 dedicated team for the{" "}
                          <strong style={{ color: "#F08A04" }}>Customer</strong>{" "}
                          <strong style={{ color: "#262681" }}>Support</strong>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="single-benefits">
                      <div className="benefits-icon">
                        <i>
                          <FaMoneyCheckAlt />
                        </i>
                      </div>
                      <div className="benefits-content">
                        <p>
                          Top Quality Leads of potential customers for{" "}
                          <strong style={{ color: "#F08A04" }}>your</strong>{" "}
                          <strong style={{ color: "#262681" }}>
                            business.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dealer-spotlight-area">
                  <div className="dealer-title">
                    <h3
                      className="title"
                      style={{ marginLeft: "14%", width: "58%", textAlign: "center" }}
                    >
                      Dealer Spotlight
                    </h3>
                    <p style={{ fontSize: "11px" }}>
                      <h3 style={{ color: "black" }}>
                        By Becoming{" "}
                        <strong style={{ color: "#262681", fontSize: "20px" }}>
                          Fuel Free
                        </strong>{" "}
                        vendor A dealer can get acces to -
                      </h3>{" "}
                      <br /> <br />
                      <p className="para-line-benefits">
                        Personalised store to all the vendor to showcase their
                        product and services to their customers.
                      </p>
                      <br />
                      <p className="para-line-benefits">
                        Top quality leads of potential customers for your
                        business.
                      </p>
                      <br />
                      <p className="para-line-benefits">
                        Top Notch SEO support so that you can rank your
                        business.
                      </p>
                      <br />
                      <p className="para-line-benefits">
                        Details of the test drive and booking of the most
                        interested customers for the product is services.
                      </p>
                      <br />
                      <p className="para-line-benefits">
                        24*7 dedicated team for the customer support.
                      </p>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <NewsLetter />
        <Whatpowerus />
      </div>
      <Mobileview />
      <Footer />
    </div>
  );
};

export default Home;
