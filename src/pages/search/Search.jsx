import React from "react";
import navbarData from "../../data/navBar.json";
import listFooter from "../../data/footer.json";
import Footer from "../home/Footer/Footer";
import Navbar from "../home/Navbar/Navbar";

import "./Search.css";
import SearchPopup from "./SearchPopup/SearchPopup";
import SearchList from "./SearchList/SearchList";

const Search = () => {
  return (
    <div>
      <div className="homePage">
        {/* ---------Phần Navbar-------- */}
        <div className="navbar container">
          <Navbar data={navbarData} />
        </div>
        {/* ---------Phần chính của web search-------- */}
        <div className="searchGroup">
          <div className="container">
            <div className="searchPopup">
              <SearchPopup />
            </div>
            <div className="searchList">
              <SearchList />
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
    </div>
  );
};

export default Search;
