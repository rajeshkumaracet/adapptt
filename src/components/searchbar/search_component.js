import React from "react";
import "./search_styles.css";
import FilterIcon from "../../assets/img/filter.png";
import SearchIcon from "../../assets/img/search.png";

const Search = ({ handleChange, val }) => (
  <div className="search">
    <div className="search__bar">
      <div className="search__container">
        <img className="searchIcon" src={SearchIcon} alt="searchIcon" />
        <input
          type="text"
          placeholder="Search"
          className="input__box"
          name="search"
          onChange={handleChange}
          value={val}
        />
      </div>
      <img className="filterIcon" src={FilterIcon} alt="filterIcon" />
    </div>
  </div>
);

export default Search;
