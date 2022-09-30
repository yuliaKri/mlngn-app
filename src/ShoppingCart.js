import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

function ShoppingCart() {
  const cartList = useSelector((state) => state.list)

  return (
    <div className="shopping-cart">
      <p>Shopping cart</p>
      {cartList?.length ? (
        cartList?.map((el) => <p key={Math.random()}>{el.name}</p>)
      ) : (
        <p>no items</p>
      )}
    </div>
  )
}

export default ShoppingCart;
