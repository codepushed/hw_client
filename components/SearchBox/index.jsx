import React from "react";

const SearchBox = () => {
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
        <input type="text" placeholder="Gwalior, MP" className="searchBoxInput" />
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
          <input type="text" placeholder="Plumbering" className="searchBoxInput" />
          <button className="buttonWithIcon">
            <img
              src="/assets/icons/search.png"
              alt="search"
              className="buttonIcon"
            />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
