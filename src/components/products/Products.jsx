import React from "react";
import "./products.scss";
import * as AiIcons from "react-icons/ai";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/filterContext";
import { priceRangeFilter, sortByCategory } from "../../utils/filter-utils";

const Products = () => {
  let navigate = useNavigate();

  const { state } = useFilter();

  const { loafers, sneakers } = state.categories;
  const { isBetween1500to4000, isBetween4001to7000, isAbove7001 } =
    state.priceRange;

  const priceRange = priceRangeFilter(
    products,
    isBetween1500to4000,
    isBetween4001to7000,
    isAbove7001
  );
  const sortByCategoryFinalList = sortByCategory(priceRange, loafers, sneakers);

  return (
    <div className="products-container">
      <div className="products-container-header">
        <div className="container-title">SHOES</div>
        <div className="header-btns">
          <AiIcons.AiOutlineSearch />
          <button className="sortby-btn">sort by</button>
        </div>
      </div>
      <div className="product-cards-container">
        {sortByCategoryFinalList.length === 0 ? (
          <>
            <div>
              No products matching in our database with your applied filter
            </div>
          </>
        ) : (
          <>
            {sortByCategoryFinalList.map((eachProduct) => {
              return (
                <div className="each-product-card" key={eachProduct.id}>
                  <img
                    onClick={() => navigate(`/product-details/${eachProduct.id}`)}
                    className="product-img"
                    src={eachProduct.imgLink}
                    alt={eachProduct.name}
                  />
                  <div className="product-details">
                    <div className="product-card-title">{eachProduct.name}</div>
                    <div className="card-details">
                      <div>Rs.{eachProduct.price}</div>
                      {eachProduct.rating === 4 ? (
                        <>
                          <div className="rating-section">
                            <AiIcons.AiTwotoneStar className="filled-star" />
                            <AiIcons.AiTwotoneStar className="filled-star" />
                            <AiIcons.AiTwotoneStar className="filled-star" />
                            <AiIcons.AiTwotoneStar className="filled-star" />
                            <AiIcons.AiOutlineStar />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="rating-section">
                            <AiIcons.AiTwotoneStar className="filled-star" />
                            <AiIcons.AiTwotoneStar className="filled-star" />
                            <AiIcons.AiTwotoneStar className="filled-star" />
                            <AiIcons.AiOutlineStar />
                            <AiIcons.AiOutlineStar />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
