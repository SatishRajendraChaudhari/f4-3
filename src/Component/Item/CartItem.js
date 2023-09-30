import React, { useEffect, useState } from "react";
import { removeCart } from "../Redux/Action/CartAction";
import { useDispatch, useSelector } from "react-redux";
import "./CartItem.css";
function CartItem() {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("cart"));
    setItem(newData);
    console.log(item);
  }, []);

  const removeItem = (itemToRemove) => {
    // Dispatch the removeCart action with the item's id as the payload
    dispatch(removeCart(itemToRemove.id));

    // Update the local state by filtering out the removed item
    setItem((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  };
  return (
    <div>
      <h1>My Cart</h1>
      <div className="cart-Container">
        {item &&
          item.map((data) => (
            <div className="cart-Container" key={data.id}>
              <div className="cart-item">
                <div className="card">
                  <img src={data.thumbnail} className="card-img" />
                  <div className="card-title">
                    <h4>Title :{data.title}</h4>
                    <h6>Price:{data.price}</h6>
                    <button
                      className="addBtn"
                      onClick={() => {
                        removeItem(data);
                      }}
                    >
                      Remove To card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default CartItem;

//  {item &&
// item.map((data) => (
//     <div className="card">
//       <img src={data.thumbnail} className="card-img" />
//       <div className="card-title">
//         <h4>Title :{data.title}</h4>
//         <h6>Price:{data.price}</h6>
//         <button className="addBtn" onClick={()=>{removeItem(data)}}>Remove To card</button>
//       </div>
//     </div>
//   ))}

{
  /* <div className="pricelist">
<ol>
{
    item && 
   item.map((data)=>{
    <div>
         <li>{data.title} <p>{data.price}</p>
  </li>
  <button className="check">Click To CheckBox</button>
    </div>
   })
}
</ol>

</div> */
}
