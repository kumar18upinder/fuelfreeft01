import { useEffect } from "react";
import aboutusfinal from "./images/aboutusfinal.png";
import largeprofit from "./images/largeprofit.jpg";
import Header from "../components/header";
import Footer from "../components/footer";
import "./Becomeadealer.css";
import { Link } from "react-router-dom";
import agency from "../pages/images/agencyImg.jpeg";
import chargeingstation from "../pages/images/chargingImg.jpeg";
import rentalservices from "../pages/images/rentalImg.jpeg";
import servicecenter from "../pages/images/serviceImg.jpeg";
import becomeadealerimg from "../pages/images/Become a dealer.png";

function Becomeadealer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Header />
        <img
          src={becomeadealerimg}
          alt="become a fuelfree dealer"
          style={{ width: "1523px" }}
        ></img>
        <div className="main-div-becomeadealer">
          <h1>WELCOME TO FUELFREE</h1>
          <p>To Become a Fuelfree Vendor</p>

          <section id="tanker">
            <div className="card-outer card-row">
              <div className="card card-1">
                <img src={chargeingstation} alt="chargingstationone" />
                <h2>Charging Station</h2>
                <p>
                  As an electric vehicle company, we understand the importance
                  of providing reliable and convenient charging stations to our
                  customers.
                </p>
                <Link to="https://vendor.fuelfree.in/chargingstation">
                  <button className="Register-card">Register Now</button>
                </Link>
                <p>
                  Already Registered ?
                  <Link to="https://vendor.fuelfree.in/chargingstationlogin">
                    login
                  </Link>
                </p>
              </div>
              <div className="card card-1">
                <Link to="https://vendor.fuelfree.in/servicecenter"></Link>
                <img src={servicecenter} alt="chargingstationone" />
                <h2>Service Center</h2>
                <p>
                  From battery replacements to software updates, we have the
                  knowledge and tools to keep your electric vehicle in peak
                  condition for years to come.
                </p>
                <Link to="https://vendor.fuelfree.in/servicecenter">
                  <button className="Register-card">Register Now</button>
                </Link>
                <p>
                  Already Registered ?
                  <Link to="https://vendor.fuelfree.in/servicecenterlogin">
                    login
                  </Link>
                </p>
              </div>
              <div className="card card-1">
                <img src={agency} alt="chargingstationone" />
                <h2>EV Agencies</h2>
                <p>
                  At electric vehicle agency, we provide more than just sales -
                  we offer comprehensive service and maintenance at our
                  cutting-edge service center.
                </p>
                <Link to="https://vendor.fuelfree.in/evagency">
                  <button className="Register-card">Register Now</button>
                </Link>
                <p>
                  Already Registered ?
                  <Link to="https://vendor.fuelfree.in/Evangencylogin">
                    login
                  </Link>
                </p>
              </div>
              <div className="card card-1">
                <img src={rentalservices} alt="fuelfree-rental-services" />
                <h2>Rental Service</h2>
                <p>
                  Embark on an unforgettable adventure with our top-notch rental
                  vehicles. choose from a wide selection of rental vehicles
                  tailored to suit your needs.
                </p>
                <Link to="https://vendor.fuelfree.in/rental-services-registration">
                  <button className="Register-card">Register Now</button>
                </Link>
                <p>
                  Already Registered ?
                  <Link to="http://vendor.fuelfree.in/rental-login">login</Link>
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Becomeadealer;
