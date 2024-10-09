import React, { useState, useRef } from "react";
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';

import productConfigs from "../../config";

const libraries = ['places'];


const SearchBox = () => {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const autoCompleteRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: productConfigs.GOOGLE_MAPS_API,
    libraries,
  });

  const onPlaceSelected = (place) => {
    if (place) {
      setLocation(place.formatted_address);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="searchBoxContainer">
      <div className="searchBoxContent">
        <div className="searchBoxHeader">
          <img
            src="/assets/icons/location.png"
            alt="location"
            className="searchBoxIcons"
          />
          <p>Enter location</p>
        </div>

        <Autocomplete
          onLoad={(autocomplete) => (autoCompleteRef.current = autocomplete)}
          onPlaceChanged={() => {
            const place = autoCompleteRef.current.getPlace();
            onPlaceSelected(place);
          }}
        >
          <input
            type="text"
            placeholder="Gwalior, MP"
            className="searchBoxInput"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Autocomplete>
      </div>
      <div className="searchBoxContent">
        <div className="searchBoxHeader">
          <img
            src="/assets/icons/services.png"
            alt="service"
            className="searchBoxIcons"
          />
          <p>Find a service</p>
        </div>
        <div className="searchboxSearchBtn">
          <input
            type="text"
            placeholder="Plumbering"
            className="searchBoxInput"
          />
          <button className="buttonWithIcon">
            <img
              src="/assets/icons/search.png"
              alt="search"
              className="buttonIcon"
            />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
