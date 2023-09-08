import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import scooter from './images/scooter-cotergory.jpeg';

function Oldscooter() {
    return (
        <>
            <Header />
            <section id="collection-id">
                <img src={scooter} alt="scooters-banner"></img>
            </section>
            <Footer />
        </>
    )
}

export default Oldscooter;
