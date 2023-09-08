import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import carbanner from "./images/car-banner.jpeg";


function Oldcar() {
    return (
        <>
            <Header />
            <section id="collection-id">
                <img src={carbanner} alt="bycar"></img>
            </section>
            <Footer />
        </>
    )
}

export default Oldcar;
