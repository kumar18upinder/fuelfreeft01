import './compare.css';
import React from 'react';
import addvehicle from '../images/add-car.jpg';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

function Compare() {
  return (
    <div>
        <Header/>
        {/* <!-- Breadcrumb row END --> */}
            <div class="section-full p-t50 bg-white content-inner-2 width-percent">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="m-b30">
                                <h4 class="h4 m-t0">Compare to choose the right Vehicle! </h4>
                                <ul class="used-car-dl-info">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        {/* <!-- Side bar start --> */}
                        <div class="col-md-3 col-sm-6 m-b30">
                            <div class=" bx-style-1 p-a20 text-center compare-cls">
                                <div>
                                   <img src={addvehicle} alt="addvehicle"/>
                                </div>
                                <form>
                                    <h4>Add to compare</h4>
                                    <div class="input-group m-b20">
                                        <select class="form-control">
										<option>-Select Brand-</option>
										<option>Maruti</option>
										<option>Hyundai</option>
										<option>Honda</option>
										<option>Toyota</option>
									</select>
                                    </div>
                                    <div class="input-group m-b20">
                                        <select class="form-control">
										<option>-Select Model-</option>
										<option>Creta</option>
										<option>Elantra</option>
										<option>EON</option>
										<option>Grand i10</option>
									</select>
                                    </div>
                                    <div class="input-group m-b20">
                                        <select class="form-control">
										<option>-Select Variant-</option>
										<option>Creta</option>
										<option>Elantra</option>
										<option>EON</option>
										<option>Grand i10</option>
									</select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 m-b30">
                            <div class=" bx-style-1 p-a20 text-center compare-cls">
                                <div>
                                     <img src={addvehicle} alt="addvehicle"/>
                                     
                                </div>
                                <form>
                                    <h4>Add to compare</h4>
                                    <div class="input-group m-b20">
                                        <select class="form-control">
										<option>-Select Brand-</option>
										<option>Maruti</option>
										<option>Hyundai</option>
										<option>Honda</option>
										<option>Toyota</option>
									</select>
                                    </div>
                                    <div class="input-group m-b20">
                                        <select class="form-control">
										<option>-Select Model-</option>
										<option>Creta</option>
										<option>Elantra</option>
										<option>EON</option>
										<option>Grand i10</option>
									</select>
                                    </div>
                                    <div class="input-group m-b20">
                                        <select class="form-control">
										<option>-Select Variant-</option>
										<option>Creta</option>
										<option>Elantra</option>
										<option>EON</option>
										<option>Grand i10</option>
									</select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 text-center ">
                            <div class="input-group icon-bx-wraper bx-style-1 p-a20 justify-content-center">
                                <Link class="site-button" to="/Comparenow">Compare Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Compare;