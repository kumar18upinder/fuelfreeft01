import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './EnquiryForm.css';
import Flotingfooter from "../components/flotingfooter";
import Header from '../components/header';
import Footer from '../components/footer';

function EnquiryForm() {
  const [Name, setName] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [Date, setDate] = useState('');
  const [time, settime] = useState('');

  async function userenquiry() {
    const item = {
      Name,
      PhoneNo,
      Email,
      Message,
      Date,
      time,
    }
    try{
      let result = await axios.post('https://app.fuelfree.in/consult/Add', item, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json"
        }
    });
    if(result.data.success){
      toast.success("Success")
    } else {
      toast.error("Unknown Error!!!")
    }
    }
    catch(error){
      toast.error("Unknown Error!!!")
    }
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <div className='tanker'>
        <div className='welcomeline'>
          <h3>WELCOME TO FUELFREE</h3>
          <p>FEEL FREE TO CONTACT US</p>
        </div>
        <div className='EnquiryAll'>
          <div className='Enquiryformouter'>
            <div className='enquiry-form'>
              <h2>Free Consultation</h2>
              <input type="text" value={Name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
              <input type="Number" value={PhoneNo} placeholder="Phone" onChange={(e) => setPhoneNo(e.target.value)} />
              <input type="email" value={Email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <input type="Date" value={Date} placeholder="Date" onChange={(e) => setDate(e.target.value)} />
              <input type="time" value={time} placeholder="Time" onChange={(e) => settime(e.target.value)} />
              <textarea value={Message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
              <button onClick={userenquiry}>
                Submit
              </button>
            </div>
          </div> 
          <div className='EnquiryContent'>
            <div className='Enquirybackground'></div>
          </div>
        </div>
      </div>
      <Flotingfooter />
      <Footer />
    </>
  );
}

export default EnquiryForm
