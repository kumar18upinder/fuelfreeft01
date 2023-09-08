import React, { useState } from "react";
import "./contact.css";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react"

function Contact() {
  const [Name, setName] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');
  const [Email, setEmail] = useState('');
  const [City, setCity] = useState();
  const [Message, setMessage] = useState('');

  const contactUs = async () => {
    let item = { Name, PhoneNo, Email, City, Message };
    console.log(item);

    const response = await axios.post("https://app.fuelfree.in/contact/add", item, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let result = await response.data;
    // console.log(result, "fghj");
  if(result.success === "success"){
    toast.success(result.success)
  }else{
    toast.error(response.error)
  }

  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <Header />
        <ToastContainer/>
        <div className="div-contact-corner"></div>
        <div className="main-outer-contact">
          <section id="contact-us-page-id">
            <div className="main-div-contact">
              <div className="contact-tanker">
                {/* <form> */}
                <div className="contact-tanker">
                  <h2>Get In Touch</h2>
                  <div className="forms-input">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    {/* <input type="text" placeholder="Subject" value={su} onChange={(e) => setName(e.target.value)}></input> */}
                    <input
                      type="tel"
                      placeholder="Phone No"
                      value={PhoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                    ></input>
                    <input
                      type="text"
                      placeholder="City"
                      value={City}
                      onChange={(e) => setCity(e.target.value)}
                    ></input>
                    <textarea
                      placeholder="Message"
                      value={Message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button className="primary-btn" onClick={contactUs}>
                      Send Message
                    </button>
                  </div>
                </div>
                {/* </form> */}
              </div>
         
              <iframe
                src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.148344453078!2d75.88488231476354!3d22.72272698510571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fde5e87649ed%3A0x9407a2ee0ebf5d6a!2sFuel%20Free!5e0!3m2!1sen!2sin!4v1678186542747!5m2!1sen!2sin"
                title="fule free map"
              ></iframe>
             
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
