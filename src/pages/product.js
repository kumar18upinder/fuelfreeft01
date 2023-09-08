import { Link, useNavigate } from "react-router-dom";
import bycycle from "./images/bycycle.jpeg";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import bannercycleproductpage from "../pages/images/bannercycleproductpage.png";
import cycle from "./images/cycle.jpg";
import cycle2 from "./images/secand-image.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Product({ handleclick }) {
    const navigate = useNavigate()
    const redirect=()=>{
        navigate('/')
    }
    useEffect(() => {
        redirect()
    }, [])
    const userd = JSON.parse(localStorage.getItem("user"));
    const [fromPrice, setFromPrice] = useState(1000);
    const [toPrice, setToPrice] = useState(500000)

    const id = userd ? userd._id : '';

    const Handleclick = (data) => {
        handleclick(data)
    }

    const [cycleList, setCycleList] = useState({})
    let cycleType = cycleList.List
    console.warn(cycleType);

    async function getCycleList() {
        let resultCycle = await axios.get('https://app.fuelfree.in/product/list', {
            headers: {
                "Accept": "application/json"
            }
        })
        let cycleData = await resultCycle.data
        setCycleList(cycleData)
        console.log(cycleData);
    }

    useEffect(() => {
        getCycleList()
    }, [fromPrice, toPrice])
    //for add favorite pliz login
    let goTologin = () => {
        toast.warning("Please Login");
        setTimeout(() => {
            navigate("/login");
        }, 1000);
        return { _id: null }
    };

    const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : (NaN);

    let uid = user._id;

    const setId = async (productID) => {
        //  let pID= productID?productID:goTologin()
        let pId = productID
        let userid = uid ? uid : goTologin()
        try {
            let Addtofavorite = await axios.post(`https://app.fuelfree.in/favorite/add/${userid}/${pId}`, {
                headers: {
                    "Accept": "application/json"
                }
            })
            let response = await Addtofavorite.data
            console.log(response, 'ddd');
            if (response.success === 'success') {
                toast.success(response.message)
            } else {
                toast.error('already in favoriteList')
            }
        } catch (error) {
            toast.error('already in favoriteList',)
        }
    }
    //for search====
    const [filteredList, setFilteredList] = new useState(cycleType);
    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...cycleType];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item.address.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
    };
    const filter = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...cycleType];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item.address.toLowerCase().indexOf(query.toLowerCase()) !== 1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
    };

    
    

    return (
        <div>
            <Header />
            <ToastContainer />
            <section id="collection-id">
                <img src={bannercycleproductpage} alt="bycycle"></img>
                <div className="collection-id-upper">
                    <h1>ELECTRIC CYCLES</h1>
                    <p>#switchtoev</p>
                </div>
                <div className="page-wallpaper">
                    <div className="tanker">
                        <div className="bread-crumb">
                            <Link to="/">Home</Link>/
                            <Link to="/collection">Collection</Link>/
                        </div>
                        {/* <h3>Cycle</h3> */}
                    </div>
                </div>
            </section>

            {/* ---------------------------------our cycles------------------------------- */}
            <div id="OUR-CARS">
                <div className="cotegotry-overlay-background">
                    <div className="cotegory-first-image" style={{ backgroundImage: `url(${cycle})`, }}></div>
                    <div id="cotegory-secand-image" style={{ backgroundImage: `url(${cycle2})`, }}>
                        <span></span>
                    </div>
                    {/* <div  id="cotegory-third-image" style={{backgroundImage: `url(${cycle})`, }}></div> */}

                </div>
                <div class="mobile-section-headfing">
                    <span></span>
                    <h3>All Product</h3>
                    <span></span></div>
                <div className="tanker">



                    <div style={{ display: "none" }}>
                        <select
                            className="form-control"
                            value={fromPrice}
                            onChange={(e) => setFromPrice(e.target.value)}
                            required
                        >
                            <option value={0} selected>
                                ---- price ---
                            </option>
                            <option value={20000}>20000</option>
                            <option value={50000}>50000</option>
                            <option value={60000}>60000</option>
                            <option value={80000}>80000</option>
                            <option value={10000}>10000</option>
                        </select>
                    </div>

                    <select id="category" className="searchbyfilter" onChange={filterBySearch} >
                        <option value="">All</option>
                        <option >Ev-scooters</option>
                        <option >Ev-bikes</option>
                        <option >Ev-rickshaw</option>
                        <option >Ev-cars</option>
                        <option >Ev-loading</option>
                        <option >Ev-cycles</option>

                    </select>

                    <div className="OUR-CARS-outer">
                        {cycleType && cycleType.map((data) => (
                            <div class="Carcard" key={data._id}>
                                <img alt="cycle" src={`https://app.fuelfree.in/${data.productImage}`}></img>
                                <Link onClick={() => setId(data._id)} className="favrate-butn" title="Add to favorite"><i class="fa fa-heart"></i></Link>
                                <div class="Cartitle">
                                    <h5>{data.productName}</h5>
                                    <p>Starting at Rs. {data.productPrice}</p>
                                    <p>Starting at Rs. {data.VehicleType}</p>
                                    <Link to={`/products/${data.productName}/${data._id}/${data.VehicleType}`} class="view-offer-a">View-offer</Link>
                                    {localStorage.getItem('product') ? (<Link to={`/compare-electric-vehicles/${data._id}`} class="view-offer-a" >Add To Compare</Link>) :
                                        (<Link to={`/compare-electric-vehicles/:id`} class="view-offer-a" onClick={() => handleclick(data)} >Add To Compare</Link>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};


export default Product;
