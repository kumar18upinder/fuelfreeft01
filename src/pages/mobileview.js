import { Link } from "react-router-dom";
import mobbtn from "../pages/images/mobbtn.jpeg";
import mobbtn1 from "../pages/images/mobbtn1.jpeg";
import mobbtn2 from "../pages/images/mobbtn2.jpeg";
import mobbtn3 from "../pages/images/mobbtn3.jpeg";
import mobbtn4 from "../pages/images/mobbtn4.jpeg";
import mobbtn5 from "../pages/images/mobbtn5.jpeg";
import mobbtn6 from "../pages/images/mobbtn6.jpeg";
import mobbtn7 from "../pages/images/mobbtn7.jpeg";
import mobbtn8 from "../pages/images/mobbtn8.jpeg";
import you from "../pages/images/you.png";
import ins from "../pages/images/ins.png";
import axios from "axios";
import { useState } from "react";
import UsedVehicle from "./UsedVehicle";
import Whatpowerus from "./whatpowerus";
import fac from "../pages/images/fac.png";
import lin from "../pages/images/lin.png";
import twi from "../pages/images/twi.png";
import { BsCarFrontFill } from "react-icons/bs";
import luna from "../pages/images/luna_btn.jpeg";
import solar from "../pages/images/solar_btn.png";
import newlater from "./images/consultation.png";
import ElectricCarBrand from "./electricCarBrand";
import FeaturedCarSection from "./NewsliderProduct";
import Mobileslider from "../components/mobileslider";
import dealers from "../pages/images/dealer_btn.jpeg";
import appstore from "../pages/images/app-store.jpeg";
import { toast, ToastContainer } from "react-toastify";
import emailnewsletter from '../images/emailnewsletter.png';
import weareavailable from "../pages/images/weareavailable.jpg";
import socialmideaicon from "../pages/images/socialmediaicon.png";
import appstoregoogle from "../pages/images/app-store-google.jpeg";
import { FaMoneyCheckAlt, FaUniversalAccess } from "react-icons/fa";
import ModalBox from "../components/modalBox";
import DealerListModalBox from "../components/dealerListModalBox";
import ChargingModelBox from "../components/testingpages/chargingModelBox";

function Mobileview() {
  const [PhoneNO, setPhoneNo] = useState("");
  async function subscribe() {
    let item = {
      PhoneNO,
    };
    let res = await axios.post(
      "https://app.fuelfree.in/subscribe/subscribecreate",
      item,
      {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    if (result.success === "success") {
      toast.success(result.message);
    } else {
      toast.error(result.error);
    }
  }

    ///////charging Modal/////
    const [ischargingOpen, setIschargingOpen] = useState(false);
    const [selectchargintitem,setchargingitem]=useState('')
   
 
    const openchargingModal = (item) => {
     setIschargingOpen(true);
     setchargingitem(item);
    };
  
    const closechargingModal = () => {
     setIschargingOpen(false);
    };

      ///////Dealer Modal /////
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const openDealerModal = (item) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const closeDealerModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ToastContainer />
      <div id="mobile-vew-home-id">
        <Mobileslider />
        <section id="mobile-cotegory">
          <div class="mobile-section-headfing">
            <span></span>
            <h3>Our Categories</h3>
            <span></span>
          </div>
          <div className="tanker">
            <div className="mobile-cotegory-outer">
              <div className="mobile-cotegory-content">
                <Link to="/electric-cycle"></Link>
                <img src={mobbtn3} alt="cotegory-img"></img>
              </div>

              <div className="mobile-cotegory-content">
                <Link to="/electric-scooter"></Link>
                <img src={mobbtn8} alt="cotegory-img"></img>
              </div>

              <div className="mobile-cotegory-content">
                <Link to="/electric-bike"></Link>
                <img src={mobbtn4} alt="cotegory-img"></img>
              </div>

              <div className="mobile-cotegory-content">
                <Link to="/electric-car"></Link>
                <img src={mobbtn2} alt="cotegory-img"></img>
              </div>

              <div className="mobile-cotegory-content">
                <Link to="/electric-loading"></Link>
                <img src={mobbtn6} alt="cotegory-img"></img>
              </div>

              <div className="mobile-cotegory-content">
                <Link to="/electric-logistics"></Link>
                <img src={mobbtn5} alt="cotegory-img"></img>
              </div>

              <div className="mobile-cotegory-content">
                <Link to="/electric-auto"></Link>
                <img src={mobbtn1} alt="cotegory-img"></img>
              </div>

              <div className="mobile-cotegory-content">
                <Link to="/electric-bus"></Link>
                <img src={mobbtn7} alt="cotegory-img"></img>
              </div>

              <div className="mobile-cotegory-content">
              <Link onClick={() => openchargingModal("Item 1")}></Link>
                <img src={mobbtn} alt="cotegory-img"></img>
              </div>
              <div className="mobile-cotegory-content">
                <Link to="/electric-luna"></Link>
                <img src={luna} alt="cotegory-img"></img>
              </div>

              <div className="mobile-cotegory-content">
                <Link to="/solar-page"></Link>
                <img src={solar} alt="cotegory-img"></img>
              </div>

              <div className="mobile-cotegory-content">
              <Link onClick={() => openDealerModal("Item 1")}></Link>
                <img src={dealers} alt="cotegory-img"></img>
              </div>

              {isModalOpen && (
                    <DealerListModalBox
                      isOpen={isModalOpen}
                      closeModal={closeDealerModal}
                      selectedItem={selectedItem}
                    />
                  )}
                  {ischargingOpen && (
                    <ChargingModelBox
                      isOpen={ischargingOpen}
                      closeModal={closechargingModal}
                      selectedItem={setchargingitem}
                    />
                  )}

            </div>
          </div>
        </section>
        <FeaturedCarSection />
        <ElectricCarBrand />
        <UsedVehicle />
        <Whatpowerus />

        {/* <!--====== Benefits & Dealer Spotlight Start ======--> */}

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
                        }}
                      >
                        Benefits of{" "}
                      </strong>
                      <strong
                        className="before-horizontal-line-blue"
                        style={{ color: "#F08A04"}}
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
                          Top notch SEO Support so that you can rank your business. <strong style={{ color: "#F08A04" }}>Fuel</strong>
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
                          <strong style={{ color: "#F08A04" }}>
                            customer
                          </strong>{" "}

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
                          Top Quality Leads of potential customers for {" "}
                          <strong style={{ color: "#F08A04" }}>
                            your
                          </strong>
                          {" "}
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
                    >
                      Dealer Spotlight
                    </h3>
                    <p style={{ fontSize: "11px" }}>
                      <h3 style={{ color: "black" }}>By Becoming  <strong style={{ color: "#262681", fontSize: "20px" }}>Fuel Free</strong> vendor A dealer can get acces to -</h3> <br /> <br />

                      <p className="para-line-benefits">Personalised store to all the vendor to showcase their product and services to their customers.</p><br />
                      <p className="para-line-benefits">Top quality leads of potential customers for your business.</p><br />
                      <p className="para-line-benefits">Top Notch SEO support so that you can rank your business.</p><br />
                      <p className="para-line-benefits">Details of the test drive and booking of the most interested customers for the product is services.</p><br />
                      <p className="para-line-benefits">24*7 dedicated team for the customer support.</p><br />

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <div className="mobile-consultation">
          <div className="tanker">
            <div className="newslater">
            <div>
              <div className="consultation-img">
              <img src={newlater} alt="consultation"></img>
              </div>
              <div
                id="cotegory-secand-image">
                <span></span>
              </div>
              </div>
              <h3>Book Your Free<h3 className="consultation-consultation"> Consultation</h3></h3>
              <Link to="/book-your-free-consultation">
                <button className="newsletter-button">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
       
        <div className="app-download">
          <div className="tanker">
            <Link to="">
              <img
                className="app-download"
                src={socialmideaicon}
                alt="app banner"
              ></img>
            </Link>
          </div>
          <div className="appstore-flex">
            <Link to="">
              <img style={{width:"293px"}} className="appstoremobile" src={appstore} alt="store" />
            </Link>
            <Link to="">
              <img className="appstoremobile" src={appstoregoogle} alt="store"></img>
            </Link>


          </div>
          <div className="appstore-flex-social">
            <Link target='blank' to="https://www.linkedin.com/in/fuelfree/">
              <img  src={lin} alt="linkedin"></img>
            </Link>
            <Link target='blank' to="https://www.facebook.com/profile.php?id=100092497026712&mibextid=ZbWKwL">
            <img  src={fac} alt="facebook"></img>

            </Link>
            <Link target='blank' to="https://instagram.com/fuelfree.in?igshid=YmMyMTA2M2Y=">
            <img  src={ins} alt="instagram"></img>

              </Link>
            <Link target='blank' to="https://twitter.com/fuelfreeind">
            <img  src={twi} alt="twitter"></img>

              </Link>
            <Link target='blank' to="https://youtube.com/@fuelfree-EV">
            <img src={you} alt="youtube"></img>

              </Link>
          </div>
        </div>


        <div className="tanker">
          <div className="availability">
            <div className="mobile-section-headfing">
              <h3 style={{ marginTop: "15px" }}>our presence</h3>
              <Link to="">
                <img
                  style={{ width: "100%", marginTop: "15px" }}
                  className="availability"
                  src={weareavailable}
                  alt="app banner"
                ></img>
              </Link>
            </div>
          </div>
        </div>

        <div className="mobile-newslatter">
          <div className="tanker">
            <div className="newslater">
              <div>
              <div className="newsletter-img-outer">
              <img src={emailnewsletter} alt="newslater"></img>
              </div>
              </div>
              <h3>Subscribe To Our<h3 className="newsletter-newsletter">Newsletter !</h3></h3>
              <div className="newsletter-input_button">
                <input
                  type="tel"
                  value={PhoneNO}
                  pattern="[0-9]{3}[0-9]{4}[0-9]{3}"
                  required
                  onChange={(e) => setPhoneNo(e.target.value)}
                  placeholder="Enter Your Number"
                ></input>
                <button
                  className="main-btn-submit"
                  type="submit"
                  onClick={subscribe}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobileview;
