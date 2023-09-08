import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";

const Recentlycompared = ({ handleclick }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [recentList, setrecentList] = useState({});
  let recentValue = recentList.value;
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user._id;

  async function getrecentList() {
    let resultRecent = await axios.get(
      `https://app.fuelfree.in/cart/cartList/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let recentData = await resultRecent.data;
    setrecentList(recentData);
  }

  useEffect(() => {
    getrecentList();
  }, []);
  return (
    <div>
      <div className="quick-look-card">
        <div className="tanker">
          <div className="quick-look-heading-section">
            <div className="section-title">
              <h3>Recently compared</h3>
            </div>
          </div>

          <Slider {...settings}>
            {recentValue &&
              recentValue.map((data) => (
                <div className="slidercard">
                  <div className="Carcard" key={data._id}>
                    <img
                      alt="car"
                      src={`https://app.fuelfree.in/${data.productID.productImage}`}
                    ></img>
                    <div className="Cartitle">
                      <h5>{data.productID.productName}</h5>
                      <p>Starting at ${data.productID.productPrice}</p>
                      <Link
                        to={`/productpage/${data.productID._id}`}
                        class="view-offer-a"
                      >
                        View-offer
                      </Link>
                      {localStorage.getItem("product") ? (
                        <a
                          href={`/semifinalCompare/${data.productID._id}`}
                          class="view-offer-a"
                        >
                          Add To Compare{" "}
                        </a>
                      ) : (
                        <Link
                          to={`/semifinalCompare/:id`}
                          class="view-offer-a"
                          onClick={() => handleclick(data.productID)}
                        >
                          Add To Compare
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Recentlycompared;
