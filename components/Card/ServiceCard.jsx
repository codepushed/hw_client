import React, { useState } from "react";

const ServiceCard = ({ data, addToCart }) => {
  const [isCounter, setIsCounter] = useState(false);

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
                addToCart(data);
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
                  addToCart(data);
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
