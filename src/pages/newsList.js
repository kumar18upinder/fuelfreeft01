import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsList = () => {
  const [cycleList, setCycleList] = useState({});
  let cycleType = cycleList.List;

  async function getCycleList() {
    let resultCycle = await axios.get(
      "https://app.fuelfree.in/news/recentNews/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let cycleData = await resultCycle.data;
    setCycleList(cycleData);
  }

  useEffect(() => {
    getCycleList();
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,   
    slidesToScroll: 2,
    vertical: true,    
    verticalSwiping: true,
    autoplay: true,          
    autoplaySpeed: 3000, 
    prevArrow: false,       
    nextArrow: false, 
  };

  const handleLinkClick = () => {
    window.location.reload();
    window.location.assign();
  };

  return (
    <>
      <div className="news-right-bar">
        <div className="news-side-right-bar-outer">
          <h6>Latest News</h6>
            {cycleType && cycleType.length > 0 && (
            <Slider {...settings}>
              {cycleType.map((data) => (
                <div key={data._id} className="news-side-content-con">
                  <hr />
                  <div className="news-side-img">
                    <img
                      src={`https://app.fuelfree.in/${data.image}`}
                      alt={`new image`}
                    ></img>
                  </div>
                  <div className="news-side-content-text">
                    <p>
                      <Moment format="YYYY/MM/DD">{data.Date}</Moment>
                    </p>
                  </div>
                  <div className="news-side-content-text-top">
                    <h6>{data.MainHeading}</h6>
                  </div>
                  <div className="news-side-content-text">
                    <Link
                      to={`/news-details/${data._id}`}
                      onClick={handleLinkClick}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsList;

