import '../Styles/CartComponent.css'
import React from "react";

const CartComponent = () => {
  return (
    <div className="cart-card">
      <h2 className="cart-heading">Cart</h2>
      <p className="cart-detail">Room :</p>
      <p className="cart-detail">Activities:</p>
      <p className="cart-detail">Services:</p>
      <div className="cart-footer">
        <p className="cart-total">Total Points:</p>
        <p className="cart-points">000</p>
      </div>
    </div>
  );
};

export default CartComponent;