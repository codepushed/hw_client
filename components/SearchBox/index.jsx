import React, { useState, useRef } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

import productConfigs from "../../config";
import { searchLinks, servicesLinks } from "../../Static";
import { useRouter } from "next/router";

const libraries = ["places"];

const SearchBox = () => {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedService, setSelectedService] = useState();
  const autoCompleteRef = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredSuggestions = searchLinks.filter((service) =>
      service.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedService(suggestion.link);
    setInputValue(suggestion.name);
    setSuggestions([]);
  };

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
    return <div style={{ display: "none" }}>Loading...</div>;
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
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Type a service"
              className="searchBoxInput"
            />
            <div>
              {suggestions?.length > 0 && (
                <ul
                  style={{
                    listStyleType: "none",
                    padding: "4px",
                    borderRadius: "16px",
                    margin: 0,
                    border: "1px solid #ccc",
                    maxWidth: "200px",
                    minWidth: "150px",
                    position: "absolute",
                    backgroundColor: "#fff",
                    zIndex: 1,
                    marginTop: "5px",
                  }}
                >
                  {suggestions?.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(item)}
                      style={{
                        padding: "8px",
                        cursor: "pointer",
                      }}
                    >
                      {item?.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <button
            className="buttonWithIcon"
            onClick={() => router.push(selectedService)}
          >
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
