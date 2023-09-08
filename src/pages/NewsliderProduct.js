import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './newsliderProduct.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const FeaturedCarSection = ({handleclick}) => {
  const [cycleList, setCycleList] = useState({})
  let cycleType = cycleList.List
   //console.warn(cycleType);

  async function getCycleList() {
      let resultCycle = await axios.get('https://app.fuelfree.in/product/list', {
          headers: {
              "Accept": "application/json"
          }
      })
      let cycleData = await resultCycle.data
      setCycleList(cycleData)
  }

  useEffect(() => {
      getCycleList()
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dot:false,
    autoplaySpeed: 5000,
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

  return (
    <div>
      <div className="quick-look-card" id="quick-look-id">
      
        <div className='tanker'>
        <div className='mobile-section-headfing'>
               <span></span> <h3>Quick Look</h3><span></span>
             </div>
          
             <div className='slidercard'>
          <Slider {...settings}>
          
              {cycleType && cycleType.slice(5 ,20).map((data) => (
                <div className="quicklook-outer-card">
                <div class="Carcard" key={data._id}>
                  <img alt="cycle" src={`https://app.fuelfree.in/${data.productImage}`}></img>
                  <div class="Cartitle">
                    <h5>{data.productName}</h5>
                    <p>Starting at Rs. {data.productPrice}</p>
                    {/* <p>{data.productName}</p> */}
                    <Link to={`/products/${data.productName}/${data.VehicleType}/${data._id}`}  class="view-offer-a">View-offer</Link>
                    {localStorage.getItem('product') ? (<Link to={`/compare-electric-vehicles/${data._id}`} class="view-offer-a" >Add To Compare</Link>) :
                      (<Link to={`/compare-electric-vehicles/:id`} class="view-offer-a" onClick={() => handleclick(data)} >Add To Compare</Link>)}
                  </div>
                </div>
                </div>
              ))}
              
          </Slider>
          </div>
               
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarSection;