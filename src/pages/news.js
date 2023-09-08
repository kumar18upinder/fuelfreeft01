import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Moment from "react-moment";
import "./news.css";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css"

function News() {

  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo)
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [newsAll, setNewsAll] = useState([])
  
  const lastProductIndex = currentPage * 5
  const firstProductIndex = lastProductIndex - 5
  const newsPerPage = newsAll.slice(firstProductIndex,lastProductIndex)
  async function getAllNewsList() {
    let resultCycle = await axios.get("https://app.fuelfree.in/news/all", {
      headers: {
        Accept: "application/json",
      },
    });
    let cycleData = await resultCycle.data;
    let list=await cycleData.List
    setNewsAll(list)
    setTotalPage(Math.ceil(list.length / 5))
  }

  useEffect(() => {
    getAllNewsList();
  }, []);
  /////

  ////trending news////
  const [newsList, setNewsList] = useState({});
  let cycleType = newsList.List;

  async function getNewsList() {
    let resultCycle = await axios.get(
      "https://app.fuelfree.in/news/trendingNews/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let cycleData = await resultCycle.data;
    setNewsList(cycleData);
  }

  useEffect(() => {
    getNewsList();
  }, []);

  // /////////////////////

  //////upcoming news///////
  const [upcomingList, setUpcomingNewsList] = useState({});
  let upcomingType = upcomingList.List;
  // console.log("getUpcomingNewsList", upcomingType)

  async function getUpcomingNewsList() {
    let resultCycle = await axios.get(
      "https://app.fuelfree.in/news/upcomingVehicleNews/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let cycleData = await resultCycle.data;
    setUpcomingNewsList(cycleData);
    // console.log(cycleData)
  }

  useEffect(() => {
    getUpcomingNewsList();
  }, []);

  ///////////

  //////recently news///////
  const [recentlyList, setRecentlyNewsList] = useState({});
  let recentlyType = recentlyList.List;
  console.log("recentlyType", recentlyType);

  async function getRecentlyNewsList() {
    let resultCycle = await axios.get(
      "https://app.fuelfree.in/news/recentNews/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let cycleData = await resultCycle.data;
    setRecentlyNewsList(cycleData);
    console.log(cycleData);
  }

  useEffect(() => {
    getRecentlyNewsList();
  }, []);

  ///////////

  //////fuelfree news///////
  const [fuelfreeList, setFuelfreeNewsList] = useState({});
  let fuelfreeType = fuelfreeList.List;

  async function getFuelfreeNewsList() {
    let resultCycle = await axios.get(
      "https://app.fuelfree.in/news/FuelFreeNews/list",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let cycleData = await resultCycle.data;
    setFuelfreeNewsList(cycleData);
  }

  useEffect(() => {
    getFuelfreeNewsList();
  }, []);

  ///////////

  // ===================tabs
  const [activeTab, setActiveTab] = useState("City1");

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  // ====================tabs close

  ///pagination

 
  
  return (
    <div id="news-page-id">
      <Header />
      <section id="news-id">
        <div className="tanker">
          <div className="news-tba-outer-tab">
            <button
              className={`news-tabs ${activeTab === "City1" ? "active" : ""}`}
              onClick={() => openCity("City1")}
            >
              All News
            </button>
            <button
              className={`news-tabs ${activeTab === "City2" ? "active" : ""}`}
              onClick={() => openCity("City2")}
            >
              Trending News
            </button>

            <button
              className={`news-tabs ${activeTab === "City3" ? "active" : ""}`}
              onClick={() => openCity("City3")}
            >
              Upcoming
            </button>

            <button
              className={`news-tabs ${activeTab === "City4" ? "active" : ""}`}
              onClick={() => openCity("City4")}
            >
              Recent News
            </button>

            <button
              className={`news-tabs ${activeTab === "City5" ? "active" : ""}`}
              onClick={() => openCity("City5")}
            >
              fuelfree News
            </button>
          </div>

          <div
            id="City1"
            className={`news-tab-content ${
              activeTab === "City1" ? "active" : ""
            }`}
          >
            <div>
              <h4>All News</h4>
              <div className="news-right-bar-outer">
                {newsPerPage &&
                  newsPerPage.map((data) => (
                    <div className="news-content-con">
                      <div className="news-content-img">
                        <p className="news-date">
                          <Moment format="YYYY/MM/DD">{data.Date}</Moment>
                        </p>
                        <img
                          src={`https://app.fuelfree.in/${data.image}`}
                          alt="new image"
                        ></img>
                      </div>
                      <div className="news-content-text">
                        <Link to={`/news-details/${data._id}`}></Link>
                        <div className="news-content-text-top">
                          <h4>{data.MainHeading}</h4>
                        </div>
                        <div className="news-content-text-top">
                          <h6>{data.content}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                  <ResponsivePagination
                  current={currentPage}
                  total={totalPage}
                  onPageChange={handlePageChange}/>
              </div>
            </div>
          </div>
          <div
            id="City2"
            className={`news-tab-content ${
              activeTab === "City2" ? "active" : ""
            }`}
          >
            <h6>Trending News</h6>
            <div className="news-right-bar-outer">
              {cycleType &&
                cycleType.map((data) => (
                  <div className="news-content-con">
                    <div className="news-content-img">
                      <p className="news-date">
                        <Moment format="YYYY/MM/DD">{data.Date}</Moment>
                      </p>
                      <img
                        src={`https://app.fuelfree.in/${data.image}`}
                        alt="new image"
                      ></img>
                    </div>
                    <div className="news-content-text">
                      <Link to={`/news-details/${data._id}`}></Link>
                      <div className="news-content-text-top">
                        <h4>{data.MainHeading}</h4>
                      </div>
                      <div className="news-content-text-top">
                        <h6>{data.content}</h6>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div
            id="City3"
            className={`news-tab-content ${
              activeTab === "City3" ? "active" : ""
            }`}
          >
            <h6>Upcoming Vehicle News</h6>
            <div className="news-right-bar-outer">
              {upcomingType &&
                upcomingType.map((data) => (
                  <div className="news-content-con">
                    <div className="news-content-img">
                      <p className="news-date">
                        <Moment format="YYYY/MM/DD">{data.Date}</Moment>
                      </p>
                      <img
                        src={`https://app.fuelfree.in/${data.image}`}
                        alt="new image"
                      ></img>
                    </div>
                    <div className="news-content-text">
                      <Link to={`/news-details/${data._id}`}> </Link>
                      <div className="news-content-text-top">
                        <h4>{data.MainHeading}</h4>
                      </div>
                      <div className="news-content-text-top">
                        <h6>{data.content}</h6>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div
            id="City4"
            className={`news-tab-content ${
              activeTab === "City4" ? "active" : ""
            }`}
          >
            <h6>Recently News</h6>
            <div className="news-right-bar-outer">
              {recentlyType &&
                recentlyType.map((data) => (
                  <div className="news-content-con">
                    <div className="news-content-img">
                      <p className="news-date">
                        <Moment format="YYYY/MM/DD">{data.Date}</Moment>
                      </p>
                      <img
                        src={`https://app.fuelfree.in/${data.image}`}
                        alt="new image"
                      ></img>
                    </div>
                    <div className="news-content-text">
                      <Link to={`/news-details/${data._id}`}></Link>
                      <div className="news-content-text-top">
                        <h4>{data.MainHeading}</h4>
                      </div>
                      <div className="news-content-text-top">
                        <h6>{data.content}</h6>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div
            id="City5"
            className={`news-tab-content ${
              activeTab === "City5" ? "active" : ""
            }`}
          >
            <h6>FuelFree News</h6>
            <div className="news-right-bar-outer">
              {fuelfreeType &&
                fuelfreeType.map((data) => (
                  <div className="news-content-con">
                    <div className="news-content-img">
                      <p className="news-date">
                        <Moment format="YYYY/MM/DD">{data.Date}</Moment>
                      </p>
                      <img
                        src={`https://app.fuelfree.in/${data.image}`}
                        alt="new image"
                      ></img>
                    </div>
                    <div className="news-content-text">
                      <Link to={`/news-details/${data._id}`}> </Link>
                      <div className="news-content-text-top">
                        <h4>{data.MainHeading}</h4>
                      </div>
                      <div className="news-content-text-top">
                        <h6>{data.content}</h6>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
}

export default News;
