import React from 'react';
import './Fillenquiryform.css';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Fillenquiryform() {


    const { id,pName } = useParams()

    const [productDetails, setDetails] = useState('')
    let data = productDetails.productDetails
        // (data, "ProductDetails")
    async function getProductdetails() {
        let resultDetails = await axios.get(`https://app.fuelfree.in/product/details/${id}`, {
            headers: {
                "Accept": "application/json"
            }
        })
        let data = await resultDetails.data
        //     (data)
        setDetails(data)
    }

    useEffect(() => {
        getProductdetails()
    }, [])
    let user=  localStorage.getItem('user')?(  JSON.parse(localStorage.getItem('user'))
    ):('')
     
    let userid = user._id

    const [Name, setName] = useState(user.userName);
    const [PhoneNo, setPhoneNo] = useState(user.phoneNo);
    const [productName, setproductName] = useState(pName);
    const [Message, setMessage] = useState('');
    const [city, setcity] = useState('');


    const enquiry = async () => {
        let item = {
            ...productName,productName:data&&data.productName,
            Name,
            PhoneNo,
            city,
            Message,
        }
            // (item)

try {
    let res = await axios.post(
        `https://app.fuelfree.in/enquiry/enquirycreate/${userid}/${data._id}`,
        item,
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }
    );
    let result = await res.data;
        // (result);

    if (result.success === "success") {
        toast.success(result.message)
    } else {
        toast.error(result.error)
    }
} catch (error) {
    toast.error("Invalid Inquiry")
}
      

    }
    return (
        <div>
            <Header />
            <ToastContainer />
            <div className='tanker'>
                <div className='welcomeline'>
                    <h3>Fill Your Enquiry</h3>
                    <p>FEEL FREE TO CONTACT US</p>
                </div>
                <div className='EnquiryAll'>
                    <div className='Enquiryformouter'>
                        <div className="enquiry-form">
                            {/* <form className="enquiry-form"> */}
                            <h2>Enquiry</h2>
                            <lable className="label-enquiry">Product Name</lable>
                            <input type="productname" value={pName} />
                            <lable className="label-enquiry">Enter Name</lable>
                            <input type="text" value={Name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                            <lable className="label-enquiry">Enter Phone Number</lable>
                            <input type="tel" value={PhoneNo} placeholder="Phone" onChange={(e) => setPhoneNo(e.target.value)} />
                            <lable className="label-enquiry">Enter Message</lable>
                            <input type="message" value={Message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
                            <lable className="label-enquiry">Enter City</lable>
                            <input type="text" value={city} placeholder="city" onChange={(e) => setcity(e.target.value)} />
                            <button type="submit" onClick={enquiry}>Submit</button>
                            {/* </form> */}
                        </div>
                    </div>
                    <div className='EnquiryContent-enquiry'>
                        <div className='Enquirybackground'></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Fillenquiryform;