import React,{useState} from "react";
import "./newsletter.css";
import axios from "axios";
// import { Link } from "react-router-dom";
import png0101 from "../pages/images/png-01-01.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsLetter = () => {
  const [PhoneNO, setPhoneNo] = useState("");
  async function subscribe() {
    let item = {
      PhoneNO,
    };
        // (item, "item");
    let res = await axios.post(
      "https://app.fuelfree.in/subscribe/subscribecreate",
      item,
      {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    let result = await res.data;
        // (result, "result");

    if (result.success === "success") {
      toast.success(result.message)
    } else {
      toast.error(result.error)
    }
  }
  return (
    <div>
      <ToastContainer/>
      <section id="newslatter-id-outer">
        <div className="Newslatter-background-img img-relative">
          <img className="img-absolute" src={png0101} alt="nl-img"></img>
          <div className="tanker">
            <div className="Newsletter-full-page">
              <div className="newslater-inner-flex">
                <div id="Newsletter">
                  <div className="written-section-newsletter">
                    <h1>Subscribe To <span>Newsletter</span> </h1>
                    <p>
                      Being a better marketer or influencer is about more than
                      just sending emails, getting leads, and making sales.
                      You'll get better results when you take a closer look at
                      what other marketers are doing. That's how you can learn
                      how to tell great stories, create remarkable user
                      experiences.
                    </p>
                    {/* <form> */}
                    <div className="newsletter-input_button">
                       
                      <input
                        type="tel"
                        value={PhoneNO} pattern="[0-9]{3}[0-9]{4}[0-9]{3}" required
                        onChange={(e) => setPhoneNo(e.target.value)}
                        placeholder="Enter Your Number"
                      ></input>
                      <button className="main-btn-submit" type="submit"  onClick={subscribe}>Submit</button>
                      
                    </div>
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
