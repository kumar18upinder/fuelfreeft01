import React, {useEffect, useState} from "react";
import Footer from '../components/footer';
import Header from '../components/header';
import axios from "axios";
import './offers.css';
import { Link } from "react-router-dom";

function Offers(){

  const [newsAllList, setNewsAllList] = useState({});
  let newsType = newsAllList.offers;

  async function getAllNewsList() {
    let resultCycle = await axios.get("https://app.fuelfree.in/admin/offerList", {
      headers: {
        Accept: "application/json",
      },
    });
    let cycleData = await resultCycle.data;
    setNewsAllList(cycleData);
  }

  useEffect(() => {
    getAllNewsList();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
    return(
        <>
          <Header />
          <div className="tanker">
              <h4>All Offers</h4>
              <div className="news-right-bar-outer">

                {newsType && newsType.map((data) => (
                  <div className="news-content-con">
                    <div className="news-content-img">
                      <p className="news-date">{data.offerDate}</p>
                      <img src={`https://app.fuelfree.in/${data && data.offerImage}`} alt="offer-img"></img>
                    </div>
                    <div className="news-content-text">
                      {/* <Link to={`/news-details/${data._id}`}></Link> */}
                        <div className="news-content-text-top">
                          <h4>{data.offerHeading}</h4>
                        </div>
                        <div className="news-content-text-top">
                          <h6>{data.offerText}</h6>
                        </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
        </>
    );
};

export default Offers;