import React from 'react';
import { Link } from 'react-router-dom';
import './electricCarBrand.css';
import tvs from '../images/tvs.png';
import volvo from '../images/volvo.png';
import Audilogo from '../images/Audi.png';
import Kinaticlogoone from '../images/kinetic.png';
import MG from "../images/mg.png";
import ola from "../images/ola.png";
import eicher from "../images/eicher.png";
import kisspngmercedesbenz from "../images/kisspng-mercedes-benz.png";
import kia from "../images/kia.png";
import Mahindra from "../images/Mahindra.png";
import tata from "../images/tata.png";
import hyundai from "../images/hyundai.png";
import sectionbg from "../images/section-bg.png"
import Komaki from "../pages/images/komaki.jpeg";
import hero from "../pages/images/hero.png";
import pureev from "../pages/images/pureev.png";
import speedgo from "../pages/images/Speegologo.png";


const ElectricCarBrand = () => {
  return (
    <>
      <div className='section-section' id='electric-vehicle-log'>
      <div className='section-background'>
        <img src={sectionbg} alt='section-bg'></img>
      </div>
      <div className='mobile-section-headfing'>
               <span></span> <h3>Featured Brand</h3><span></span>
             </div>
             
        <div className='tanker electric-vehicle-border  tanker'>
            
            <div className='electric-vehicle-logo-name'></div>
            <div className='electric-vehicle-log-outer m-4'>
                <Link to="/hyundai">
                    <img src={hyundai} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>Hyundai</p>
                </Link>
                <Link to="/tata">
                    <img src={tata} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>Tata</p>
                </Link>
                <Link to="/mahindra">
                    <img src={Mahindra} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>Mahindra</p>
                </Link>
                <Link to="/kia">
                    <img src={kia} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>Kia</p>
                </Link>
                {/* <Link to="/mercedesbenz">
                    <img src={kisspngmercedesbenz} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>Mercedes-Benz</p>
                </Link> */}
                <Link to="/audi">
                    <img src={Audilogo} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>Audi</p>
                </Link>
                <Link to="/volvo">
                    <img src={volvo} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>Volvo</p>
                </Link>
            
                <Link to="/tvs">
                    <img src={tvs} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>TVS Motor</p>
                </Link>
                {/* <Link to="/eicher">
                    <img src={eicher} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>Eicher</p>
                </Link> */}
                <Link to="/ola" >
                    <img src={ola} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>Ola</p>
                </Link>
                <Link to="/kinetic">
                    <img src={Kinaticlogoone} alt='1ampere' className='electric-car-brand-img' />
                    <p className='logo-car'>Kinetic</p>
                </Link>
                {/* <Link to="/mg">
                    <img src={MG} alt='1ampere' className='electric-car-brand-img'/>
                    <p className='logo-car'>MG</p>
                </Link> */}
                <Link to="/komaki">
                    <img src={Komaki} alt='1ampere' className='electric-car-brand-img' id="elct-brnd-komaki"/>
                    <p className='logo-car'>Komaki</p>
                </Link>
                {/* <Link to="/speego" >
                    <img src={speedgo} alt='1ampere' className='electric-car-brand-img' id="elct-brnd-speego"/>
                    <p className='logo-car'>Speego</p>
                </Link> */}
                {/* <Link to="/pureev">
                    <img src={pureev} alt='1ampere' className='electric-car-brand-img' id="elct-brnd-pureev"/>
                    <p className='logo-car'>Pure-ev</p>
                </Link> */}
                <Link to="/hero">
                    <img src={hero} alt='1ampere' className='electric-car-brand-img' id="elct-brnd-Hero"/>
                    <p className='logo-car'>Hero</p>
                </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default ElectricCarBrand
