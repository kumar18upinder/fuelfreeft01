import React from 'react'
import { Link } from 'react-router-dom';
import "./Carzone.css";

function Carzonenewcar() {
    return (
        <div>
            <div>
                <div className="form-slide">
                    <div className="container">
                        <form className="search-car" action="new-car-search-result-list.html" method="post">
                            <div className="form-head">
                                <h2>Search the right car</h2>
                            </div>
                            {/* <!-- TABS --> */}
                            <div className="form-find-area">
                                <ul className="nav theme-tabs">
                                    <li role="presentation" ><Link data-toggle="tab" aria-controls="new-car" to="/Carzone">NEW VEHICLE</Link></li>
                                    <li role="presentation" className="active" ><Link data-toggle="tab" aria-controls="popular" to="#">USED VEHICLE</Link></li>
                                </ul>
                                <div className="tab-content">
                                    {/* <!-- used CAR --> */}
                                    <div className="input-group">
                                        <select className="form-control">
                                            <option>Vehicle Type</option>
                                            <option>Vehicle Type</option>
                                            <option>Cycle</option>
                                            <option>Scooter</option>
                                            <option>Bikes</option>
                                            <option>Auto</option>
                                            <option>Car</option>
                                            <option>Loading</option>
                                            <option>Buses</option>
                                            <option>Logistics</option>
                                        </select>
                                    </div>
                                    <div id="budgetDiv" className="new_form_div">
                                        <div className="input-group">
                                            <select className="form-control">
                                                <option>Select Budget</option>
                                                <option>1 Lakh - 5 Lakh</option>
                                                <option>5 Lakh - 10 Lakh</option>
                                                <option>10 Lakh - 20 Lakh</option>
                                                <option>20 Lakh - 50 Lakh</option>
                                                <option>50 Lakh - 1 Crore</option>
                                                <option>Above 1 Crore</option>
                                            </select>
                                        </div>
                                        </div>
                                    <div className="input-group">
                                        <button className="site-button button-lg btn-block" type="submit">SEARCH</button>
                                    </div>
                                    <div className="input-group text-center">
                                        <Link className="site-button-link" to="new-car-search.html">ADVANCED SEARCH <i className="fa fa-angle-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carzonenewcar;
