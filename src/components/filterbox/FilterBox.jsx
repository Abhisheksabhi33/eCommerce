import React, { useState } from "react";
import { useFilter } from "../../contexts/filterContext";
import * as filterIcon from "react-icons/fi";
import "./filterbox.scss";

const FilterBox = () => {
  const { dispatch } = useFilter();
  const [category, setCategory] = useState({
    loafers: false,
    sneakers: false,
  });
  const [price, setPrice] = useState({
    isBetween1500to4000: false,
    isBetween4001to7000: false,
    isAbove7001: false,
  });
  const updateCategory = (e) =>
    setCategory((obj) => ({
      ...obj,
      [e.target.name]: e.target.checked,
    }));
  const updatePrice = (e) => {
    setPrice((obj) => ({
      ...obj,
      [e.target.name]: e.target.checked,
    }));
  };

  const applyFilter = () => {
    dispatch({
      type: "APPLY_FILTER",
      payload: {
        priceRange: price,
        categories: category,
      },
    });
  };
  return (
    <div className="filters-container">
      <div className="filter-clearfilter-btns">
        <div>FILTERS</div>
        <filterIcon.FiFilter />
      </div>
      <div className="section">
        <ul className="cost-filter">
          <li>Cost</li>
          <li className="checkbox-title">
            <input
              onChange={updatePrice}
              type="checkbox"
              name="isBetween1500to4000"
              value="4000"
            />
            <label>Rs. 1500-4000</label>
          </li>
          <li className="checkbox-title">
            <input
              onChange={updatePrice}
              type="checkbox"
              value="7000"
              name="isBetween4001to7000"
            />
            <label>Rs. 4001-7000</label>
          </li>
          <li className="checkbox-title">
            <input
              onChange={updatePrice}
              type="checkbox"
              name="isAbove7001"
              value="8001"
            />
            <label>Rs. 7001+</label>
          </li>
        </ul>
      </div>
      <div className="section">
        <p>Color</p>
        <div className="color-filter">
          <div className="color-box red"></div>
          <div className="color-box blue"></div>
          <div className="color-box yellow"></div>
          <div className="color-box green"></div>
          <div className="color-box lime-yellow"></div>
        </div>
      </div>
      <div className="section">
        <p>Design Templates</p>
        <ul className="design-template-filter">
          <li className="checkbox-title">
            {" "}
            <input type="checkbox" name="checkbox" value="4000" />
            <label className="checkbox-title">2</label>
          </li>
          <li className="checkbox-title">
            <input type="checkbox" name="checkbox" value="7000" />
            <label className="checkbox-title">3</label>
          </li>
          <li className="checkbox-title">
            <input type="checkbox" name="checkbox" value="8000" />
            <label className="checkbox-title">3+</label>
          </li>
        </ul>
      </div>
      <div className="section">
        <p>Type</p>
        <ul className="product-type-filter">
          <li className="checkbox-title">
            <input onChange={updateCategory} type="checkbox" name="loafers" />
            <label className="checkbox-title">Loafers</label>
          </li>
          <li className="checkbox-title">
            <input onChange={updateCategory} type="checkbox" name="sneakers" />
            <label className="checkbox-title">Sneakers</label>
          </li>
        </ul>
      </div>
      <button className="filter-btn" onClick={applyFilter}>
        Apply
      </button>
    </div>
  );
};

export default FilterBox;
