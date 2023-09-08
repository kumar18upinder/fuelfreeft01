import axios from 'axios';
import {BiRupee} from "react-icons/bi"
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { RiDeleteBin6Line } from 'react-icons/ri';
import React, {useState, useEffect} from 'react';

const AdminVariantList = () => {
    const [variant, setVariant] = useState({});
    let variantList = variant.allData;
    async function getVariantList() {
      let resultVariantList = await axios.get(
        "https://app.fuelfree.in/product/listOfVariants",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      let variantListData = await resultVariantList.data;
      setVariant(variantListData);
    }

    const [solarVariant, setSolarVariant] = useState({});
    let solarVariantList = solarVariant.List;
    async function getSolarVariantList() {
      let resultSolarVariantList = await axios.get(
        "https://app.fuelfree.in/solar/list/variant",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      let solarVariantListData = await resultSolarVariantList.data;
      setSolarVariant(solarVariantListData);
    }
    async function deleteVariant(_id) {
      let res = await axios.delete(
        `https://app.fuelfree.in/product/variantDelete/${_id}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      let result = await res.data;
      window.location.reload();
    }
    async function deleteSolarVariant(_id) {
      let res = await axios.delete(
        `https://app.fuelfree.in/solar/delete/${_id}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      let result = await res.data;
      window.location.reload();
    }
  
    useEffect(() => {
      getVariantList();getSolarVariantList()
    }, []);

  return (
    <>
    <Header/>
      <div id="OUR-CARS">
                <div className="tanker">
                    <div className="OUR-CARS-outer">
                        {variantList && variantList.map((data) => (
                            <div class="Carcard" key={data._id}>
                                <img alt={`${data.productName} image`} src={`https://app.fuelfree.in/${data.productImage}`} />
                                <div class="Cartitle">
                                    <h5>{data.productName}</h5>
                                    <h6>{data.variant}</h6>
                                    <h4 style={{color: "#262681"}}><BiRupee/>{data.productPrice}</h4>
                                    <Link to={`/productpagevarient/${data._id}`} class="view-offer-a">View Details</Link>
                                </div>
                               <RiDeleteBin6Line className='delte-variant' onClick={() => deleteVariant(data._id)}/>
                            </div>
                        ))}
                        {solarVariantList && solarVariantList.map((data) => (
                            <div class="Carcard" key={data._id}>
                                <img alt={`${data.productName} image`} src={`https://app.fuelfree.in/${data.productImage}`} />
                                <div class="Cartitle">
                                    <h5>{data.productName}</h5>
                                    <h6>{data.variant}</h6>
                                    <h4 style={{color: "#262681"}}><BiRupee/>{data.productPrice}</h4>
                                    <Link to={`/solar-variant-details/${data._id}`} class="view-offer-a">View Details</Link>
                                </div>
                               <RiDeleteBin6Line className='delte-variant' onClick={() => deleteSolarVariant(data._id)}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
    </>
  )
}

export default AdminVariantList
