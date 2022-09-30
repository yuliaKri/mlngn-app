import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux"
import * as cart from "./redux/cart";

function InventoryItem({ item }) {
  const dispatch = useDispatch()

    return (
    <div className="inventory-item">
      <p>Product: {item.name}</p>
      <p>Price: ${item.price}</p>
      <div
        className="inventory-item-image-box"
        style={{ backgroundImage: `url(${item.image}` }}
      />
      <button
        className="btn"
        onClick={() => dispatch(cart.addToCartRedux(item))}
      >
        Add To Cart
      </button>
    </div>
  );
}

InventoryItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default InventoryItem;
