import React from 'react';
import { Link } from 'react-router-dom';
// import "./slick-slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scooterimage from "../pages/images/scooter-image-new.png";
import image from "../pages/images/image.png";
import Appstore from "../pages/images/app-store.jpeg";
import Appstoregoogle from "../pages/images/app-store-google.jpeg";

const DealerStore = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        centerMode: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false
      };
    
  return (
    <div>
      <section id='dealer-header'>
      <div className='tanker'>
      <div className='dealer-header-outer'>
        <div className='dealer-header-logo'>Kinetic</div>
        <div className='dealer-header-link'>
        <Link className='map'>Services</Link>
        <Link className='map'>About</Link>
        <Link className='map'>Brands</Link>
        <Link className='map'>Vehicles</Link>
        <Link className='map'>Address</Link>
        {/* <Link className='map'>Map</Link> */}

        </div>
        <div className='dealer-header-contact'>
        <Link className="contact-store">contact</Link>
        </div>

      </div>
      </div>
      </section>


   
    <section className='dealer-banner'>
    <div className='dealer-banner-outer'>
        <div className='dealer-banner-text'>
              <h2>A brand new way to buy new electric vehicle</h2>
        </div>
        <div className='dealer-header-contact-more'>
        <Link className="contact-store-more">See More</Link>
        </div>
        

        <Slider {...settings}>
        {/* <div className="mobilecarousel-outer">
          <Link to="/electric-scooter"></Link>
          <img src='https://app.fuelfree.in//uploads/image_1688550531325.New%20Project.png' alt="banner-img"></img>
        </div>
        <div className="mobilecarousel-outer">
          <img src='https://app.fuelfree.in//uploads/image_1688550983470.tvs%20iqude.png' alt="banner-img"></img>
        </div> */}
        <div className="mobilecarousel-outer">
          <Link to="/service-center"></Link>
          <img src={scooterimage} alt="banner-img"></img>
        </div>

        <div className="mobilecarousel-outer">
          <Link to="/service-center"></Link>
          <img src={scooterimage} alt="banner-img"></img>
        </div>

        <div className="mobilecarousel-outer">
          <Link to="/service-center"></Link>
          <img src={scooterimage} alt="banner-img"></img>
        </div>

        <div className="mobilecarousel-outer">
          <Link to="/service-center"></Link>
          <img src={scooterimage} alt="banner-img"></img>
        </div>

        <div className="mobilecarousel-outer">
          <Link to="/service-center"></Link>
          <img src={scooterimage} alt="banner-img"></img>
        </div>

        <div className="mobilecarousel-outer">
          <Link to="/service-center"></Link>
          <img src={scooterimage} alt="banner-img"></img>
        </div>

        <div className="mobilecarousel-outer">
          <Link to="/service-center"></Link>
          <img src={scooterimage} alt="banner-img"></img>
        </div>

        <div className="mobilecarousel-outer">
          <Link to="/service-center"></Link>
          <img src={scooterimage} alt="banner-img"></img>
        </div>

        <div className="mobilecarousel-outer">
          <Link to="/service-center"></Link>
          <img src={scooterimage} alt="banner-img"></img>
        </div>
      </Slider>
    </div>
    </section>

    <div className='dealer-banner-text'>
      <h2>What You Will Get</h2>
      </div>
      <div className='dealer-banner-text-p'>
      <p>Leading analytics have made us one of the most acclaimed E-commerce Platforms.</p>
      </div>
      <div className='What-you-will-get-images'>
      <img className='flex-image' src={image} alt="one-image"></img>
      <img className='flex-image' src={image} alt="one-image"></img>
      <img className='flex-image' src={image} alt="one-image"></img>
    </div>

    <div className='dealer-banner-text'>
      <h2>Explore the most explosion of categories</h2>
      </div>
      <div className='dealer-banner-text-p'>
      <p>Download the app and explore the full power of shopping.</p>
      </div>
    {/* </div> */}
    <div className="fot-store-outer">
                <div className="fot-store">
                  <Link to="">
                    <img className="app-store-image" src={Appstore} alt="store" />
                  </Link>
                  <Link to="">
                    <img className="app-store-image" src={Appstoregoogle} alt="store"></img>
                  </Link>
                </div>
                </div>
    <section className='dealer-featuring-product'>
    <div className='tanker'>
        <div className='dealer-featuring-product-outer'>
           <div className='dealer-featuring-product-content'>
           <img src={image} alt="banner-img"></img>
           </div>

           <div className='dealer-featuring-product-texts'>
           <h3>featuring product</h3>
           <h5>lorem </h5>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
           </div>
        </div>
    </div>
    </section>
    </div>
  )
}

export default DealerStore
