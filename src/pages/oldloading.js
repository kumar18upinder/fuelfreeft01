import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import loadingbanner from "./images/loading-banner.jpeg";

function Oldloading() {
    return (
        <>
            <Header />
            <section id="collection-id">
                <img src={loadingbanner} alt="bycycle"></img>
            </section>
            <Footer />
        </>
    )
}

export default Oldloading;
