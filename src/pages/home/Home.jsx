import navbarData from "../../data/navBar.json";
import cityData from "../../data/city.json";
import typeHotel from "../../data/type.json";
import listHotel from "../../data/hotel_list.json";
import listFooter from "../../data/footer.json";

import "./Home.css";
import Header from "./Header/Header";
import PlaceCard from "./GroupCard/PlaceCard/PlaceCard";
import HotelCard from "./GroupCard/HotelCard/HotelCard";
import ListHotelCard from "./GroupCard/ListHotel/ListHotelCard";
import FormRegister from "./FormRegister/FormRegister";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div className="homePage">
      {/* ---------Phần Navbar-------- */}
      <div className="navbar container">
        <Navbar data={navbarData} />
      </div>
      {/* ---------Phần Header-------- */}
      <div className="header container">
        <Header />
      </div>
      {/* ---------Phần danh sách trên trang Homepage--------- */}
      <div className="groupCards">
        {/* ---Danh sách các thành phố--- */}
        <div className="placeCards container">
          {cityData.map((item) => (
            <PlaceCard key={Math.random().toFixed(2)} item={item} />
          ))}
        </div>
        <h2 className="container">Browse by property type</h2>
        {/* ---Danh sách các loại khách sạn---- */}
        <div className="typeHotel container">
          {typeHotel.map((item) => (
            <HotelCard key={Math.random().toFixed(2)} item={item} />
          ))}
        </div>
        <h2 className="container">Homes guests love </h2>
        {/* ----Danh sách các khách sạn------ */}
        <div className="listHotel container">
          {listHotel.map((item) => (
            <ListHotelCard key={Math.random().toFixed(2)} item={item} />
          ))}
        </div>
      </div>
      {/* ---------Phần form đăng ký--------- */}
      <div className="groupRegister">
        <FormRegister />
      </div>
      {/* ---------Phần Footer cho Homepage----------- */}
      <div className="footer">
        <div className="container">
          <Footer data={listFooter} />
        </div>
      </div>
    </div>
  );
};

export default Home;
