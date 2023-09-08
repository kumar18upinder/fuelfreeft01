import React from "react";
import './whatpowerus.css';

function Whatpowerus() {
    return (
        <div className="tanker" style={{display:"none"}}>
            <div class="inner_power-us container mt-5">
            <div className='mobile-section-headfing'>
               <span></span> <h3>What powers us?</h3><span></span>
             </div>
                
                {/* <!-- <div class="type_writer_container">
                    <h2 class="text-center">
                        <a href="" class="typewrite" data-period="2000" data-type='[ "Zero Maintenance", "Real-time Information", "Investment not cost", "Pay as you go"]'>
                            <span class="wrap"></span>
                        </a>
                    </h2>
                </div> --> */}
                <div class="power_us_content mt-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-5 py-3 m-3 flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        {/* <!-- <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> -->
                                            <!-- <h1>01</h1> --> */}
                                        <h4>Pay as you go</h4>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>We like to keep things transparent, with FuelFree just pay the initial subscription amount and then pay as per your use. No minimum or maximum swap limit or compulsory daily charges.</p>
                                    </div>
                                </div>
                                {/* <!-- <i class="fas fa-arrow-right"></i> --> */}
                            </div>
                            <div class="col-md-5 py-3 m-3 flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        {/* <!-- <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> -->
                                            <!-- <h1>02</h1> --> */}
                                        <h4>Investment not cost</h4>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>FuelFree takes care of all battery maintenance and servicing over it’s lifetime, so you can now save maintenance cost and enjoy a worry-free experience with FuelFree batteries. To add to that, each subscription let’s you enjoy the FuelFree experience with advanced Li-ion batteries for 3 years.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5 py-3 m-3 flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        {/* <!-- <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> -->
                                            <!-- <h1>03</h1> --> */}
                                        <h4>Real-time-information</h4>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Our batteries are equipped with intelligently designed BMS and telematics system which empowers real-time information through a cloud connected ecosystem to monitor every battery and driver related parameter. Making every ride of yours smooth and reliable.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-5 py-3 m-3 flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        {/* <!-- <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> --> */}
                                        {/* <!-- <h1>04</h1> --> */}
                                        <h4>Zero Maintenance</h4>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>
                                            Our aim is to ensure zero downtime for all EVs and we enable this through battery swaps at all FuelFree Electric Mobility Stations.
                                            
                                            Once you join our network we have all your battery related needs covered. Zero hassles of replacement or service, in short, zero maintenance.
                                        </p>
                                    </div>
                                </div>
                                {/* <div class="ss_shape_one">
                                        <div class="ss_shape"></div>
                                    </div>
                                    <div class="ss_shape_dot"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatpowerus;