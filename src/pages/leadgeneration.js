import { Link} from "react-router-dom";
import './admin.css';
import Adminsidebar from "../components/adminsidebar";
function leadgeneration(){
    return(
        <div id="admin-page-id">
        <Adminsidebar/>
        <div className="admin-dashboard">
            <div className="admin-dashboard-outer">


            </div>
        </div>
    </div>
    );
};
export default leadgeneration;