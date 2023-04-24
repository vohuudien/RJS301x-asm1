import React from "react";
import navbarData from "../../data/navBar.json";
import listFooter from "../../data/footer.json";
import Footer from "../home/Footer/Footer";
import Navbar from "../home/Navbar/Navbar";

import detailData from "../../data/detail.json";
import { SiGooglemaps } from "react-icons/si";
import "./Detail.css";

const Detail = () => {
  console.log(detailData);
  return (
    <div className="homePage">
      {/* ---------Phần Navbar-------- */}
      <div className="navbar container">
        <Navbar data={navbarData} />
      </div>
      
      {/* ---------Phần chính của web detail-------- */}
      <div className="detailPage">
        <div className="container">
          {/* -----Phần Thông tin chính của hotel như tên, khoảng cách đến trung tâm,..------ */}
          <div className="detailTop">
            <h1>{detailData.name}</h1>
            <span>
              <SiGooglemaps /> {detailData.address}
            </span>
            <p>{detailData.distance}</p>
            <h5>{detailData.price}</h5>
            <button type="button">Reverse or Book Now!</button>
          </div>
          
          {/* -----Phần nhóm các hình ảnh------ */}
          <div className="detailMid">
            {detailData.photos.map((item) => (
              <div className="itemImage">
                <img src={item} alt="" />
              </div>
            ))}
          </div>
          
          {/* ----Phần thông tin thêm----- */}
          <div className="detailBottom">
            {/* ----Phần mô tả---- */}
            <div className="detailDescription">
              <h1>{detailData.title}</h1>
              <p>{detailData.description}</p>
            </div>
            {/* ----Phần hot-deal---- */}
            <div className="detailDeal">
              <h1>Perfect for a 9-night stay!</h1>
              <p>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8
              </p>
              <h2>
                ${detailData.nine_night_price} <span>(9 nights)</span>
              </h2>
              <button type="button">Reverse or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------Phần Footer--------- */}
      <div className="footer">
        <div className="container">
          <Footer data={listFooter} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
