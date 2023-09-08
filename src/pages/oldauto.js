import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import auto from '../pages/images/auto.jpeg';
import { Link } from 'react-router-dom';

function Oldauto() {
    return (
        <div>
            <Header />
            <section id="collection-id">
                <img src={auto} alt='auto'></img>
                <div className="page-wallpaper">
                    <div className="tanker">
                        <div className="bread-crumb">
                            <Link to="/">Home</Link>
                            <Link to="/collection">Collection</Link>
                        </div>
                        <h3>E-Auto</h3>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Oldauto;
