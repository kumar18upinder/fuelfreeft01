import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import Adminsidebar from "./adminsidebar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UsedVehicleDetailsAdmin = () => {
  const navigate = useNavigate();
  const [usedVehicle, setUsedVehicle] = useState({});
  const usedVehicleDetail = usedVehicle.Details;

  const { id } = useParams();

  const handleUsedVehicleDetail = async () => {
    let response = await axios.get(
      `https://app.fuelfree.in/usedVehicle/details/${id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let usedVehicleDetailData = response.data;
    setUsedVehicle(usedVehicleDetailData);
  };

  useEffect(() => {
    handleUsedVehicleDetail();
  }, []);

  let goTologin = () => {
    toast.warning("Please Login");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
    return { _id: null };
  };

  //Formik Form

  const defaultValue = {
    placeYourBid: "",
  };

  const [price, setprice] = useState("");

  const validationscema = yup.object().shape({
    placeYourBid: yup
      .number()

      .max(
        price * 2 - 1,
        `maximum bid amount should be less than ${
          price ? `${price * 2 - 1}` : `double-1`
        }`
      )
      .min(price + 500, `minimum bid amount will be ${price + 500}`)
      .required("Please Enter Bid Amount"),
  });

  //get product id
  const [pID, setid] = useState();

  const getId = (pid, currentprice) => {
    setid(pid);
    setprice(currentprice);
  };

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : NaN;

  const handlesubmit = async (value) => {
    let uid = user ? user._id : goTologin();

    let res = await axios.post(
      `https://app.fuelfree.in/auction/add/${uid}/${pID}`,
      value,
      {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const result = await res.data;
    if (result.success === "success") {
      window.location.reload();
    }
  };
  const [auction,setauction]=useState('')
  console.log(auction,'auction')
  const getauctionList=async()=>{
    let res=await axios.get(`https://app.fuelfree.in/usedVehicle/auctionList/${id}`,{
       headers:{
        "Accept":'application/json'
      }
    })
    let result=await res.data
    let auctios=await result.auction
    setauction(auctios)
  }

  useEffect(()=>{
      getauctionList()
  },[id])

  return (
    <div id="product_page_id">
      <Adminsidebar />
      <div className="tanker">
        <div className="charging-cls admin-marg">
          <div className="dealer-banner">
            <img
              src={`https://app.fuelfree.in/${
                usedVehicleDetail && usedVehicleDetail.Image
              }`}
              alt={`${
                usedVehicleDetail && usedVehicleDetail.vehicleName
              } used-vehicle `}
            />
          </div>
          <div className="charging-page">
            <div>
              <div className="store-para1">
                <h4 className="storepage-heading">
                  {usedVehicleDetail && usedVehicleDetail.vehicleName}
                </h4>
                <div class="container">
                  <table class="table table-bordered">
                    <tbody >
                      <tr>
                        <td style={{color:"#fff"}}>Seller Name</td>
                        <td style={{color:"#fff"}}>
                          {usedVehicleDetail && usedVehicleDetail.sellerName}
                        </td>
                      </tr>
                      <tr>
                        <td style={{color:"#fff"}}>Vehicle Type</td>
                        <td style={{color:"#fff"}}>
                          {usedVehicleDetail && usedVehicleDetail.vehicleType}
                        </td>
                      </tr>
                      <tr>
                        <td style={{color:"#fff"}}>Current Price</td>
                        <td style={{color:"#fff"}}>
                          {usedVehicleDetail && usedVehicleDetail.currentPrice}
                        </td>
                      </tr>
                      <tr>
                        <td style={{color:"#fff"}}>Contact No.</td>
                        <td style={{color:"#fff"}}>
                          {usedVehicleDetail && usedVehicleDetail.contactNo}
                        </td>
                      </tr>
                      <tr>
                        <td style={{color:"#fff"}}>Minimum Bid</td>
                        <td style={{color:"#fff"}}>
                          {usedVehicleDetail && usedVehicleDetail.minimumBid}
                        </td>
                      </tr>
                      <tr>
                        <td style={{color:"#fff"}}>Number of Bids:</td>
                        <td style={{color:"#fff"}}>{usedVehicleDetail && usedVehicleDetail.bids}</td>
                      </tr>
                      <tr>
                        <td style={{color:"#fff"}}>Description</td>
                        <td style={{color:"#fff"}}>
                          {usedVehicleDetail &&
                            usedVehicleDetail.productDescription}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {usedVehicleDetail &&
                  usedVehicleDetail.participateInAuction === true ? (
                    <>
                    <div className="auc-details mb-5">                    
                     <div className="auction-details">
                        <h3 style={{color:"#fff"}}>
                          {usedVehicleDetail && usedVehicleDetail.vehicleName}
                        </h3>
                        <p style={{color:"#fff"}}>
                          Bid Amount : Minimum Bid ₹
                          {usedVehicleDetail && usedVehicleDetail.minimumBid}
                        </p>
                      </div>

                      <Formik
                        initialValues={defaultValue}
                        validationSchema={validationscema}
                        onSubmit={handlesubmit}
                      >
                        <div className="div-2">
                          <h2 style={{color:"#fff"}}>Bid Now</h2>
                          <Form>
                            <Field
                              type="number"
                              name="placeYourBid"
                              placeholder="Bid Amount"
                            />
                            <button
                              type="submit"
                              onClick={() =>
                                getId(
                                  usedVehicleDetail && usedVehicleDetail._id,
                                  usedVehicleDetail &&
                                    usedVehicleDetail.minimumBid
                                )
                              }
                              style={{color:"#fff"}}>
                              Place Bid
                            </button>
                          </Form>
                          <p className="text-danger">
                            <ErrorMessage name="placeYourBid" />
                          </p>
                        </div>
                      </Formik>
                      </div>

                    </>
                  ) : (
                    <div className="auction-details mb-5">
                      <h3 style={{color:"#fff"}}>
                        {usedVehicleDetail && usedVehicleDetail.vehicleName}
                      </h3>
                      <p style={{color:"#fff"}}>
                        Price ₹
                        {usedVehicleDetail && usedVehicleDetail.minimumBid}
                      </p>
                    </div>
                  )}
                </div>
                <div className="auctions-headings" >
                  <h2>All bids</h2>
                
            <table className="tabledata-charge">
            <div>
              <tr>
                <th>Bid Amount</th>
                <th>Bidder Name</th>
                <th>Bidder email</th>
                <th>Bidder  phoneNo </th>
              </tr>
            </div>
            {auction &&
                auction.map((data) => (
                  <div key={data._id} >
                      <>
                        <tr   className="table-data-auction">
                          <td className="table-data-auction" >{data.placeYourBid}</td>
                        {data.userID?(<td className="table-data-auction" >{data.userID.userName}</td>):('')}  
                       {data.userID?( <td className="table-data-auction" >{data.userID.userEmail}</td>):('')}   
                       {data.userID?(<td className="table-data-auction" >{data.userID.userName}</td>):('')}     
                       {data.userID?( <Link to={`/userprofileadmin/${data.userID._id}`} ><button>see user</button> </Link>):('')}      
                        </tr>
                      </>
                  </div>
                ))}
           
          </table>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsedVehicleDetailsAdmin;
