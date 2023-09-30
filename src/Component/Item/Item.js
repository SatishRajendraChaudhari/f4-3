import React, { useEffect, useState } from "react";
import "./item.css";
import axios from "axios";
import { addToCart, addToLocalStorage } from "../Redux/Action/CartAction";
import { useDispatch, useSelector } from "react-redux";
function Item() {
  const [item, setItem] = useState([]);
  const dispactch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setItem(res.data.products);
        console.log(res.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    dispactch(addToLocalStorage());

    console.log("item->", item);
  }, [dispactch]);

  const handleAddToCart = (item) => {
    dispactch(addToCart(item));
  };
  return (
    <div className="container">
      <h1>All item</h1>
      <div className="card-container">
        {item &&
          item.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.thumbnail} className="card-img" />
              <div className="card-title">
                <h4>Title :{item.title}</h4>
                <h6>Price:{item.price}</h6>
                <button className="addBtn" onClick={() => handleAddToCart(item)}>
                  Add To card
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Item;
