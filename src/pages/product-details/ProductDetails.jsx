import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./product-details.scss";

// components
import Navbar from "../../components/navbar/Navbar";
import Cart from "../../components/cart/Cart";
import { useCart } from "../../contexts/cartContext";

import { products } from "../../data/products";
// icons
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { cart, setCart } = useCart();
  const eachProduct = products.find((product) => product.id === productId);
  const addToCartHandler = () => {
    setCart([...cart, eachProduct]);
  };
  const removeFromCartHandler = (removeid) => {
    setCart(cart.filter((cartItems) => cartItems.id !== removeid));
  };

  const isInsideCart =
    cart.filter((product) => product.id === productId).length !== 0;

  return (
    <>
      <Navbar />
      <div className="store-container">
        <div className="single-product">
          <div className="head">
            <BiIcons.BiArrowBack
              className="back-icon"
              onClick={() => navigate(-1)}
            />
            <span className="prod-heading">Your design space</span>
            <div className="designSpace">
              <div className="designContainer">
                <div className="top">
                  <div className="left">
                    <img src={eachProduct.imgLink} alt={eachProduct.name} />
                  </div>
                  <div className="center">
                    <img src={eachProduct.imgLink} alt={eachProduct.name} />
                    <img src={eachProduct.imgLink} alt={eachProduct.name} />
                    <img src={eachProduct.imgLink} alt={eachProduct.name} />
                  </div>
                  <div className="right">
                    <div className="product-info">
                      <div className="name">
                        <div className="product-name">{eachProduct.name}</div>
                        <div className="brand-name">by KICKSUP and you</div>
                      </div>
                      <div className="ratings">
                        <div className="stars">
                          {<AiIcons.AiTwotoneStar className="filled-star" />}
                        </div>
                        <div className="reviews">69 reviews</div>
                      </div>
                      <div className="price">
                        <div className="current-price">{`Rs. ${eachProduct.price}`}</div>
                        <div className="offers">
                          Get an exclusive 20% off on shopping with HDFC Bank{" "}
                        </div>
                      </div>
                    </div>
                    <div className="design-widget">
                      <div className="widget">
                        <div className="widget-type">Front</div>
                        <div className="selectors">
                          <li className="design-selector"></li>
                          <li className="design-selector"></li>
                          <li className="design-selector"></li>
                        </div>
                      </div>
                      <div className="widget">
                        <div className="widget-type">Middle</div>
                        <div className="selectors">
                          <li className="design-selector"></li>
                          <li className="design-selector"></li>
                          <li className="design-selector"></li>
                        </div>
                      </div>
                      <div className="widget">
                        <div className="widget-type">Back</div>
                        <div className="selectors">
                          <li className="design-selector"></li>
                          <li className="design-selector"></li>
                          <li className="design-selector"></li>
                        </div>
                      </div>
                      <div className="widget">
                        <div className="widget-type">Sole</div>
                        <div className="selectors">
                          <li className="design-selector"></li>
                          <li className="design-selector"></li>
                          <li className="design-selector"></li>
                        </div>
                      </div>
                      <div className="widget">
                        <div className="widget-type">Size</div>
                        <div className="selectors size">
                          <li>7</li>
                          <li>8</li>
                          <li>9</li>
                          <li>10</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="middle">
                  <p>Rating: </p>
                  <div className="rate-product">
                    <AiIcons.AiTwotoneStar />
                    <AiIcons.AiTwotoneStar />
                    <AiIcons.AiTwotoneStar />
                    <AiIcons.AiTwotoneStar />
                    <AiIcons.AiTwotoneStar />
                  </div>
                </div>
                <div className="bottom">
                  <div className="buttonLink">
                    <div className="button1">
                      <button className="share-btn">Share design</button>
                    </div>
                    <div className="button2">
                      {!isInsideCart ? (
                        <>
                          <button
                            onClick={addToCartHandler}
                            className="add-to-cart-btn"
                          >
                            Add to cart
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              removeFromCartHandler(eachProduct.id)
                            }
                            className="add-to-cart-btn"
                          >
                            Remove from cart
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cart />
      </div>
    </>
  );
};

export default ProductDetails;
