import "./footer.css";
import $ from "jquery";
import axios from "axios";
import Message from "../pages/chatbot";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { useState, useEffect } from "react";
import { FcFilmReel } from "react-icons/fc";
import { CiCircleMore } from "react-icons/ci";
import { BsTelephoneFill } from "react-icons/bs";
import appstore from "../pages/images/app-store.jpeg";
import appstoregoogle from "../pages/images/app-store-google.jpeg";

function Footer() {
  $(document).ready(function () {
    $(".reels-floting-btndesktop").hover(
      function () {
        $(this).addClass("reel-hover");
      },
      function () {
        $(this).removeClass("reel-hover");
      }
    );
  });

  const [userVisitCount, setVisitCount] = useState("");
  const getUserVisitCount = async () => {
    const res = await axios.get("https://app.fuelfree.in/visitor/refresh", {
      headers: {
        Accept: "application/json",
      },
    });
    let result = await res.data;
    let count = result.count;
    setVisitCount(count);
  };

  useEffect(() => {
    getUserVisitCount();
  }, []);

  return (
    <div className="bottom-footer">
      <div className="reels-floting-btndesktop">
        <Link class="reels-flotying-btn" to="/fuelfree-reels">
          <FcFilmReel />
        </Link>
        <Link class="whatsapp-floting-btn" to="https://wa.me/7880088944">
          <i class="fa fa-whatsapp"></i>
        </Link>
        <Message />
        <span className="more-con-fot">
          <CiCircleMore />
        </span>
      </div>
      <div className="mobile-footer">
        <div className="tanker">
          <div class="footer-bottom">
            <div class="footer-copyright">
              <p>
                ©
                <script>document.write(new Date().getFullYear() + ' ');</script>
                2023 <span> fuelfree </span> Made with{" "}
                <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
                <Link to="/Become-fuelfree-vendor">Poss Mobility Pvt. Ltd.</Link>
              </p>
            </div>
            <div class="nabar-social-media">
              <Link
                class="nav-link " target="_blank"
                to="https://www.facebook.com/profile.php?id=100092497026712&mibextid=ZbWKwL" 
              >
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </Link>
              <Link class="nav-link " target="_blank" to="https://youtube.com/@fuelfree-EV">
                <i class="fa fa-youtube" aria-hidden="true"></i>
              </Link>
              <Link
                class="nav-link" target="_blank"
                to="https://instagram.com/fuelfree.in?igshid=YmMyMTA2M2Y="
              >
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link
                class="nav-link " target="_blank"
                to="https://www.linkedin.com/in/fuelfree/"
              >
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </Link>

              <Link class="nav-link" target="_blank" to="https://twitter.com/fuelfreeind">  
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </Link>
            </div>
            <div class="mobile-ffoter-link">
              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="footer-background-img"></div>
        <div className="tanker">
          <footer className="footer-outer">
            <div className="footer-content">
              <p className="footer-headingp">Important Link</p>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/Become-fuelfree-vendor">Become a dealer</Link>
                </li>
                <li>
                  <Link to="/termsandconditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacypolicy">Privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-content">
              <p className="footer-headingp">Contact Us</p>

              <ul>
                <div className="mob-main">
                  <div className="mob-icon">
                    <BsTelephoneFill className="mob-fill" />
                  </div>
                  <div className="mob-text">
                    <li className="mob-number-text">
                      <Link to="tel:7880088944">7880088944</Link>
                    </li>

                    <li className="mob-number-text">
                      <Link to="tel:7880088955">7880088955</Link>
                    </li>
                  </div>
                </div>

                <li>
                  <Link to="mailto:info@fuelfree.in">
                    <IoMdMail className="mail-to" /> info@fuelfree.in
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-content">
              <div className="footer-download-app">
                <p className="footer-headingp">Download Mobile App</p>
                <div className="foter-downloadapp">
                  <Link to="">
                    <img src={appstore} alt="store" />
                  </Link>
                  <Link to="">
                    <img src={appstoregoogle} alt="store"></img>
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-content">
              <div className="footer-heading">
                <p className="footer-headingp">Visitors Count</p>
              </div>
              <pre className="visitorsCount">
                Total Visitors
                <br />
                {userVisitCount}
              </pre>
            </div>
          </footer>
          <div className="footer-bottom">
            <div class="footer-copyright">
              <p>
                ©
                <script>document.write(new Date().getFullYear() + ' ');</script>
                2023 <span> fuelfree </span> Made with{" "}
                <i class="fa fa-heart"></i> by Poss Mobility Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
