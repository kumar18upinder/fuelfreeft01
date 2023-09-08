import React from "react";
import "./Booknow.css";
import Header from "../components/header";
import Footer from "../components/footer";

const BookNow = () => {
   
  return (
    <>
      <Header />
      <div className='tanker'>
      <div className='booknowdetails-main'>
            <h2>Here is your booking details</h2>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default BookNow;
