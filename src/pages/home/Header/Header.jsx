import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import { SiXstate } from "react-icons/si";

const Header = () => {
  // -----Tạo state chứa các biến cần thay đổi-------
  const [isOpen, setIsOpen] = useState(false);
  const [rangeDate, setRangeDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  // -----Tạo các hàm thành phần-----
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const getDay = (dayInput) => {
    const year = dayInput.getFullYear();
    const month = (dayInput.getMonth() + 1).toString().padStart(2, "0");
    const day = dayInput.getDate().toString().padStart(2, "0");
    return `${day}/${month}/${year}`;
  };
  const searchHandle = () => {
    window.location.replace("/search");
  };
  return (
    <>
      <h1 className="mb-2">A lifetime of discounts? It's Genius</h1>
      <p className="mb-2">
        Get rewarded for your travels - unlock instant savings of 10% or more a
        free account
      </p>
      <button className="btn mb-2" type="button">
        Sign in / Register
      </button>
      {/* -------Phần form nhập liệu------- */}
      <div className="groupInput">
        <div className="groupInputPlace">
          <FontAwesomeIcon icon="fa-bed" />
          <label>
            <input
              type="text"
              name="input-place"
              id="input-place"
              placeholder="Where are you going?"
            />
          </label>
        </div>
        <div className="groupInputDate" onClick={toggleModal}>
          <FontAwesomeIcon icon="fa-calendar" />
          <p>
            {getDay(rangeDate[0].startDate)} to {getDay(rangeDate[0].endDate)}
          </p>
        </div>
        <div className="groupInputMoreInfo">
          <FontAwesomeIcon icon="fa-female" />
          <label>
            <input
              type="number"
              name="adultNum"
              id="adultNum"
              min="1"
              step="1"
              placeholder="1"
            />
          </label>
          <p>adult -</p>
          <label>
            <input
              type="number"
              name="childrenNum"
              id="childrenNum"
              min="0"
              step="1"
              placeholder="0"
            />
          </label>
          <p>children -</p>
          <label>
            <input
              type="number"
              name="roomNum"
              id="roomNum"
              min="1"
              step="1"
              placeholder="1"
            />
          </label>
          <p>room</p>
        </div>
        <button className="btn" type="button" onClick={searchHandle}>
          Search
        </button>
      </div>
      {/* -------Phần Modal lấy ngày tháng------- */}
      {isOpen && (
        <div className="modal">
          <div className="modal-header">
            <button onClick={toggleModal}>
              <SiXstate />
            </button>
          </div>
          <div className="modal-content">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setRangeDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={rangeDate}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
