import React from 'react';
import carmaintanance from './images/carmaintanance.jpg';
import carwashing from './images/carwashing.jpg';
import carrescue from './images/carrescue.jpg';
import Header from '../components/header';
import Footer from '../components/footer';
import chrgingst from './images/service-cahrging.jpg';
import srvicersation from './images/srvicer-sation.jpg';
import desrvicestaion from './images/delers-service.jpg';
import magnifrature from './images/magnifrature.jpg'


function Services(){
    return(
        <div>
        <Header/>
        <section className="services-page">
             <div className='tanker'>
                
                <div className='services-two-div'>
                    <div className='srvice-left'>
                    <h3>Helping you to move eco frendly</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the
                         1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>

                    </div>
                    <div className='srvice-right'>
                    <iframe autoplay height="315" src="http://www.youtube.com/embed/tJfERzrG-D8" title="How an Electric Car Works? Its Parts &amp; Functions [Explained]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                     </div>
                </div>


                <div id="ev-strgety">
                    <div className='tanker'>
                        <div className='section-title'>
                        <h3>Our Services</h3>
                        </div>
                        <div className='ev-strgety-outer'>
                                <div className='ev-services'>
                                    <img src={chrgingst} alt="charging station"></img>
                                    <h3>cahrging stataion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                         industry's standard dummy text ever since the 1500s, when an unknown prin</p>
                                </div>
                                <div className='ev-services'>
                                     <img src={srvicersation} alt="srvice-station"></img>
                                    <h3>sevices  stataion</h3>
                                    <p>of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was </p>
                                </div>

                                <div className='ev-services'>
                                    <img src={desrvicestaion} alt="mhbviy"></img>                                    <h3>Ev dealers</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when 
                                        looking at its layout. The point of using Lorem
                                         Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                </div>

                                <div className='ev-services'>
                                    <img src={magnifrature} alt="khbiuy"></img>
                                    <h3>manifratures</h3>
                                    <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model t</p>
                                </div>
                        </div>
                    </div>
                </div>



                <div id='service-info-info'>
                    <div className='tanker'>
                        <div className='service-info-outer'>
                            <div className='service-info-content'>
                                <div className='service-info-content-left'>
                                       <h3>cahrging stataion</h3>
                                       <p></p>
                                </div>
                                <div className='service-info-content-left'>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
             </div>
        </section>
    <Footer/>
    </div>
    )
}
export default Services;
