import "./admin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Adminsidebar from "./adminsidebar";
import React, { useState, useEffect } from "react";

const NewsAdminList = () => {
  const [newsAllList, setNewsAllList] = useState({});
  let newsType = newsAllList.List;

  async function getAllNewsList() {
    let resultCycle = await axios.get("https://app.fuelfree.in/news/all", {
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

  //deleste user
  const deleteNews = async (NewsID) => {
    let res = await axios.delete(
      `https://app.fuelfree.in/news/newsDelete/${NewsID}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
    window.location.reload();
  };

  return (
    <div>
      <Adminsidebar />
      <div>
        <div className="news-right-bar-outerss">
          <h4>All News</h4>
          {newsType &&
            newsType.map((data) => (
              <>
                <div className="news-content-con">
                  <div className="news-content-img">
                    <p className="news-date">{data.Date}</p>
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
                <Link
                  class=" view-offer-ab"
                  onClick={() => {
                    deleteNews(data._id);
                  }}
                >
                  delete
                </Link>
                <Link
                  class=" view-offer-ab"
                  to={`/editnewsform/${data._id}`}
                >
                  Edit
                </Link>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAdminList;
