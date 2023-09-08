
import './servicecenters.css'
import { Link } from 'react-router-dom';
import appstore from "../pages/images/app-store.jpeg"
import appstoregoogle from "../pages/images/app-store-google.jpeg"
import Header from '../components/header';
import Footer from '../components/footer';

function Servicecenters(){
    return(
        <div>
          <Header />
          <div className="width-percent width-percent-2">
            <div className='offers-cls'>
               <p>For using this feature please download our application</p>
               <div> 
               <Link to="#"> <img src={appstore}  alt='play-store'/> </Link>
               <Link to="#"> <img src={appstoregoogle} alt='apple-store'/> </Link>
               </div>
            </div>
          </div>
          <Footer />
        </div>
    );
};

export default Servicecenters;