import React from "react";
import "./cart.scss";

// icons
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";
import * as FiIcons from "react-icons/fi";
import { useCart } from "../../contexts/cartContext";

const Cart = () => {
  const { cart, setCart } = useCart();

  const removeFromCart = (removeid) => {
    setCart(cart.filter((cartItems) => cartItems.id !== removeid));
  };

  return (
    <div className="cart-container">
      <div className="cart-container-header">
        <div className="your-cart">
          <div>CART</div>
        </div>
        <FiIcons.FiShoppingBag />
      </div>

      {cart.length === 0 ? (
        <div className="cart-product-container card-placeholder-text">
          What's stopping you, designer?
        </div>
      ) : (
        <div className="cart-product-container">
          {cart.map((eachProduct) => {
            return (
              <div className="cart-sub-container" key={eachProduct.id}>
                <span
                  onClick={() => removeFromCart(eachProduct.id)}
                  className="dismiss-icon"
                >
                  <AiIcons.AiOutlineCloseCircle className="cross" />
                </span>
                <div>
                  <img
                    className="cart-product-img"
                    src={eachProduct.imgLink}
                    alt={eachProduct.name}
                  />
                </div>
                <div className="cart-info">
                  <p className="product-name"> {eachProduct.name} </p>
                  <p className="product-desc">KICKSUP and you</p>
                  <p className="product-price"> Rs.{eachProduct.price} </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="cart-container-footer">
        <div
          className={
            cart.length === 0
              ? "home-calender-section-light-pills"
              : "home-calender-section-dark-pills"
          }
        >
          <div className="footer-options">
            <GoIcons.GoLocation />
            <p>Home</p>
          </div>
          <div className="footer-options">
            <AiIcons.AiOutlineCalendar />
            <p>Select date</p>
          </div>
        </div>
        <div className="order-btn-section">
          <button
            className={cart.length === 0 ? "order-btn empty" : "order-btn full"}
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
