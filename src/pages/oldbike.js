import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import bikebannernew from '../pages/images/bikebannernew.jpeg'
import { Link } from 'react-router-dom';

function Oldbike() {
    return (
        <>
            <Header />
            <section id="collection-id">
                <img src={ bikebannernew } alt='bikebannernew'></img>
                <div className="page-wallpaper">
                    <div className="tanker">
                        <div className="bread-crumb">
                            <Link to="/">Home</Link>
                            <Link to="/collection">Collection</Link>
                        </div>
                        <h3>E-Bike</h3>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Oldbike;
