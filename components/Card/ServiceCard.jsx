import React, { useState } from "react";

const ServiceCard = ({ data, addToCart, removeFromCart }) => {
  const [isCounter, setIsCounter] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="serviceCardContainer">
      <div className="serviceCardImg">
        <img src={data?.image} alt="service" />
        <div className="serviceCardHeadContent">
          <h1>{data.name}</h1>
          <p className="serviceCardPara">{data.desc}</p>

          {!isCounter ? (
            <button
              className="outlineBtn"
              onClick={() => {
                addToCart(data);
                setIsCounter(true);
              }}
            >
              Add
            </button>
          ) : (
            <div className="counterBtnsCountainer">
              <button
                onClick={() => {
                  removeFromCart(data);
                  setQuantity((prev) => {
                    const newQuantity = prev - 1;
                    if (newQuantity <= 0) {
                      setIsCounter(false);
                    }
                    return newQuantity;
                  });
                }}
                className="counterBtns"
              >
                -
              </button>
              {quantity}
              <button
                onClick={() => {
                  addToCart(data);
                  setQuantity((prev) => prev + 1);
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
