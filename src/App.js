import "./App.css";
import "./pages/Becomeadealer.css";
import React from 'react'
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Collection from "./pages/collection";
import DealerList from "./pages/dealerList";
import BlogwithSideBar from "./pages/blogwithSideBar";
import Becomeadealer from "./pages/Becomeadealer";
import Admin from "./pages/Admin/admin";
import Dashboard from "./pages/Admin/dashboard";
import Admindealerlist from "./pages/Admin/admindealerlist";
import FAQ from "./pages/FAQ";
import DealerDetails from "./pages/dealerDetails";
import Privacypolicy from "./pages/privacypolicy";
import EnquiryForm from "./pages/EnquiryNow";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Cycle from "./pages/cycle";
import Scooters from "./pages/scooters";
import Bike from "./pages/bike";
import Eauto from "./pages/eauto";
import Car from "./pages/car";
import LoadingVehicle from "./pages/loadingVehicle";
import Buses from "./pages/buses";
import LogisticsVehicle from "./pages/logisticsVehicle";
import Offers from "./pages/offers";
import Productpage from "./pages/productpage";
import CompareType from "./pages/compareType";
import SemifinalCompare from "./pages/compareProdustsPages/semifinalCompare";
import ComparisonMobile from "./pages/compareProdustsPages/comparisonMobile";
import Comingsoon from "./pages/comingsoon";
import Fillenquiryform from "./pages/Fillenquiryform";
import NewsDetails from "./pages/newsDetails";
import News from "./pages/news";
import TataBrand from "./pages/tataBrand";
import Hyundai from "./pages/Hyundai";
import Mahindra from "./pages/Mahindra";
import { TVS } from "./pages/TVS";
import Kia from "./pages/Kia";
import MercedesBenz from "./pages/MercedesBenz";
import Audi from "./pages/Audi";
import Volvo from "./pages/Volvo";
import Eicher from "./pages/Eicher";
import Ola from "./pages/Ola";
import Kinatic from "./pages/Kinetic";
import Twowheeler from "./pages/Twowheeler";
import Threewheeler from "./pages/Threewheeler";
import Fourwheeler from "./pages/Fourwheeler";
import Editproduct from "./pages/Admin/Editproduct";
import Updateproduct from "./pages/Admin/Updateproduct";
import Mg from "./pages/mg";
import Profile from "./pages/profile";
import Servicecenterlist from "./pages/Servicecenterlist";
import Termsandconditions from "./pages/Termsandconditions";
import Amindeler from "./pages/Admin/admindeler";
import Adminchargingstation from "./pages/Admin/adminchargingstation";
import Chargingstationbooking from "./pages/Chargingstationbooking";
import Dealerpagedetail from "./pages/dealerpagedetail";
import Storepage from "./pages/Storepage";
import ChargingStore from "./pages/chargingDetails";
import Chargingstationone from "./pages/Chargingstationlist";
import AgencyList from "./pages/agencyList";
import UpdateProfile from "./pages/updateProfile";
import BookNow from "./pages/bookNowDetails";
import ParticularProductDealer from "./pages/particularProductDealer";
import Whatpowerus from "./pages/whatpowerus";
import UsedVehicleForm from "./pages/usedVehicleForm";
import BuyNowSecond from "./pages/buyNowsecond";
import TestDriveFormSecond from "./pages/testDriveFormsecond";
import NewsForm from "./pages/newsForm";
import EMIdesign from "./components/testingpages/EMIdesign";
import ProductTabs from "./pages/variants";
import VariantsTab from "./pages/varientstab";
import DescriptionTab from "./pages/desctiptiontab";
import ReviewTab from "./pages/reviewtab";
import Productpagevarient from "./pages/productpagevarient";
import Addvariant from "./pages/Admin/addvariant";
import UsedVehicleList from "./pages/usedVehicleList";
import UsedVehicleDetails from "./pages/usedVehicleDetails";
import ServiceDetails from "./pages/serviceDetails";
import Adminservicecenter from "./pages/Admin/adminservicecenter";
import Approvedagency from "./pages/Admin/Agencyapproved";
import Auction from "./pages/auction";
import Wishlist from "./pages/wishlist";
import FuelfreeAdminOffer from "./pages/fuelfreeAdminOffer";
import AdminleadsForm from "./pages/Admin/adminleadsform";
import Product from "./pages/product";
import UserList from "./pages/Admin/userList";
import ScooterAddProduct from "./pages/Admin/AddProduct/scooterAddProduct";
import BikeAddProduct from "./pages/Admin/AddProduct/bikeAddProduct";
import CycleAddProduct from "./pages/Admin/AddProduct/cycleAddProduct";
import LoadingAddProduct from "./pages/Admin/AddProduct/loadingAddProduct";
import LogisticsAddProduct from "./pages/Admin/AddProduct/logisticsAddProduct";
import BusAddProduct from "./pages/Admin/AddProduct/busAddProduct";
import CarAddProduct from "./pages/Admin/AddProduct/carAddProduct";
import EAutoAddProduct from "./pages/Admin/AddProduct/rickshawAddProduct";
import BikeAddVariant from "./pages/Admin/AddVariant/bikeAddVariant";
import BusAddVariant from "./pages/Admin/AddVariant/busAddVariant";
import CarAddVariant from "./pages/Admin/AddVariant/carAddVariant";
import CycleAddVariant from "./pages/Admin/AddVariant/cycleAddVariant";
import LoadingAddVariant from "./pages/Admin/AddVariant/loadingAddVariant";
import LogisticsAddVariant from "./pages/Admin/AddVariant/logisticsAddVariant";
import EAutoAddVariant from "./pages/Admin/AddVariant/rickshawAddVariant";
import ScooterAddVariant from "./pages/Admin/AddVariant/scooterAddVariant";
import Komaki from "./pages/Komaki";
import BookingHistory from "./pages/bookingHistory";
import Pureev from "./pages/Pureev";
import Hero from "./pages/Hero";
import Speego from "./pages/speego";
import Enquiryadmin from "./pages/Admin/enquiryadmin";
import Admintestdrive from "./pages/Admin/admintestdrive";
import GoogleLogins from "./pages/googleLogin";
import Testdriveform from "./pages/Admin/testdriveform";
import UserProfileAdmin from "./pages/Admin/UserProfielAdmin";
import AdminBookingHistory from "./pages/Admin/Adminbookinghistory";
import Adminnews from "./pages/Admin/adminnews";
import Approvedchargingstation from "./pages/Admin/ChargingApproved";
import UsedvehicleApproval from "./pages/Admin/UsedVehicleApprovel";
import AdminOffer from "./pages/adminoffers";
import UsedVehicleDetailsAdmin from "./pages/Admin/usedvehicledet";
import ApprovedUsedVehicle from "./pages/Admin/ApprovedUsedVehicle";
import NewsLetterAdmin from "./pages/Admin/NewsLetterAdmin";
import Totalbookings from "./pages/Admin/Totalbookings";
import AddNewProd from "./pages/Admin/Adminaddproductcategory";
import NewsAdminList from "./pages/Admin/NewsAdminList";
import NewsEditAdmin from "./pages/Admin/NewsEditAdmin";
import OfferAdminList from "./pages/Admin/adminofferlist";
import TotalSentLeads from "./pages/Admin/TotalSentleads";
import Totalchargingbookings from "./pages/Admin/AllChargingSlotBook";
import Adminwishlist from "./pages/Admin/Adminwishlist";
import ConsultationAdmin from "./pages/Admin/Consultation";
import Electricluna from "./pages/electricluna";
import Reel from "./pages/Reels-section/reels";
import AddReel from "./pages/Admin/Admin-reel-section/addReel";
import AddLuna from "./pages/Admin/AddProduct/addLuna";
import Affiliateform from "./pages/affiliateformmain";
import AdminSolarList from "./pages/adminSolarList";
import SolarAddProduct from "./pages/Admin/AddProduct/solarAddProduct";
import SolarProductDetails from "./pages/solarProductDetails";
import Affiliaterefferalcode from "./pages/affiliaterefferalcode";
import AgencyVisitCount  from './pages/Admin/agencyVisitCount'
import ScooterUpdate from "./pages/Admin/updateProduct/scooterUpdate";
import CycleUpdate from "./pages/Admin/updateProduct/cycleUpdate";
import CarUpdate from "./pages/Admin/updateProduct/carUpdate";
import LogisticsUpdate from "./pages/Admin/updateProduct/logisticsUpdate";
import SolarAddVariant from "./pages/Admin/AddVariant/solarAddVariant";
import LunaAddVariant from "./pages/Admin/AddVariant/lunaAddVariant";
import UpdateSolarProduct from "./pages/Admin/updateProduct/solarUpdate";
import RentalVehicleList from "./pages/carOnRent/rentalVehicleList";
import AdminVariantList from "./pages/adminVariantList";
import PageNotFound from "./pages/pageNotFound";
import Rentvehiclebooking from "./pages/carOnRent/rent-vehicle-booking";
import SolarVariantDetails from "./pages/solarVariantDetails";
import FacebookLogins from "./pages/facebookLogin";
import FacebookLoginComponent from "./components/facebookUser";
import RentalVehicleVendor from "./pages/carOnRent/rentalVehicleVendor";
import PrivacyPolicyPage from "./pages/privacyPolicy2";
import DealerListByCity from "./pages/dealerListByCity";
import AdminRentalVehicleList from "./pages/Admin/adminRentalVehicleList";
import AdminRentalVehicleVendor from "./pages/Admin/adminRentalVehicleVendor";
import AdminRentalVehicleBookingList from "./pages/Admin/adminRentalVehicleBooking";
import AffiliateList from "./pages/Admin/AdminAffiliateList";
import ServiceComingSoon from "./pages/serviceComingSoon";
import ProductShare from "./pages/product2";
import StarRating from "./pages/starRating";
import DynamicallyChanges from "./components/dynamicallyChanges";
import LeadList from "./pages/Admin/LeadList";
import Exchangevehicle from "./pages/exchangevhicle";
import ExchangeDealer  from '../src/pages/Admin/exchangeDealer'
import ApprovedExchangeDealer   from '../src/pages/Admin/ApprovedExchangeDealer';
import Exchangevehicledetail from "./pages/exchangevehicledetail";
import SellPetrolVehicle  from './pages/SellPetrolVehicle'
import Questionner from "./pages/Questioner";
import Membership from "./pages/Membership";
import Marketing from "./pages/Marketing/marketing";
import MarketingBooking from "./pages/Marketing/marketingBooking";
import MarketingTestDrive from "./pages/Marketing/marketingTestdrive";
import MarketingLogin  from './pages/Marketing/MarketingLogin';
import MarketingDealer from './pages/Marketing/MarketingDealer';
// import { Storepageupdated } from "./pages/Storepageupdated";
import DealerStore from "./pages/dealerStore";

function App() {
  const handleclick = (item) => {
    localStorage.setItem("product", JSON.stringify(item));

  };
  return (
    <div className="margin-header">
      <Routes>
        <Route path="/" element={<Home handleclick={handleclick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/service-center" element={<ServiceComingSoon/>} />
        <Route path="/near-by-dealers-in/:city" element={<DealerList />} />
        <Route path="/dealer-List-city-wise/:city" element={<DealerListByCity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/blogwithSideBar" element={<BlogwithSideBar />} />
        <Route path="/Become-fuelfree-vendor" element={<Becomeadealer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scooter-add" element={<ScooterAddProduct />} />
        <Route path="/bike-add" element={<BikeAddProduct />} />
        <Route path="/cycle-add" element={<CycleAddProduct />} />
        <Route path="/loading-add" element={<LoadingAddProduct />} />
        <Route path="/logistics-add" element={<LogisticsAddProduct />} />
        <Route path="/bus-add" element={<BusAddProduct />} />
        <Route path="/car-add" element={<CarAddProduct />} />
        <Route path="/auto-add" element={<EAutoAddProduct />} />
        <Route path="/bike-variant-add/:id" element={<BikeAddVariant />} />
        <Route path="/add-bus-variant/:id" element={<BusAddVariant />} />
        <Route path="/add-car-variant/:id" element={<CarAddVariant />} />
        <Route path="/add-cycle-variant/:id" element={<CycleAddVariant />} />
        <Route
          path="/add-loading-variant/:id"
          element={<LoadingAddVariant />}
        />
        <Route
          path="/add-logistics-variant/:id"
          element={<LogisticsAddVariant />}
        />
        <Route path="/add-auto-variant/:id" element={<EAutoAddVariant />} />
        <Route
          path="/add-scooter-variant/:id"
          element={<ScooterAddVariant />}
        />
        <Route path="/add-solar-variant/:id" element={<SolarAddVariant/>} />
        <Route path="/solar-update-product/:id" element={<UpdateSolarProduct/>} />
        <Route path="/add-luna-variant/:id" element={<LunaAddVariant/>} />
        <Route path="/update-scooter-product/:id" element={<ScooterUpdate/>} />
        <Route path="/update-cycle-product/:id" element={<CycleUpdate/>} />
        <Route path="/update-car-product/:id" element={<CarUpdate/>} />
        <Route path="/update-logistics-product/:id" element={<LogisticsUpdate/>} />
        <Route path="/admindealerlist" element={<Admindealerlist />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/DealerDetails" element={<DealerDetails />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
        <Route path="/book-your-free-consultation" element={<EnquiryForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/electric-cycle" element={<Cycle handleclick={handleclick} />} />
        <Route
          path="/electric-scooter"
          element={<Scooters handleclick={handleclick} />}
        />
        <Route path="/electric-bike" element={<Bike handleclick={handleclick} />} />
        <Route
          path="/electric-auto"
          element={<Eauto handleclick={handleclick} />}
        />
        <Route path="/electric-car" element={<Car handleclick={handleclick} />} />
        <Route
          path="/electric-loading"
          element={<LoadingVehicle handleclick={handleclick} />}
        />
        <Route path="/electric-bus" element={<Buses handleclick={handleclick} />} />
        <Route
          path="/electric-logistics"
          element={<LogisticsVehicle handleclick={handleclick} />}
        />
        <Route path="/offers" element={<Offers />} />
        <Route path="/product-page/:Product/:type/:id" element={<ProductShare/>} />
        <Route path="/products/:Product/:type/:id" element={<Productpage />} />
        <Route path="/compareType/:id" element={<CompareType />} />
        <Route path="/compare-electric-vehicles/:id" element={<SemifinalCompare />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        <Route
          path="/send-your-enquiry/:pName/:id"
          element={<Fillenquiryform />}
        />
        <Route path="/news-details/:id" element={<NewsDetails />} />
        <Route path="/news" element={<News />} />
        <Route
          path="/tata"
          element={<TataBrand handleclick={handleclick} />}
        />
        <Route path="/compareType" element={<CompareType />} />
        <Route
          path="/comparisonMobile/:p1id/:p2id"
          element={<ComparisonMobile />}
        />
        <Route
          path="/hyundai"
          element={<Hyundai handleclick={handleclick} />}
        />
        <Route
          path="/mahindra"
          element={<Mahindra handleclick={handleclick} />}
        />
        <Route path="/tvs" element={<TVS handleclick={handleclick} />} />
        <Route path="/kia" element={<Kia handleclick={handleclick} />} />
        <Route
          path="/mercedesbenz"
          element={<MercedesBenz handleclick={handleclick} />}
        />
        <Route path="/audi" element={<Audi handleclick={handleclick} />} />
        <Route
          path="/volvo"
          element={<Volvo handleclick={handleclick} />}
        />
        <Route
          path="/eicher"
          element={<Eicher handleclick={handleclick} />}
        />
          <Route
          path="/star-rating"
          element={<StarRating/>}
        />
        <Route path="/dynamically-changes" element={<DynamicallyChanges/>}/>
        <Route
          path="/ola"
          element={<Ola handleclick={handleclick} />}
        />
        <Route
          path="/kinetic"
          element={<Kinatic handleclick={handleclick} />}
        />
        <Route path="/electric-two-wheeler" element={<Twowheeler />} />
        <Route path="/electric-three-wheeler" element={<Threewheeler />} />
        <Route path="/electric-four-wheeler" element={<Fourwheeler />} />
        <Route path="/Editproduct" element={<Editproduct />} />
        <Route path="/mg" element={<Mg />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/nearby-service-centers" element={<Servicecenterlist />} />
        <Route path="/update/:id" element={<Updateproduct />} />
        <Route path="/termsandconditions" element={<Termsandconditions />} />
        <Route path="/amindeler" element={<Amindeler />} />
        <Route
          path="/adminchargingstation"
          element={<Adminchargingstation />}
        />
        <Route path="/adminservicecenter" element={<Adminservicecenter />} />
        <Route path="/userBookingHistory" element={<AdminBookingHistory />} />
        <Route
          path="/Chargingstationbooking"
          element={<Chargingstationbooking />}
        />
        <Route path="/dealerpagedetail" element={<Dealerpagedetail />} />
        <Route path="/vendorDetails/:id" element={<Storepage />} />
        <Route path="/chargingDetails/:id" element={<ChargingStore />} />
        <Route path="/servicestationlist" element={<Servicecenterlist />} />
        <Route path="/serviceDetails/:id" element={<ServiceDetails />} />
        <Route path="/near-by-charging-station/:city" element={<Chargingstationone />} />
        <Route
          path="/book-test-drive/:vendorId/:productId"
          element={<AgencyList />}
        />
        <Route
          path="/charging-station-booking/:vendorId"
          element={<Chargingstationbooking />}
        />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/product-dealer" element={<ParticularProductDealer />} />
        <Route path="/booking-deatails" element={<BookNow />} />
        <Route path="/whatpowerus" element={<Whatpowerus />} />
        <Route path="/usedvehicleform" element={<UsedVehicleForm />} />
        <Route path="/buy-electric-vehicle/:pName/:pPrice/:VT/:brand/:city" element={<BuyNowSecond />} />
        <Route
          path="/book-your-test-drive/:pName/:VT/:brand/:city"
          element={<TestDriveFormSecond />}
        />
        <Route path="/news-form" element={<NewsForm />} />
        <Route path="/EMICalculator" element={<EMIdesign />} />
        <Route path="/variants" element={<ProductTabs />} />
        <Route path="/varientstab" element={<VariantsTab />} />
        <Route path="/descriptiontab" element={<DescriptionTab />} />
        <Route path="/reviewtab" element={<ReviewTab />} />
        <Route
          path="/productpagevarient/:id"
          element={<Productpagevarient />}
        />
        <Route path="/addvariant/:id" element={<Addvariant />} />
        <Route path="/used-vehicle-list" element={<UsedVehicleList />} />
        <Route
          path="/used-vehicle-details/:vehicleId"
          element={<UsedVehicleDetails />}
        />
        <Route path="/used-electric-vehicle-in/:city" element={<Auction />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/fuelfree-offer" element={<FuelfreeAdminOffer />} />
        <Route path="/admin-leads" element={<AdminleadsForm />} />
        <Route path="/lead-list" element={<LeadList />} />
        <Route path="/userprofileadmin/:id" element={<UserProfileAdmin />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/affiliatelist-admin" element={<AffiliateList />} />
        <Route
          path="/product"
          element={<Product handleclick={handleclick} />}
        />
        <Route path="/komaki" element={<Komaki handleclick={handleclick} />} />
        <Route path="/booking-history" element={<BookingHistory />} />
        <Route path="/pureev" element={<Pureev handleclick={handleclick} />} />
        <Route path="/hero" element={<Hero handleclick={handleclick} />} />
        <Route path="/speego" element={<Speego handleclick={handleclick} />} />
        <Route path="/enquiryadmin" element={<Enquiryadmin />} />
        <Route path="/admintestdrive" element={<Admintestdrive />} />
        <Route path="/google-login" element={<GoogleLogins />} />
        <Route path="/facebook-login" element={<FacebookLogins/>}/>
        <Route path="/testdriveform" element={<Testdriveform />} />
        <Route path="/adminnews" element={<Adminnews />} />
        <Route path="/approvedagency" element={<Approvedagency />} />
        <Route
          path="/approvedchargingstation"
          element={<Approvedchargingstation />}
        />
        <Route path="/usedvehicleApproval" element={<UsedvehicleApproval />} />
        <Route path="/adminoffer" element={<AdminOffer />} />
        <Route
          path="/usedvehicledetailsadmin/:id"
          element={<UsedVehicleDetailsAdmin />}
        />
        <Route path="/approvedusedvehicle" element={<ApprovedUsedVehicle />} />
        <Route path="/newsletter" element={<NewsLetterAdmin />} />
        <Route path="/totalbookingsAdmin" element={<Totalbookings />} />
        <Route path="/Adminaddproductcategory" element={<AddNewProd />} />
        <Route path="/news-list-admin" element={<NewsAdminList />} />
        <Route
          path="/editnewsform/:id"
          element={<NewsEditAdmin />}
        />
        <Route path="/adminofferlist" element={<OfferAdminList />} />
        <Route path="/totalsentleads" element={<TotalSentLeads />} />
        <Route
          path="/totalchargingbookings"
          element={<Totalchargingbookings />}
        />
        <Route path="/adminwishlist" element={<Adminwishlist />} />
        <Route path="/consultationadmin" element={<ConsultationAdmin />} />
        <Route path="/adminvarientlist" element={<AdminVariantList/>} />
        <Route path="/electric-luna" element={<Electricluna />} />
        <Route path="/fuelfree-reels" element={<Reel />} />
        <Route path="/fuelfree-addreel" element={<AddReel />} />
        <Route path="/add-luna" element={<AddLuna />} />
        <Route path="/solar-add" element={<SolarAddProduct />} />
        <Route path="/affiliate-network" element={<Affiliateform />} />
        <Route path="/solar-vehicle" element={<AdminSolarList />} />
        <Route path="/solar-product-details/:id" element={<SolarProductDetails />}/>
        <Route path="/affiliaterefferalcode" element={<Affiliaterefferalcode/>}/>
        <Route path="/agency-visit-count/:id" element={<AgencyVisitCount/>}/>
        <Route path="/electric-rentalvehicles" element={<RentalVehicleList/>}/>
        <Route path="/rent-vehicle-booking/:pId/:Pname/:Pprice" element={<Rentvehiclebooking/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/solar-variant-details/:id" element={<SolarVariantDetails/>}/>
        <Route path="facebook-user" element={<FacebookLoginComponent/>}/>
        <Route path="/rental-vehicle-vendor" element={<RentalVehicleVendor/>}/>
        <Route path="/admin-rental-vehicle-list" element={<AdminRentalVehicleList/>}/>
        <Route path="/admin-rental-vehicle-booking" element={<AdminRentalVehicleBookingList/>}/>
        <Route path="/admin-rental-vehicle-vendor" element={<AdminRentalVehicleVendor/>}/>
        <Route path="/privacy-policy-page" element={<PrivacyPolicyPage/>}/>
        <Route path="/exchangevehicle" element={<Exchangevehicle/>}/>
        <Route path="/Exchange-vehicle-Dealer" element={<ExchangeDealer/>}/>
        <Route path="/approved-Exchange-vehicle-Dealer" element={<ApprovedExchangeDealer/>}/>
        <Route path="/exchangevehicledetail" element={<Exchangevehicledetail/>}/>
        <Route path="/sell-your-petrol-vehicle" element={<SellPetrolVehicle/>}/>
        <Route path="/questioner" element={<Questionner/>}/>
        <Route path="/membership" element={<Membership/>}/>
        <Route path="/marketing-leads/:id" element={<Marketing/>}/>
        <Route path="/marketing-bookings" element={<MarketingBooking/>}/>
        <Route path="/marketing-testdrive" element={<MarketingTestDrive/>}/>
        <Route path="/marketing-login" element={<MarketingLogin/>}/>
        <Route path="/marketing-dealer-list" element={<MarketingDealer/>}/>
        {/* <Route path="vendor-store-page" element={<Storepageupdated/>}/> */}
        <Route path="/dealer-store-page" element={<DealerStore/>}/>
      </Routes>
    </div>
  );
}

export default App;
