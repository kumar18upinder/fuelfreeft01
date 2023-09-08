import sign from "./images/sign.png";
import "./About.css"
import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import aboutusfinal from "./images/aboutusfinal.png";
import AboutusMobileview from "./aboutusMobileview";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <AboutusMobileview />
      <section id="dextop-view">
        <section id="aboutusbanner">
          <img src={aboutusfinal} style={{ width: "100%" }} alt="banner"></img>
        </section>
        <section id="about-us-top-content">
          <div className="tanker">
            <div className="o-fzptVd o-fzptYr o-brXWGL " data-skin="section">
              <div className="o-fznJDS o-ckGLSv o-fznJFI o-cMwvCl o-fzpihY o-fzpilm o-brXWGL">
                <h1 style={{ paddingTop: "35px" }}>About Us</h1>
              </div>
              <div className="">
                At Fuel Free, we are passionate about revolutionizing the way
                people embrace sustainable transportation. As a leading
                platform, we provide a comprehensive one-stop solution for all
                your electric vehicle needs. Our mission is to connect users
                with a network of authorized dealers, ensuring access to a wide
                range of electric vehicles. Additionally, we offer a directory
                of charging stations, enabling convenient and hassle-free
                charging options. We also partner with trusted service centers
                to provide reliable maintenance and repair services. With our
                commitment to convenience, accessibility, and environmental
                responsibility, we aim to empower individuals to make the switch
                to electric vehicles and contribute to a greener future
              </div>
            </div>

            <section>
              <div className="MissonArea">
                <div class="MissonBox">
                  <div class="MissonContent">
                    <h2>OUR MISSION</h2>
                    <p>
                      Our vision at FUELFREE is to create a world where
                      sustainable transportation is the norm, and where everyone
                      has access to affordable and reliable electric vehicles.
                      We believe that the widespread adoption of EVs is a
                      crucial step towards reducing carbon emissions and
                      mitigating climate change, and we are committed to being
                      at the forefront of this movement. Through innovation,
                      collaboration, and a relentless focus on customer
                      satisfaction, we aim to establish ourselves as the leading
                      provider of EV products and services, and to make a
                      meaningful contribution to a more sustainable future for
                      generations to come.
                    </p>
                  </div>
                </div>
                <div class="MissonBox">
                  <div class="MissonContent">
                    <h2>OUR VISION</h2>
                    <p>
                      {" "}
                      At FUELFREE, our vision is to become the preferred
                      Platform for electric vehicle products and services, by
                      offering the highest quality and most comprehensive range
                      of solutions in the market. We strive to establish strong
                      partnerships with leading manufacturers and service
                      providers, and to leverage our expertise and resources to
                      deliver exceptional value to our vendors and customers
                      alike. Our goal is to be recognized as the go-to platform
                      for all EV-related needs, and to continuously innovate and
                      improve our offerings to meet the evolving needs of our
                      vendors and customers. We are committed to building
                      long-lasting relationships with our vendors, and to
                      providing them with the tools and support they need to
                      succeed in a rapidly changing market.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="main-about-section">
              <div class="about-experience">
                <div class="experience-year">
                  <span class="year">0-1</span>
                  <h6 class="title" style={{ background: "none" }}>
                    years of <br />
                    experience
                  </h6>
                </div>
                <div class="experience-counter">
                  <div class="single-counter">
                    <span class="count">50 +</span>
                    <p>happy clients</p>
                  </div>
                  <div class="single-counter">
                    <span class="count">1100+</span>
                    <p>Registered Vehicles</p>
                  </div>
                  <div class="single-counter">
                    <span class="count">80+</span>
                    <p>Registered Charging Station</p>
                  </div>
                  <div class="single-counter">
                    <span class="count">32+</span>
                    <p>Registered Service Centers</p>
                  </div>
                </div>
              </div>

              <div className="about-us-content">
                <div class="about-main-content">
                  <div class="about-content">
                    <h2 class="main-title">
                      One Stop Electric Vehicle Solution
                    </h2>
                    <p>
                      Fuel Free offers exceptional electric vehicle services,
                      connecting users with authorized dealers, charging
                      stations, and trusted service centers. Simplify your
                      journey to sustainable transportation with us.
                    </p>
                    <img src={sign} alt="" />
                    <h5 class="ceo-name">Shivakant Soni</h5>
                    <span class="designation">
                      The chief executive officer (CEO)
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default About;
