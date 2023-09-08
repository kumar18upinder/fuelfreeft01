import { Link } from "react-router-dom";
// import caar1 from './images/car1.jpg';
// import caar2 from './images/car2.jpg';
// import caar3 from './images/car3.jpg';
// import caar4 from './images/car4.jpg';
// import heart from './images/heart.png'
import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";


function Collection() {
    const [productList, setProductList] = useState([])
    let product = productList.List
     //console.warn('proList', product)

    const getProductList = async () => {
        let result = await axios.get('https://app.fuelfree.in/product/list', {

            headers: {
                "Accept": "application/json"
            }
        })
        let data = await result.data
        //     ('data', data)
        setProductList(data)
    }

    useEffect(() => {
        getProductList()
    }, [])

    return (
        <div>
            <Header />
            <section id="collection-id">

                <div className="page-wallpaper">
                    <div className="tanker">
                        <div className="bread-crumb">
                            <Link to="/">Home</Link>/
                            <Link to="/collection">Collection</Link>/
                        </div>
                        <h3>Our <br></br> vehicles</h3>
                    </div>

                </div>
            </section>





            {/* ---------------------------------our cars------------------------------- */}
            <div id="OUR-CARS">
                <div className="tanker">
                    <div className="section-title">
                        <h3>EV-Cycle</h3>
                    </div>
                    <div className="OUR-CARS-outer">


                        {
                            product && product.map((data => (
                                <div className="Carcard" key={data._id}>
                                    <img src={`https://app.fuelfree.in/${data.productImage}`} alt="new"></img>

                                    {/* <div className="car-img">
                            <img  src={caar2} alt="new"></img>
                            
                        </div> */}
                                    <div className="Cartitle">
                                        <h5>{data.productName}</h5>
                                        <h5>{data.productSpecification}</h5>
                                        <p>{data.productPrice}</p>
                                        <Link class="view-offer-a" to={`/Product/${data && data._id}`}>Buy now</Link>
                                    </div>

                                </div>


                            )))
                        }

                        <div class="Carcard">
                            <img alt="car" src="city-p_360x240.avif"></img>
                            <div class="Cartitle">
                                <h5>2023 Toyota Tacoma</h5>
                                <p>Starting at $24,970</p>
                                <Link to="#" class="view-offer-a">View-offer</Link>
                            </div>
                        </div>






                    </div>






























                </div>
            </div>

            {/* ---------------------------------our cars------------------------------- */}
            {/* <section id="collection-movile-view-id">
               <div className="tanker">
                <div className="mobile-product-outer">
                    <div class="mobile-product">
                        <div className="mobile-product-details">
                            <p>Maruti S-Presso</p>
                            <p>₹ 5.18 Lakh</p>
                            <p>Vijay nagar (indore)</p>
                        </div>
                        <div className="mobile-product-img">
                            <img src="http://motors.stylemixthemes.com/elementor-dealer-one/wp-content/uploads/sites/22/2021/03/01-20-798x466.jpg" alt="mhb "></img>
                      <div className="mobile-heard"> 
                       <img src={heart} alt="kjbhli"></img>
                       </div>
                        </div>
                        
                    </div>
                </div>
                </div> 
                </section>    */}
            <Footer />
        </div>
    );
};


export default Collection;