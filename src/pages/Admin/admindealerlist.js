
import './admin.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Adminsidebar from "./adminsidebar";
import { useNavigate } from "react-router-dom";
function Admindealerlist() {

    const navigate = useNavigate()
    const [vendorelist, setvendoreList] = useState({})
    const [apiStatus, setApiStatus] = useState(null)
    let listtype = vendorelist.List
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    async function getvendoreList() {
        let resultvendore = await axios.get('https://app.fuelfree.in/agency/list', {
            headers: {
                "Accept": "application/json"
            }
        })
        let vendoreData = await resultvendore.data
        setvendoreList(vendoreData)
    }

    useEffect(() => {
        getvendoreList()
    }, [])
    const approveRequest = async () => {
        try {
            const response = await fetch(`https://api.fuelfree.in/admin/agency/statusUpdate/644b6bbe9f1b26b89f64d9de`, {
                method: 'patch',
                body: JSON.stringify({ /* Request body */ }),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseData = await response.json();
            setApiStatus(responseData.status === true);
        } catch (error) {
            console.error(error);
        }
    };
    const gologinadmin = () => {
        if (!localStorage.getItem('Admin-Info')) {
            navigate('/admin')
        }
    }
    useEffect(() => {
        gologinadmin()
    }, [])
    return (
        <div id="admin-page-id">
            <Adminsidebar />
            <div className="admin-dashboard">
                <div className="admin-dashboard-outer-list">
                    <div class="admin-title"><h3>Dealer</h3></div>

                    <div className="admin-dashboard-table">
                        <div className="admin-dashboard-table ">
                            <ul>
                                <li id="admint-table-haeding">

                                    <div className="admin-dashboard-name">
                                        <span> Vender name </span>
                                        <span>City</span>
                                        <span className="admin-emil">Email</span>
                                        <span>address</span>
                                    </div>
                                    <div className="delaer-open-details">
                                        <span>Free Test drive </span>
                                        <span>oping time</span>
                                        <span>closing time    </span>
                                        <span>role</span>
                                        <span>firm name </span>
                                        <span>Gst</span>
                                        <span>whatsappNo</span>
                                        <span>Status</span>
                                    </div>
                                </li>
                                {listtype && listtype.map((data, index) => (
                                    <li key={data._id}>
                                        <div className="admin-dashboard-name">
                                            <span>{data.name}</span>
                                            <span>{data.city}</span>
                                            <span className="admin-emil">{data.email}</span>
                                            <span>{data.address} </span>
                                        </div>
                                        <div>
                                            <div class="modal fade" id={alphabet[index]} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <h4>All details</h4>
                                                    <p>Name-{data.name}</p>
                                                    <p>City-{data.city}</p>
                                                    <p>Email-{data.email}</p>
                                                    <p>Address-{data.address} </p>
                                                    <p>freeTestDrive{data.freeTestDrive} </p>
                                                    <p>opening Time-{data.openingTime}</p>
                                                    <p>closing Time-{data.closingTime}    </p>
                                                    <p>Role-{data.role}</p>
                                                    <p>Firm Name{data.firmName}    </p>
                                                    <p>Gst{data.GSTNo}</p>
                                                    <p>Address-{data.address}    </p>
                                                    <p>Status-{data.status}</p>
                                                    <p>whatsapp No-{data.whatsappNo}</p>
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="delaer-open-details" id={index}>
                                            <span>{data.freeTestDrive} </span>
                                            <span>{data.openingTime}</span>
                                            <span>{data.closingTime}    </span>
                                            <span>{data.role}</span>
                                            <span>{data.firmName}    </span>
                                            <span>{data.GSTNo}</span>
                                            <span>{data.status}</span>
                                            <span>{data.whatsappNo}</span>
                                        </div>
                                        <div className="apporve-ignore">
                                            <div>
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${alphabet[index]}`}>
                                                    See More
                                                </button>
                                            </div>
                                            <div>
                                                <button onClick={approveRequest} >Approve</button>
                                                {apiStatus === true && <p>Request approved!</p>}
                                                {apiStatus === false && <p>Request failed!</p>}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Admindealerlist;