import React from "react";
import "./SearchPopup.css";

const SearchPopup = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} id="myForm">
      <h1>Search</h1>
      <label htmlFor="destination">Destination</label>
      <input type="text" id="destination" />
      <label htmlFor="checkinDate">Check-in Date</label>
      <input type="text" id="checkinDate" />
      <label htmlFor="minPrice">Options</label>
      <div className="option">
        <div className="optionItem">
          <p>Min price per night</p>
          <input type="number" id="minPrice" />
        </div>
        <div className="optionItem">
          <p>Max price per night</p>
          <input type="number" id="" />
        </div>
        <div className="optionItem">
          <p>Adult</p>
          <input type="number" id="" />
        </div>
        <div className="optionItem">
          <p>Children</p>
          <input type="number" id="" />
        </div>
        <div className="optionItem">
          <p>Room</p>
          <input type="number" id="" />
        </div>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchPopup;
