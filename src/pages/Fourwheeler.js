import React from 'react'
import './comingsoon.css';
import Header from '../components/header';
import Footer from '../components/footer';
import comingsoonmobileview from './images/coming soon mobile view.png';
import Comingsoon from './images/Coming soon.png';

export const Fourwheeler = () => {
    return (
        <div>
        <Header/>
        <img className='dexttop-coming-soon' src={Comingsoon} alt='comming soon'></img>
            <img className='comming-soon-img' src={comingsoonmobileview} alt='coming soon mobile page'></img>
        <Footer />
    </div>
    )
}

export default Fourwheeler;
