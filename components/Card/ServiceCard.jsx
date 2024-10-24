import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCartItems } from "../../store/slices/cart";

const ServiceCard = ({ data }) => {
  const [isCounter, setIsCounter] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state); // Access cart items from Redux store
  const [quantity, setQuantity] = useState(1);


  const handleAddToCart = (updatedCart) => {
    // const existingItem = cartItems.find(item => item.id === data.id);

    // if (existingItem) {
    //   // If the item exists, update the quantity
    //   const updatedCart = cartItems.map(item => 
    //     item.id === data.id ? { ...item, quantity: item.quantity + quantity } : item
    //   );
      dispatch(saveCartItems(updatedCart));
    // } else {
    //   // If it doesn't exist, add it to the cart
    //   const newItem = { ...data, quantity }; // Add quantity to the new item
    //   dispatch(saveCartItems([...cartItems, newItem]));
    // }

    // setQuantity(1); // Reset quantity after adding to cart
  };

  // console.log(cartItems)
  // 
  return (
    <div className="serviceCardContainer">
      <div className="serviceCardImg">
        <div className="serviceCardHeadContent">
          <h1>{data.name}</h1>
          <p className="serviceCardPara">{data.desc}</p>

          {!isCounter ? (
            <button
              className="outlineBtn"
              onClick={() => {
                handleAddToCart(data);
                setIsCounter(true);
              }}
            >
              Add
            </button>
          ) : (
            <div className="counterBtnsCountainer">
              <button
                // onClick={() => {
                //   decreaseQuantity(data._id);
                //   if (quantity === 1) {
                //     setIsCounter(false);
                //   }
                // }}
                className="counterBtns"
              >
                -
              </button>
              {/* {quantity} */}
              <button
                onClick={() => {
                  handleAddToCart(data);
                }}
                className="counterBtns"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
