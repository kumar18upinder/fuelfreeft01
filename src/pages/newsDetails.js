import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import NewsList from "./newsList";

function NewsDetails() {
  const [newsdetailsList, setnewsdetailsList] = useState({});
  let data = newsdetailsList.value;

  const { id } = useParams();

  async function getnewsdetailsList() {
    let resultnewsdetails = await axios.get(
      `https://app.fuelfree.in/news/newsDetails/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let newsdetailsData = await resultnewsdetails.data;
    setnewsdetailsList(newsdetailsData);
  }

  useEffect(() => {
    getnewsdetailsList();
  }, []);
  return (
    <div id="news-detaisl-page">
      <Header />
      <div className="tanker news-margin">
        <section className="news-outer">
          <div className="news-left-content">
          <div className="news-head">
            <p className="news-date">Published On {data && data.Date}</p>
            <h2  className="news-mainheading">{data && data.MainHeading}</h2>
            </div>
            <div className="news-detaisl-img news-head">
              <img
                src={`https://app.fuelfree.in/${data && data.image}`}
                alt="car news"
              ></img>
            </div>
            <div className="news-detials-details news-head" >
              <h4 className="news-content">{data && data.content}</h4>
              <p className="mb-4 news-font">{data && data.newsDescription}</p>
            </div>
          </div>
          <NewsList />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default NewsDetails;
