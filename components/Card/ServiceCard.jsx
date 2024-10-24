import React, { useState, useEffect } from "react";

const ServiceCard = ({ data }) => {
  const [isCounter, setIsCounter] = useState(false);
  const { cartItems, addToCart, decreaseQuantity } = useContext(CartContext);
  const [selectedServices, setSelectedServices] = useState([]);
  const [cart, setCart] = useState([]);

  
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
                addObject(data);
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
                  addObject(data);
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
