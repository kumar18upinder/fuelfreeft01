import React from 'react'
import './comingsoon.css';
import Header from '../components/header';
import Footer from '../components/footer';
import comingsoonmobileview from './images/coming soon mobile view.png';
import Comingsoon from './images/Coming soon.png';

export const Twowheeler = () => {
    return (
        <div>
        <Header/>
        
            {/* <div>
                <h3>Coming Soon</h3>
                <p>Electrify your city with our innovative EV solutions - coming soon to your doorstep!</p>
                <h1>Get notified <br/> when we available</h1>
                <div>
                    <form>
                        <input type='email' placeholder='email address'/>
                        <button type='submit'>Subscribe</button>
                    </form>
                </div>
            </div> */}
            <img className='dexttop-coming-soon' src={Comingsoon} alt='comming soon'></img>
            <img className='comming-soon-img' src={comingsoonmobileview} alt='coming soon mobile page'></img>
        
        <Footer />
    </div>
    )
}

export default Twowheeler;
