import React from 'react'
import './comparenow.css'
import { Link } from 'react-router-dom';
import img1 from '../images/pic7.jpg';
import img2 from '../images/pic1.jpg';
import img3 from '../images/pic8.jpg';
import Header from '../components/header';
import Footer from '../components/footer';
function Comparenow() {
  return (
    <div>
        <Header/>
              {/* <!-- Content --> */}
        <div class="page-content width-percent">  
            {/* <!-- Breadcrumb row --> */}
            <div class="breadcrumb-row">
                <div class="container">
                    <ul class="list-inline">
                        <li><Link to="#">Home</Link></li>
                        <li>Compare Result</li>
                    </ul>
                </div>
            </div>
            {/* <!-- Breadcrumb row END --> */}
            <div class="section-full p-t50 bg-white content-inner-2 compare-car">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="m-b30">
                                <h4 class="h4 m-t0">Compare Hyundai Magna Plus Vs Hyundai Plus</h4>
                                <ul class="used-car-dl-info">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {/* <!-- Side bar start --> */}
                        <div class="col-md-12 col-lg-3">
                            <div class="icon-bx-wraper bx-style-1 p-a20 m-b30 compare-cls">
                                <form class="row">
                                    <h4 class="col-lg-12">Compare Vehicle</h4>
                                    <div class="col-md-3 col-sm-3 col-lg-12 m-b20">
                                        <select class="form-control">
										<option>-Select Brand-</option>
										<option>Maruti</option>
										<option>Hyundai</option>
										<option>Honda</option>
										<option>Toyota</option>
									</select>
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-lg-12 m-b20">
                                        <select class="form-control">
										<option>-Select Model-</option>
										<option>Creta</option>
										<option>Elantra</option>
										<option>EON</option>
										<option>Grand i10</option>
									</select>
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-lg-12 m-b20">
                                        <select class="form-control">
										<option>-Select Variant-</option>
										<option>Creta</option>
										<option>Elantra</option>
										<option>EON</option>
										<option>Grand i10</option>
									</select>
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-lg-12">
                                        <button class="site-button2 btn-block">Compare Now</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div class="col-md-4 col-lg-3 col-md-4 col-sm-4">
                            <div class="input-group m-b30">
                                <select class="form-control">
								<option>Select</option>
								<option>Sportback (Diesel) 54.02 Lakh*</option>
								<option>Cabriolet (Diesel) 67.51 Lakh*</option>
							</select>
                            </div>
                            <div class="dlab-feed-list m-b30 text-left compare-cls">
                                <div class="dlab-media">
                                    <Link to="car-details-overview.html"><img src={img1} alt="img1"/></Link>
                                </div>
                                <div class="dlab-info text-left">
                                    <h4 class="dlab-title"><Link to="car-details-overview.html">Plus Hyundai EON </Link></h4>
                                    <p class="dlab-price"><span class="text-black">Price : $26,598</span></p>
                                    <div class="icon-box-btn text-center m-tb20">
                                        <ul class="clearfix">
                                            <li>3K CC</li>
                                            <li>15 kmpl</li>
                                            <li>7 Seats </li>
                                        </ul>
                                    </div>
                                    <div class="view-seller-dtl">
                                        <Link to="/productpage" class="site-button2 btn-block" title="READ MORE">View Offer</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-3 col-md-4 col-sm-4">
                            <div class="input-group m-b30">
                                <select class="form-control">
								<option>Select</option>
								<option>35 TDI Matrix (Diesel) 54.84 Lakh*</option>
								<option>Cabriolet (Diesel) 67.51 Lakh*</option>
							</select>
                            </div>
                            <div class="dlab-feed-list m-b30 text-left compare-cls">
                                <div class="dlab-media">
                                    <Link to="car-details-overview.html"><img src={img2} alt="img2"/></Link>
                                </div>
                                <div class="dlab-info text-left">
                                    <h4 class="dlab-title"><Link to="car-details-overview.html">Hyundai EON LPG </Link></h4>
                                    <p class="dlab-price"><span class="text-black">Price : $14,551</span></p>
                                    <div class="icon-box-btn text-center m-tb20">
                                        <ul class="clearfix">
                                            <li>3K CC</li>
                                            <li>15 kmpl</li>
                                            <li>7 Seats </li>
                                        </ul>
                                    </div>
                                    <div class="view-seller-dtl">
                                        <Link to="" class="site-button2 btn-block" title="READ MORE">View Offer</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Side bar END --> */}
                        <div class="col-md-4 col-lg-3 col-md-4 col-sm-4">
                            <div class="input-group m-b30">
                                <select class="form-control">
								<option>Select</option>
								<option>Sportback (Diesel) 64.51 Lakh*</option>
								<option>Cabriolet (Diesel) 67.51 Lakh*</option>
							</select>
                            </div>
                            <div class="dlab-feed-list m-b30 text-left compare-cls">
                                <div class="dlab-media">
                                    <Link to="car-details-overview.html"><img src={img3} alt="img3"/></Link>
                                </div>
                                <div class="dlab-info text-left">
                                    <h4 class="dlab-title"><Link to="car-details-overview.html">Hyundai EON </Link></h4>
                                    <p class="dlab-price"><span class="text-black">Price : $50,598</span></p>
                                    <div class="icon-box-btn text-center m-tb20">
                                        <ul class="clearfix">
                                            <li>3K CC</li>
                                            <li>15 kmpl</li>
                                            <li>7 Seats </li>
                                        </ul>
                                    </div>
                                    <div class="view-seller-dtl">
                                        <Link to="" class="site-button2 btn-block" title="READ MORE">View Offer</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="icon-bx-wraper bx-style-1 m-b30">
                                <ul class="table-dl table-col4 clearfix ">
                                    <li class="table-head">
                                        <div class="leftview compare-list-1">Overview</div>
                                        <div class="rightview compare-list-2"> Plus Hyundai EON </div>
                                        <div class="rightview compare-list-3"> Hyundai EON LPG </div>
                                        <div class="rightview compare-list-4"> Hyundai EON </div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Fuel Type</div>
                                        <div class="rightview compare-list-2"> Diesel </div>
                                        <div class="rightview compare-list-3"> Diesel</div>
                                        <div class="rightview compare-list-4"> Petrol</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Mileage (ARAI) </div>
                                        <div class="rightview compare-list-2"> 17.2kmpl</div>
                                        <div class="rightview compare-list-3"> 18.53kmpl</div>
                                        <div class="rightview compare-list-4"> 18.9kmpl</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Mileage City </div>
                                        <div class="rightview compare-list-2"> —</div>
                                        <div class="rightview compare-list-3"> —</div>
                                        <div class="rightview compare-list-4"> —</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Available Colors</div>
                                        <div class="rightview compare-list-2"> Yes </div>
                                        <div class="rightview compare-list-3"> Yes</div>
                                        <div class="rightview compare-list-4"> Yes</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Fuel Tank Capacity</div>
                                        <div class="rightview compare-list-2"> 58Litres</div>
                                        <div class="rightview compare-list-3"> 75Litres</div>
                                        <div class="rightview compare-list-4"> 55Litres</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Seating Capacity</div>
                                        <div class="rightview compare-list-2"> 3</div>
                                        <div class="rightview compare-list-3"> 4</div>
                                        <div class="rightview compare-list-4"> 6</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Transmission Type</div>
                                        <div class="rightview compare-list-2"> Automatic</div>
                                        <div class="rightview compare-list-3"> Automatic</div>
                                        <div class="rightview compare-list-4"> Manual</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Engine Displacement (cc)</div>
                                        <div class="rightview compare-list-2"> 1968</div>
                                        <div class="rightview compare-list-3"> 1968</div>
                                        <div class="rightview compare-list-4"> 1997</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Offers & Discount</div>
                                        <div class="rightview compare-list-2"> Not Available</div>
                                        <div class="rightview compare-list-3"> Not Available</div>
                                        <div class="rightview compare-list-4"> 3 Offers</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Finance Available (EMI)</div>
                                        <div class="rightview compare-list-2"> $ 1,80,352</div>
                                        <div class="rightview compare-list-3"> $ 2,30,597</div>
                                        <div class="rightview compare-list-4"> $ 1,50,592</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Service Cost</div>
                                        <div class="rightview compare-list-2"> —</div>
                                        <div class="rightview compare-list-3"> —</div>
                                        <div class="rightview compare-list-4"> —</div>
                                    </li>
                                </ul>
                            </div>
                            <div class="icon-bx-wraper bx-style-1 m-b30">
                                <ul class="table-dl table-col4 clearfix">
                                    <li class="table-head">
                                        <div class="leftview compare-list-1">Standard Features</div>
                                        <div class="rightview compare-list-2"> Plus Hyundai EON </div>
                                        <div class="rightview compare-list-3"> Hyundai EON LPG </div>
                                        <div class="rightview compare-list-4"> Hyundai EON </div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Air Conditioner</div>
                                        <div class="rightview compare-list-2"> <i class="bi bi-check font-18 text-green"></i> </div>
                                        <div class="rightview compare-list-3"> <i class="bi bi-check font-18 text-green"></i></div>
                                        <div class="rightview compare-list-4"> <i class="bi bi-x font-18 text-red"></i></div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">CD Player </div>
                                        <div class="rightview compare-list-2"> <i class="bi bi-x font-18 text-red"></i></div>
                                        <div class="rightview compare-list-3"> <i class="bi bi-check font-18 text-green"></i></div>
                                        <div class="rightview compare-list-4"> <i class="bi bi-check font-18 text-green"></i></div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">AntiLock Braking System</div>
                                        <div class="rightview compare-list-2"> <i class="bi bi-x font-18 text-red"></i></div>
                                        <div class="rightview compare-list-3"> —</div>
                                        <div class="rightview compare-list-4"> <i class="bi bi-x font-18 text-red"></i></div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Power Steering</div>
                                        <div class="rightview compare-list-2"> <i class="bi bi-x font-18 text-red"></i> </div>
                                        <div class="rightview compare-list-3"> <i class="bi bi-check font-18 text-green"></i></div>
                                        <div class="rightview compare-list-4"> <i class="bi bi-check font-18 text-green"></i></div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Power Windows</div>
                                        <div class="rightview compare-list-2"> <i class="bi bi-check font-18 text-green"></i></div>
                                        <div class="rightview compare-list-3"> <i class="bi bi-check font-18 text-green"></i></div>
                                        <div class="rightview compare-list-4"> <i class="bi bi-check font-18 text-green"></i></div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Leather Seats</div>
                                        <div class="rightview compare-list-2"> <i class="bi bi-x font-18 text-red"></i></div>
                                        <div class="rightview compare-list-3"> <i class="bi bi-x font-18 text-red"></i></div>
                                        <div class="rightview compare-list-4"> <i class="bi bi-x font-18 text-red"></i></div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Central Locking</div>
                                        <div class="rightview compare-list-2"> <i class="bi bi-check font-18 text-green"></i></div>
                                        <div class="rightview compare-list-3"> <i class="bi bi-x font-18 text-red"></i></div>
                                        <div class="rightview compare-list-4"> <i class="bi bi-x font-18 text-red"></i></div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Speed Sensing Auto Door Lock </div>
                                        <div class="rightview compare-list-2"> <i class="bi bi-check font-18 text-green"></i></div>
                                        <div class="rightview compare-list-3"> <i class="bi bi-x font-18 text-red"></i></div>
                                        <div class="rightview compare-list-4"> <i class="bi bi-check font-18 text-green"></i></div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Impact Sensing Auto Door Unlock</div>
                                        <div class="rightview compare-list-2"><i class="bi bi-check font-18 text-green"></i></div>
                                        <div class="rightview compare-list-3"><i class="bi bi-x font-18 text-red"></i></div>
                                        <div class="rightview compare-list-4"><i class="bi bi-check font-18 text-green"></i></div>
                                    </li>
                                </ul>
                            </div>
                            <div class="icon-bx-wraper bx-style-1 m-b30">
                                <ul class="table-dl table-col4 clearfix ">
                                    <li class="table-head">
                                        <div class="leftview compare-list-1">Engine</div>
                                        <div class="rightview compare-list-2"> Plus Hyundai EON </div>
                                        <div class="rightview compare-list-3"> Hyundai EON LPG </div>
                                        <div class="rightview compare-list-4"> Hyundai EON </div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Fuel Type</div>
                                        <div class="rightview compare-list-2"> Diesel </div>
                                        <div class="rightview compare-list-3"> Diesel</div>
                                        <div class="rightview compare-list-4"> Petrol</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Mileage (ARAI) </div>
                                        <div class="rightview compare-list-2"> 17.2kmpl</div>
                                        <div class="rightview compare-list-3"> 18.53kmpl</div>
                                        <div class="rightview compare-list-4"> 18.9kmpl</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Mileage City </div>
                                        <div class="rightview compare-list-2"> —</div>
                                        <div class="rightview compare-list-3"> —</div>
                                        <div class="rightview compare-list-4"> —</div>
                                    </li>
                                </ul>
                            </div>
                            <div class="icon-bx-wraper bx-style-1 m-b30">
                                <ul class="table-dl table-col4 clearfix ">
                                    <li class="table-head">
                                        <div class="leftview compare-list-1">Transmission</div>
                                        <div class="rightview compare-list-2"> Plus Hyundai EON </div>
                                        <div class="rightview compare-list-3"> Hyundai EON LPG </div>
                                        <div class="rightview compare-list-4"> Hyundai EON </div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Fuel Type</div>
                                        <div class="rightview compare-list-2"> Diesel </div>
                                        <div class="rightview compare-list-3"> Diesel</div>
                                        <div class="rightview compare-list-4"> Petrol</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Mileage (ARAI) </div>
                                        <div class="rightview compare-list-2"> 17.2kmpl</div>
                                        <div class="rightview compare-list-3"> 18.53kmpl</div>
                                        <div class="rightview compare-list-4"> 18.9kmpl</div>
                                    </li>
                                    <li>
                                        <div class="leftview compare-list-1">Mileage City </div>
                                        <div class="rightview compare-list-2"> —</div>
                                        <div class="rightview compare-list-3"> —</div>
                                        <div class="rightview compare-list-4"> —</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Content END--> */}
        <Footer/>
    </div>
  )
}

export default Comparenow;