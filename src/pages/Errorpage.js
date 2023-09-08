import React from 'react';
import { Link } from 'react-router-dom';
import Errorimage from './images/Errorimage.jpg';

function Errorpage(){
    return (
        <>
            <div>
                <section className="error-page">
                    <div className="tanker">
                        <div className="error-wrapper text-center">
                            <div className="error-image">
                                <img src={ Errorimage } alt="Error 404" />
                            </div>
                            <div className="error-content">
                                <h2 className="error-title">Looks like you lost</h2>
                                <p>You seem can’t to find the page you’re looking for</p>
                                <Link to="/" className="main-btn">back to home <i className="fas fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Errorpage
