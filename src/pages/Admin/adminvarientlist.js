// import React from "react";
// // import "./productpage.css";
// // import Header from "../components/header";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// // import Footer from "../components/footer";
// import { useNavigate } from "react-router-dom";
// import $ from "jquery";
// import { useRef } from "react";
// import Adminsidebar from "./adminsidebar";

// const Adminvarientlist = () => {


//   const sectionRef = useRef(null);

//   function scrollToSection() {
//     sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//   }


//   // ==========================================================================
//   const { id } = useParams();

//   // const [subject, setSubject] = useState(null);
//   // const [rating, setRating] = useState(null);
//   // const [review, setReview] = useState(null);

  





//   // =============================tabs======================




// //   const { id } = useParams();

//   //variant
//   const [carList, setCarList] = useState({});
//   let carType = carList.List;
//   console.warn(carType);

//   async function getCarList() {
//     let resultCycle = await axios.get(
//       `https://app.fuelfree.in/product/variantsList/${id}`,
//       {
//         headers: {
//           Accept: "application/json",
//         },
//       }
//     );
//     let carData = await axios.post(resultCycle.data)
//     setCarList(carData);
//   }

//   useEffect(() => {
//     getCarList();
//   }, []);


  











//   return (
//     <>
  
//       <Adminsidebar />
//       <div className="Product-page" id="paduct-varient">
//         {carType &&
//           carType.map((data) => (
//             <div class="variantcard">
//               <div className="varientimg">
//                 <img
//                   src={`https://app.fuelfree.in/${data && data.productImage}`}
//                 />
//               </div>
//               <div class="varianttitle">
//                 <h5>{data.productName}</h5>
//                 <p>₹{data.productPrice}</p>
//                 <Link to={`/productpagevarient/${data._id}`}></Link>
//               </div>
//             </div>
//           ))}
//       </div>      
//     </>
//   );
// };

// export default Adminvarientlist;

