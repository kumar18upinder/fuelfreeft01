import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './newslider.css';
import { Link } from 'react-router-dom';

const FeaturedCarSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    // centerPadding: 50,
    autoplaySpeed: 3000,
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
     <div className="quick-look-card">
                <div className="quick-look-heading-section">
                    <h3 className='heading-quick-look'>
                        For Your Quick Look
                        <div className="quick-look-button for-bottom">
                            <Link to="#">Upcoming</Link>
                             <Link to="#">Populer</Link>
                            <Link to="#">latest</Link> 
                        </div>  
                    </h3>
                </div>
      <Slider {...settings}>
        <div className='slidercard'>
          <div className='Carcard'>
            <img alt='car' src='bus.webp'></img>
            <div className="Cartitle">
            <h5>2023 Toyota Tacoma</h5>
            <p>Starting at $24,970</p>
            <Link to="/productpage" className='view-offer-a'>View-offer</Link>
            </div>
          </div>
        </div>
        <div className='slidercard'>
          <div className='Carcard'>
            <img alt='car' src='bus.webp'></img>
            <div className="Cartitle">
            <h5>2023 Toyota Tacoma</h5>
            <p>Starting at $24,970</p>
            <Link to="#" className='view-offer-a'>View-offer</Link>
            </div>
          </div>
        </div>
        <div className='slidercard'>
          <div className='Carcard'>
            <img alt='car' src='bus.webp'></img>
            <div className="Cartitle">
            <h5>2023 Toyota Tacoma</h5>
            <p>Starting at $24,970</p>
            <Link to="#" className='view-offer-a'>View-offer</Link>
            </div>
          </div>
        </div>
        <div className='slidercard'>
          <div className='Carcard'>
            <img alt='car' src='bus.webp'></img>
            <div className="Cartitle">
            <h5>2023 Toyota Tacoma</h5>
            <p>Starting at $24,970</p>
            <Link to="#" className='view-offer-a'>View-offer</Link>
            </div>
          </div>
        </div>
        <div className='slidercard'>
          <div className='Carcard'>
            <img alt='car' src='bus.webp'></img>
            <div className="Cartitle">
            <h5>2023 Toyota Tacoma</h5>
            <p>Starting at $24,970</p>
            <Link to="#" className='view-offer-a'>View-offer</Link>
          </div>
          </div>
        </div>
      </Slider>
      </div>
    </div>
  );
};

export default FeaturedCarSection;
