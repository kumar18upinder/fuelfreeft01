import React from "react";
import "./slick-slider.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homepagebannerone from "../pages/images/home banner 2 (1).png";
import homepagebannertwo from "../pages/images/home banner 3 (1).png";
import scootermainbanner from "../pages/images/scootymainlogoslider.jpeg";
import ChargingModelBox from "../components/testingpages/chargingModelBox";
import { useState } from "react";

function Mobileslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    centerMode: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [ischargingOpen, setIschargingOpen] = useState(false);
  const [selectchargintitem, setchargingitem] = useState("");

  const openchargingModal = (item) => {
    setIschargingOpen(true);
    setchargingitem(item);
  };

  const closechargingModal = () => {
    setIschargingOpen(false);
  };

  return (
    <div>
      <div id="home-banner">
        <Slider {...settings}>
          <div className="mobilecarousel-outer">
            <Link to="/electric-scooter"></Link>
            <img src={scootermainbanner} alt="banner-img"></img>
          </div>
          <div className="mobilecarousel-outer">
            <Link onClick={() => openchargingModal("Item 1")} />
            <img src={homepagebannerone} alt="banner-img"></img>
          </div>
          <div className="mobilecarousel-outer">
            <Link to="/service-center"></Link>
            <img src={homepagebannertwo} alt="banner-img"></img>
          </div>
        </Slider>
      </div>
          {ischargingOpen && (
            <ChargingModelBox
              isOpen={ischargingOpen}
              closeModal={closechargingModal}
              selectedItem={setchargingitem}
            />
          )}
    </div>
  );
}
export default Mobileslider;
