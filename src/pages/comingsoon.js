import React from 'react'
import './comingsoon.css';
import Header from '../components/header';
import Footer from '../components/footer';
// import backgroundimg from '../img/background-img.jpg';
// import Comingsoonimg from '../pages/images/Coming soon.png';
import comingsoonmobileview from '../pages/images/coming soon mobile view.png';
import Coming from '../pages/images/Coming soon.png';


function Comingsoon() {
  return (
    <div>
        <Header/>
        <img className='dexttop-coming-soon' src={Coming} alt='comming soon'></img>
        <img className='comming-soon-img' src={comingsoonmobileview} alt='coming soon mobile page'></img>
        <Footer />
    </div>
  );
};
export default Comingsoon;