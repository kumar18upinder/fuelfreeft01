import React, { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import "./offers.css";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Offers() {
  const {vt}=useParams()
  console.log(vt)
  const [newsType, setNewsAllList] = useState('');
   

  async function getAllNewsList() {
    let resultCycle = await axios.get(
      "https://app.fuelfree.in/admin/offerList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let cycleData = await resultCycle.data;
    let data=await cycleData.offers
    let filterdata=data&&data.filter((item)=>{
      return item.VehicleType===vt
    })
    setNewsAllList(filterdata);
  }

  async function getallnews() {
    let resultCycle = await axios.get(
      "https://app.fuelfree.in/admin/offerList",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let cycleData = await resultCycle.data;
    let data=await cycleData.offers
    setNewsAllList(data);
  }

const buyNowPage= () => {
  alert("For apply promo code click on buy now button of product page")
}
  useEffect(() => {
    if(vt===':vt'){
      getallnews()
    }else{
      getAllNewsList();
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gotoBuyNow=(value)=>{
    localStorage.setItem('buyNOwPromo',JSON.stringify(value))
    toast.success('copied')
    setTimeout(() => {
      window.history.back();
    },  1000);
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="offer-page">
        <div className="tanker">
          <h4 className="offer-title">All Offers</h4>
          <div className="news-right-bar-outer">
          {newsType &&
              newsType.map((data) => (
                <div className="news-content-con">
                  <div className="news-content-img">
                    <img
                      src={`https://app.fuelfree.in/${data && data.offerImage}`}
                      alt="offer-img"
                    ></img>
                  </div>
                  <div className="offer-content-text">
                    <div>
                      <p className="news-content-text-top">{data.offerHeading}</p>
                    </div>
                    <div>
                      <p className="news-content-text-offerText">{data.offerText}</p>
                  {vt===":vt"?(''):(<p className="news-content-text-promoCode">{data.promoCode}</p>)}    
                      <p className="news-content-text-VehicleType"><span className="promo-class">Promo Code :</span><span className="animate-charcter" onClick={buyNowPage}>{data.promoCode}</span></p>
                    </div>
                  </div>
                  <div className="btn-offer-section">
                  {vt===':vt'?( ''):(<button type="button" className="btn btn-primary btn-offer" onClick={()=>gotoBuyNow(data)} >Apply now</button>)}
                   
                  </div>
                </div>
              ))} 
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
