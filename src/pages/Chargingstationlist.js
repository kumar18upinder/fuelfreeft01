import axios from "axios";
import "./dealerpagedetail.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import React, { useState, useEffect } from "react";
import wallpaper from "../pages/images/Rectangle 77.png";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { Loader } from "@googlemaps/js-api-loader"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
// import PlacesAutocomplete from 'react-places-autocomplete';

const Chargingstationone = () => {
  const { city } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);
  let lastProductIndex = currentPage * 12;
  let firstProductIndex = lastProductIndex - 12;
  let currentChargingStation = products.slice(
    firstProductIndex,
    lastProductIndex
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //getLocation automatic
  const [cityofuser, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyA_2eybqcLSYvWm2bn4PIoi_wYCEnjYlkQ`;

          fetch(geocodeUrl)
            .then(response => response.json())
            .then(data => {
              const results = data.results;
              const city = getCityFromResults(results);
              const address = getAddressFromResults(results);
              const mapUrl = getMapUrl(latitude, longitude);

              setCity(city);
              setAddress(address);
              setMapUrl(mapUrl);
              
            })
            .catch(error => console.log(error));
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
    fetchDealersAndCalculateDistances()
  }, []);

  useEffect(() => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address + ' ' + city
    )}&key=AIzaSyA_2eybqcLSYvWm2bn4PIoi_wYCEnjYlkQ`;

    fetch(geocodeUrl)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          const newMapUrl = getMapUrl(lat, lng);
          setMapUrl(newMapUrl);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [city, address]);

  function getCityFromResults(results) {
    let city = '';

    for (let i = 0; i < results.length; i++) {
      const result = results[i];

      for (let j = 0; j < result.address_components.length; j++) {
        const addressComponent = result.address_components[j];

        if (addressComponent.types.includes('locality')) {
          city = addressComponent.long_name;
          break;
        }
      }

      if (city !== '') {
        break;
      }
    }  

    return city;
  }

  const [userlat,setuserlat]=useState('')
  const [userlon,setuserlon]=useState('')

  const iframeSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA_2eybqcLSYvWm2bn4PIoi_wYCEnjYlkQ&q=${userlat},${userlon}&zoom=17`

  function getAddressFromResults(results) {
    let address = '';

    for (let i = 0; i < results.length; i++) {
      const result = results[i];

      for (let j = 0; j < result.address_components.length; j++) {
        const addressComponent = result.address_components[j];

        if (
          addressComponent.types.includes('street_number') ||
          addressComponent.types.includes('subpremise') ||
          addressComponent.types.includes('premise') ||
          addressComponent.types.includes('establishment') ||
          addressComponent.types.includes('route') ||
          addressComponent.types.includes('sublocality_level_1') ||
          addressComponent.types.includes('sublocality_level_2') ||
          addressComponent.types.includes('locality') ||
          addressComponent.types.includes('administrative_area_level_1') ||
          addressComponent.types.includes('postal_code') ||
          addressComponent.types.includes('country')
        ) {
          address += addressComponent.long_name + ' ';
        }
      }

      if (address !== '') {
        break;
      }
    }

    return address.trim();
  }

  function getMapUrl(latitude, longitude) {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    return mapUrl;
  }

  
  function handleCityChange(event) {
    setCity(event.target.value);
    setAddress(''); // Clear the address when changing the city
  }
 

  const handleAddressChange = async (selectedAddress) => {
    setAddress(selectedAddress);
    console.log(selectedAddress,'address')
   await fetchDealersAndCalculateDistances()
     
  };



  //distance calcutaion
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371 * 1000; // Radius of the earth in meters
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const calculatedDistance = R * c; // Distance in meters

    return calculatedDistance;
  };

  const degToRad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const [Count, setcount] = useState("");
  const [dealers, setdealers] = useState("");
  
  const fetchDealersAndCalculateDistances = async () => {
    try {
      const response = await fetch(`https://app.fuelfree.in/vendor/charging/filterBycity/${city}`);
      if (!response.ok) {
        throw new Error('Failed to fetch dealers');
      }
      const data = await response.json();
      const list = data.allDealers;
      let length = list.count;
      
      setcount(length);
      
      setTotalPage(Math.ceil(list.length / 12));

      if (list.length < 2) {
        throw new Error('Insufficient dealer data');
      }

      const url2 =  mapUrl?new URL(mapUrl):new URL('https://www.google.com/maps/search/?api=1&query=22.7226274,75.8866805')
      const lat2 = parseFloat(url2.searchParams.get('query').split(',')[0]);
      const lon2 = parseFloat(url2.searchParams.get('query').split(',')[1]);
      setuserlat(lat2)
      setuserlon(lon2)
      const calculatedDealerDetails = list.map(dealer => {
        const url1 = new URL(dealer.googleMapURL);
        const lat1 = parseFloat(url1.searchParams.get('query').split(',')[0]);
        const lon1 = parseFloat(url1.searchParams.get('query').split(',')[1]);
        const distance = calculateDistance(lat1, lon1, lat2, lon2);

        return {
          name: dealer.name,
          address: dealer.address,
          aboutTheStore: dealer.aboutTheStore,
          distance: distance,
          openingTime:dealer.openingTime,
          closingTime:dealer.closingTime,
          googleMapURL:dealer.googleMapURL,
          firmName:dealer.firmName
        };
      });

      const sortedDealerDetails = calculatedDealerDetails.slice().sort((a, b) => a.distance - b.distance);

      setProducts(sortedDealerDetails);
      setdealers(sortedDealerDetails);
    } catch (error) {
      console.error('Error fetching dealers:', error);
      setProducts([]);
    }
  };
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyA_2eybqcLSYvWm2bn4PIoi_wYCEnjYlkQ', // Replace with your Google Maps API key
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      setApiLoaded(true)
    });
  }, []);

  useEffect(() => {
    if (city && address) {
      // Fetch dealers and calculate distances only when city and address are available
      fetchDealersAndCalculateDistances();
    }
  }, [city, address]);

  //search
  const [filteredList, setFilteredList] = new useState(dealers);
  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();

    const updatedList = dealers.filter((item) => {
      const firmNameMatch = item.firmName.toLowerCase().indexOf(query) !== -1;
      const addressMatch = item.address.toLowerCase().indexOf(query) !== -1;
      const nameMatch = item.name.toLowerCase().indexOf(query) !== -1;

      return firmNameMatch || addressMatch || nameMatch;
    });
    setFilteredList(updatedList);
  };

  // const [ suggestion, setsuggestion] = useState('');

  // const handleSelect = (selectedAddress) => {
  //   setsuggestion(selectedAddress);
  // };


  //handleClick
  // const [latitude1,setlatt1]=useState('')
  // const [longiitude1,setlongiitude1]=useState('')
  // const [latitude2,setlatt2]=useState('')
  // const [longiitude2,setlongiitude2]=useState('')
  
  const handleGoogleMapsClick = (googleMapUrl) => {
    
  
    const userCoordinates = googleMapUrl.match(/query=([\d.]+),([\d.]+)/);
    const destinationCoordinates = mapUrl.match(/query=([\d.]+),([\d.]+)/);
  
    if (userCoordinates && userCoordinates.length === 3 && destinationCoordinates && destinationCoordinates.length === 3) {
      const [userLat, userLon] = userCoordinates.slice(1);
      const [destLat, destLon] = destinationCoordinates.slice(1);
  
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${destLat},${destLon}&destination=${userLat},${userLon}`;
      window.open(directionsUrl, '_blank');
    }
  };
 
  return (
    <>
      <Header />
      <div id="dealerlist">
        <div className="stations-wallpaper">
          <img src={wallpaper} alt="charging station wallaper"></img>
          <div className="stations-wallpaper-overlay">
            <h3>Charging station</h3>
            <p>find best chargin station for electric vehicle in your area</p>
            <h5>charging station found in your location </h5>

            <div className="search_deler_div">
              {/* <p>Search address</p>
              <input onChange={filterBySearch} placeholder=""></input> */}
            </div>
          </div>
        </div>
        <iframe
            src={iframeSrc}
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            className="mapDealer"
          ></iframe>
        <div className="tanker">
          <div>
            <div className='to-enter-location' >
            {/* <input className='form-control' type='text' placeholder="Enter Address" value={address} onChange={handleAddressChange} ></input> */}
            {apiLoaded&&(  <PlacesAutocomplete
            value={address}
            onChange={(value)=>handleAddressChange(value)}
            onSelect={(value)=>handleAddressChange(value)}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search address",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, index) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    return (
                      <div
                        key={index}
                        {...getSuggestionItemProps(suggestion, { className })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>)}  
            {/* <input className='form-control' type='text' placeholder="Google"></input> */}
            </div>
            <div className="loc-css">
              <span className="flatNo">{Count}</span> CHARGING STATION FOUND IN
              YOUR LOCATION
            </div>
          </div>
        </div>
        {filteredList ? (
          <div className="tanker" id="charging-station-all">
            <>
              {filteredList &&
                filteredList.map((data) => (
                  <div class="Carcard-charge" key={data._id}>
                    <div class="Cartitle-charge">
                      <h5>{data.name}</h5>
                      <h5>Distance:{data.distance < 1 ? `${data.distance.toFixed(2)} meters` : `${(data.distance / 1000).toFixed(2)} kilometers`}</h5>
                      <p>
                        Opening/Closing(Time): {data.openingTime}/
                        {data.closingTime}
                      </p>
                      <Link
                        target="_blank"
                        // to={`${data.googleMapURL}`}
                        className="google-find"
                        onClick={()=>handleGoogleMapsClick(data.googleMapURL)}
                      >
                        Location
                      </Link>
                    </div>
                  </div>
                ))}
            </>
          </div>
        ) : (
          <>
            <div className="tanker">
              <div className="OUR-CARS-outer">
                {currentChargingStation &&
                  currentChargingStation.map((data) => (
                    <div class="Carcard-charge" key={data._id}>
                      <div class="Cartitle-charge">
                        <div>
                          <h5>{data.name}</h5>
                          <h5>Distance:{data.distance < 1 ? `${data.distance.toFixed(2)} meters` : `${(data.distance / 1000).toFixed(2)} kilometers`}</h5>
                          <p>
                            Opening/Closing(Time): {data.openingTime}/
                            {data.closingTime}
                          </p>
                          <p className="charging-address">
                            Address: {data.address}
                          </p>
                        </div>
                        <div className="google-div">
                          <Link
                            target="_blank"
                            // to={`${data.googleMapURL}`}
                            className="google-find"
                            onClick={()=>handleGoogleMapsClick(data.googleMapURL)}
                          >
                            Location
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}
        <div className="pagination-products-all">
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chargingstationone;
