import AOS from "aos";
import "aos/dist/aos.css";
import "./slick-slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import homepagebannerone from "../pages/images/home banner 2 (1).png";
import homepagebannertwo from "../pages/images/home banner 3 (1).png";
import scootermainbanner from "../pages/images/scootymainlogoslider.jpeg";
import ChargingModelBox from "../components/testingpages/chargingModelBox";
import { useState } from "react";

function Slider1() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    AOS.init();
  });
  const [ischargingOpen, setIschargingOpen] = useState(false);

  const openchargingModal = (item) => {
    setIschargingOpen(true);
  };

  const closechargingModal = () => {
    setIschargingOpen(false);
  };
  return (
    <>
      <Slider {...settings}>
        <div className="carousel-outer">
          <div className="item item1">
            <div class="carousel-imgs">
              <Link to="/electric-scooter">
                <img src={scootermainbanner} alt="road" />
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-outer">
          <div className="item item1">
            <div class="carousel-imgs">
            <Link onClick={() => openchargingModal("Item 1")}>
        <img src={homepagebannerone} alt="banner-img" />
      </Link>
            </div>
          </div>
        </div>
        <div className="carousel-outer">
          <div className="item item1">
            <div class="carousel-imgs">
              <Link to="/service-center">
                <img alt="react" src={homepagebannertwo}></img>
              </Link>
            </div>
          </div>
        </div>
      </Slider>

      {ischargingOpen && (
        <ChargingModelBox
          isOpen={ischargingOpen}
          closeModal={closechargingModal}
        />
      )}
    </>
  );
}

export default Slider1;
