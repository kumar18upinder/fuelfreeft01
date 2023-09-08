import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import customMarkerImage from './images/location.jpeg';
import { useParams,useNavigate } from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from "react-places-autocomplete";
  import { Loader } from "@googlemaps/js-api-loader"
const containerStyle = {
  width: "100%",
  height: "400px",
};

const customMarkerIcon = {
  url: customMarkerImage,
  scaledSize: { width: 40, height: 40 },
};

const googleMapsApiKey = 'AIzaSyBiBgcWp0mqLa22HFZkzyRX1xJ4FT0e1N4';

const MyLocation = () => {
const navigate=useNavigate()
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [mapUrl, setMapUrl] = useState('');
      const [apiLoaded, setApiLoaded] = useState(false);

      

  const { url } = useParams();

  const [mapCenter, setMapCenter] = useState({
    lat: 0,
    lng: 0,
  });

  const extractCoordinatesFromUrl = (url) => {
    const match = url.match(/query=([-?\d+\.\d+]+),([-?\d+\.\d]+)/);
    if (match) {
      const [, latitude, longitude] = match;
     
      return [parseFloat(latitude), parseFloat(longitude)];
    }
    return [null, null];
  };

  const [latitude, longitude] = extractCoordinatesFromUrl(url);

  useEffect(() => {
    setMapCenter({
      lat: latitude,
      lng: longitude,
    });
  }, [latitude, longitude]);

  const handleUrlChange = (event) => {
    setAddress(event);
  };

  const handleUpdateMapCenter = () => {
    const [newLatitude, newLongitude] = extractCoordinatesFromUrl(mapUrl);
    
    if (!isNaN(newLatitude) && !isNaN(newLongitude)) {
      setMapCenter({
        lat: newLatitude,
        lng: newLongitude,
      });
    }
  };

  //auto user location



  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsApiKey}`;

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
  }, []);

  useEffect(() => {
    const loader = new Loader({
      apiKey: googleMapsApiKey, // Replace with your Google Maps API key
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      setApiLoaded(true)
    });
  }, []);

  useEffect(() => {
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address + ' ' + city
        )}&key=${googleMapsApiKey}`;
       
        
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

  function handleAddressChange(event) {
    setAddress(event);
  }

  const handleAddressSelect = async (selectedAddress) => {
    setAddress(selectedAddress);
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      // Update the lat and lng states with latLng.lat and latLng.lng
      // ... (your existing code for updating lat and lng)
    } catch (error) {
      console.error("Error selecting address:", error);
    }
  };

  const [mapLoading, setMapLoading] = useState(true);

  // ...
   

  const handleMapLoad = () => {
    setMapLoading(false);
  };

  const gotodelaer=()=>{
      localStorage.setItem('address',address)
        window.history.back();
    
  }

  return (
    <>
      <Header />
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
         
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={18}
            onLoad={handleMapLoad} // Call this function when the map has loaded
          >
            <Marker position={mapCenter} icon={customMarkerIcon} />
          </GoogleMap>
         
      </LoadScript>
      
      <div>
        {/* <input
          type="text"
          name="mapUrl"
          placeholder="Enter Google Maps URL"
          value={address}
          onChange={handleUrlChange}
        /> */}
        <div>
     {apiLoaded&&(<PlacesAutocomplete
            value={address}
            onChange={(e)=>handleAddressChange(e)}
            onSelect={handleAddressSelect}
            className="form-control"
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
          </PlacesAutocomplete>)}       </div>
        <button onClick={handleUpdateMapCenter}>Update Map Location</button>
        <button  onClick={gotodelaer} >confirm Location</button>
      </div>
      <Footer />
    </>
  );
};

export default MyLocation;
