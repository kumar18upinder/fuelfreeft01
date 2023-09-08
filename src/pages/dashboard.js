// import { Link} from "react-router-dom";
// import './admin.css';
// // import logo from './images/logo.png';
// import Adminsidebar from "../components/adminsidebar";
// function dashboard(){
//     return (
//         <div id="admin-page-id">
//             <Adminsidebar/>
//             <div className="admin-dashboard">
//                 <div className="admin-dashboard-outer">

// <Link to="">,jn</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export  default dashboard;


import { Link } from "react-router-dom";
import './admin.css';
// import logo from './images/logo.png';
import Adminsidebar from "./adminsidebar";
import axios from "axios";
function Dashboard() {

    const Details=async()=>{
        let res=await axios.get("",{
            headers:{
                "Accept":"application/json"
            }
        })
        let result = await res.data
    }
    

    return (
        <div id="admin-page-id">
            <Adminsidebar />
            <div className="admin-bg-div"></div>
            <div className="admin-dashboard">
                <div className="admin-dashboard-outer">
                    {/* ================================================= */}
                   <div className="admin-dashbord-content">
                    <div className="admin-dashbord-content-inner">
                        <div className="dashboard-inner-content">
                            <div className="doashboard-content-line">
                            <h5>all user</h5>
                            <span>1500000</span>
                            
                            </div>
                        </div>

                    </div> 
                   </div>
                   {/* ========================================================= */}

                   {/* ================================================= */}
                   <div className="admin-dashbord-content">
                    <div className="admin-dashbord-content-inner">
                        <div className="dashboard-inner-content">
                            <div className="doashboard-content-line">
                            <h5>Active user</h5>
                            <span>15</span>
                            
                            </div>
                        </div>

                    </div> 
                   </div>
                   {/* ========================================================= */}


                   {/* ================================================= */}
                   <div className="admin-dashbord-content">
                    <div className="admin-dashbord-content-inner">
                        <div className="dashboard-inner-content">
                            <div className="doashboard-content-line">
                            <h5>Total vendor</h5>
                            <span>15</span>
                            
                            </div>
                            
                        </div>

                    </div> 
                   </div>
                   {/* ========================================================= */}
                    {/* ================================================= */}
                    <div className="admin-dashbord-content">
                    <div className="admin-dashbord-content-inner">
                        <div className="dashboard-inner-content">
                            <div className="doashboard-content-line">
                            <h5>Booking</h5>
                            <span>15</span>
                            
                            </div>
                            
                        </div>

                    </div> 
                   </div>
                   {/* ========================================================= */}

                   

                   {/* ================================================= */}
                   <div className="admin-dashbord-content">
                    <div className="admin-dashbord-content-inner">
                        <div className="dashboard-inner-content">
                            <div className="doashboard-content-line">
                            <h5>Leads </h5>

                            </div>
                            <ul>
                                <li><p>Leads send</p> <span>15</span></li>
                                <li><p>Leads Pending</p> <span>15</span></li>
                            </ul>
                            
                        </div>

                    </div> 
                   </div>
                   {/* ========================================================= */}
                   {/* ================================================= */}
                   <div className="admin-dashbord-content" style={{width:"30%"}}>
                    <div className="admin-dashbord-content-inner">
                        <div className="dashboard-inner-content">
                            <div className="doashboard-content-line">
                            <h5>Commison from vendors</h5>

                            </div>
                            <ul>
                                <li> <span>pulsar</span> <span>3500$</span></li>

                                <li> <span>pulsar</span> <span>3500$</span></li>

                                <li> <span>pulsar</span> <span>3500$</span></li>
                               
                            </ul>
                            
                        </div>

                    </div> 
                   </div>
                   {/* ========================================================= */}
                   {/* ================================================= */}
                   <div className="admin-dashbord-content" style={{width:"20%"}}>
                    <div className="admin-dashbord-content-inner">
                        <div className="dashboard-inner-content">
                            <div className="doashboard-content-line">
                            <h5>Most selling vehicle</h5>

                            </div>
                            <ul>
                                <li> <span>pulsar</span> <span>3500$</span></li>

                                <li> <span>pulsar</span> <span>3500$</span></li>

                                <li> <span>pulsar</span> <span>3500$</span></li>
                               
                            </ul>
                            
                        </div>

                    </div> 
                   </div>
                   {/* ========================================================= */}

                    {/* ================================================= */}
                    <div className="admin-dashbord-content" style={{width:"50%"}}>
                    <div className="admin-dashbord-content-inner">
                        <div className="dashboard-inner-content">
                            <div className="doashboard-content-line">
                            <h5>Leads </h5>

                            </div>
                            <ul>
                                <li><p>Roshan</p> <span>pulsar</span> <span>3500$</span></li>
                                <li><p>Leads Pending</p> <span>15</span></li>
                            </ul>
                            
                        </div>

                    </div> 
                   </div>
                   {/* ========================================================= */}

                   {/* ================================================= */}
                   <div className="admin-dashbord-content" style={{width:"50%"}}>
                    <div className="admin-dashbord-content-inner">
                        <div className="dashboard-inner-content">
                            <div className="doashboard-content-line">
                            <h5>Leads send</h5>

                            </div>
                            <ul>
                                <li><p>Roshan</p> <span>pulsar</span> <span>3500$</span></li>
                                <li><p>Leads Pending</p> <span>15</span></li>
                            </ul>
                            
                        </div>

                    </div> 
                   </div>
                   {/* ========================================================= */}

                   




                   

                 
                   
                </div>
            </div>
        </div>
    );
};
export default Dashboard;