import React from "react";
import './slick-slider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import tri from '../pages/images/tri.png'
import "slick-carousel/slick/slick-theme.css";
import Teamone from "../pages/images/Teamone.jpg"
import Teamtwo from "../pages/images/Teamtwo.jpg"
import Teamthree from "../pages/images/Teamthree.jpg"

function TestinomialMobileslider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        centerMode: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (
        <Slider {...settings}>
            <div className='testimomial-outer' >
                <div className="testinomal-inner">
                    <div className="testinomaila-img">
                        <div className="testinomial-img-inner">
                        </div>
                        <img src={Teamone} alt="tesnimonal-img"></img>
                    </div>
                    <div className="testinomial-detail">
                        <div className="testinomial-detail-inner">
                            <h3>Jyoti Gupta</h3>
                            <p className="review-mobile-view">"I recently started using fuelfree, and I have been blown
                                away by its convenience and efficiency. This one-stop platform is a game-changer for anyone looking
                                to save time and money. With its easy-to-use interface and comprehensive range of services.</p>
                            <div className="testimial-stars">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                        </div>
                        <div className="bottom-tri">
                            <img src={tri} alt="bottom-img"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimomial-outer' >
                <div className="testinomal-inner">
                    <div className="testinomaila-img">
                        <div className="testinomial-img-inner">
                        </div>
                        <img src={Teamthree} alt="tesnimonal-img"></img>
                    </div>
                    <div className="testinomial-detail">
                        <div className="testinomial-detail-inner">
                            <h3>Suraj</h3>
                            <p className="review-mobile-view">"I recently started using fuelfree, and I have been blown
                                away by its convenience and efficiency. This one-stop platform is a game-changer for anyone looking
                                to save time and money. With its easy-to-use interface and comprehensive range of services.</p>
                            <div className="testimial-stars">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                        </div>
                        <div className="bottom-tri">
                            <img src={tri} alt="bottom-img"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimomial-outer' >
                <div className="testinomal-inner">
                    <div className="testinomaila-img">
                        <div className="testinomial-img-inner">
                        </div>
                        <img src={Teamtwo} alt="tesnimonal-img"></img>
                    </div>
                    <div className="testinomial-detail">
                        <div className="testinomial-detail-inner">
                            <h3>Agrima</h3>
                            <p className="review-mobile-view">"I recently started using fuelfree, and I have been blown
                                away by its convenience and efficiency. This one-stop platform is a game-changer for anyone looking
                                to save time and money. With its easy-to-use interface and comprehensive range of services.</p>
                            <div className="testimial-stars">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                        </div>
                        <div className="bottom-tri">
                            <img src={tri} alt="bottom-img"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimomial-outer' >
                <div className="testinomal-inner">
                    <div className="testinomaila-img">
                        <div className="testinomial-img-inner">
                        </div>
                        <img src={Teamthree} alt="tesnimonal-img"></img>
                    </div>
                    <div className="testinomial-detail">
                        <div className="testinomial-detail-inner">
                            <h3>Jatin</h3>
                            <p className="review-mobile-view">"I recently started using fuelfree, and I have been blown
                                away by its convenience and efficiency. This one-stop platform is a game-changer for anyone looking
                                to save time and money. With its easy-to-use interface and comprehensive range of services.</p>
                            <div className="testimial-stars">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                        </div>
                        <div className="bottom-tri">
                            <img src={tri} alt="bottom-img"></img>
                        </div>

                    </div>
                </div>
            </div>
        </Slider>
    );
}


export default TestinomialMobileslider;