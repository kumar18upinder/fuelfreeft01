import React from "react";
import Slider from "react-slick";
import './usedvehicle.css';
import { Link } from "react-router-dom";
import unknown from "../images/unknown img.png";
import Indorecity from "../pages/images/indore-city.jpeg";
import ujjaincity from "../pages/images/ujjain-city.jpeg";
import bhopalcity from "../pages/images/bhopal-city.jpeg";
import sehorecity from "../pages/images/sehore-city.jpeg";
import vidishacity from "../pages/images/vidisha-city.jpeg";
import jabalpurcity from "../pages/images/jabalpur-city.jpeg";
import gwaliorcity from "../pages/images/gwalior-city.jpeg";
import suratcity from "../pages/images/surat-city.jpeg";
import dewascity from "../pages/images/dewas-city.jpeg";  
import rajgarhcity from "../pages/images/rajgarh-city.jpeg";
import lucknowcity from "../pages/images/lucknow-city.jpeg";
import jaipurcity from "../pages/images/jaipur-city.jpeg";


const UsedVehicle = () => {

    const settings = {
        className: "center",
        slidesToShow: 4,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
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
        <div className="used-vehicle-section section-section" id="useded-vehicle">
            <div className='section-background'>
                <img src={unknown} alt='section-bg'></img>
            </div>
            

            <div className="tanker">
            <div className='mobile-section-headfing' >
               <span></span> <h3>We Are Available In</h3><span></span>
             </div>
                   <div id="used-vehicle-section">
                    <div className="used-vehicle-ssection">

                        
                            
                                <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'indore'}`}>
                                        <img src={ Indorecity } alt="indore" className="avail-city" />
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in</p> */}
                                            <p className="used-car-city">Indore</p>
                                        </div>
                                    </Link>
                               
                            </div>
                           
                                <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'bhopal'}`}>
                                        <img src={ bhopalcity } alt="bhopal" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in</p> */}
                                            <p className="used-car-city">Bhopal</p>
                                        </div>
                                    </Link>
                               
                            </div>
                            
                                <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${''}`}>
                                        <img src={ jabalpurcity } alt="jbp" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in</p> */}
                                            <p className="used-car-city">Jabalpur</p>
                                        </div>
                                    </Link>
                                
                            </div>
                            
                                <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'gwalior'}`}>
                                        <img src={ gwaliorcity } alt="gwalior" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in </p> */}
                                            <p className="used-car-city">Gwalior</p>
                                        </div>
                                    </Link>
                            </div>

                            <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'surat'}`}>
                                        <img src={ suratcity } alt="gwalior" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in </p> */}
                                            <p className="used-car-city">Surat</p>
                                        </div>
                                    </Link>
                            </div>

                            <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'jaipur'}`}>
                                        <img src={ jaipurcity } alt="gwalior" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in </p> */}
                                            <p className="used-car-city">Jaipur</p>
                                        </div>
                                    </Link>
                            </div>

                            <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'luckhnow'}`}>
                                        <img src={ lucknowcity } alt="gwalior" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in </p> */}
                                            <p className="used-car-city">Lucknow</p>
                                        </div>
                                    </Link>
                            </div>

                            <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'ujjain'}`}>
                                        <img src={ ujjaincity } alt="gwalior" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in </p> */}
                                            <p className="used-car-city">Ujjain</p>
                                        </div>
                                    </Link>
                            </div>

                            <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'dewas'}`}>
                                        <img src={ dewascity } alt="gwalior" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in </p> */}
                                            <p className="used-car-city">Dewas</p>
                                        </div>
                                    </Link>
                            </div>

                            <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'sehore'}`}>
                                        <img src={ sehorecity} alt="gwalior" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in </p> */}
                                            <p className="used-car-city">Sehore</p>
                                        </div>
                                    </Link>
                            </div>

                            <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'rajgarh'}`}>
                                        <img src={ rajgarhcity } alt="gwalior" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in </p> */}
                                            <p className="used-car-city">Rajgarh</p>
                                        </div>
                                    </Link>
                            </div>

                            <div className="usedVehicle-cards">
                                    <Link to={`/dealer-List-city-wise/${'vidisha'}`}>
                                        <img src={ vidishacity } alt="gwalior" className="avail-city"/>
                                        <div className="used-car-titles">
                                            {/* <p className="used-car-title">Used Vehicles in </p> */}
                                            <p className="used-car-city">Vidisha</p>
                                        </div>
                                    </Link>
                            </div>
                            <Slider {...settings}>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsedVehicle