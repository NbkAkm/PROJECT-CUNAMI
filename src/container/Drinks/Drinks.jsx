import React from "react";
import "./Drinks.scss";
import DrinkCard from "../../drinks.json";

function Drinks() {
  return (
    <>
      <div className="drink-wrap">
        <div className="drink-title-block">
          <p className="drink-name-title">Напитки</p>
        </div>
        <div className="drink-card-block">
          {DrinkCard.map((item) => (
            <div className="drink-card">
              <div>
                <div className="drink-star-hit">
                  <img src={item.sticker} alt="" />
                  <img src={item.stickerNew} alt="" />
                </div>
                <div className="drink-img-block">
                  <img className="drink-img" src={item.image} alt="" />
                </div>
                <div className="drink-content-block">
                  <p className="drink-title">{item.title}</p>
                  <span className="drink-quantity">{item.quantity}</span>
                  <div className="cost-and-button">
                    <span className="drink-cost">{item.cost}</span>
                    <button className="drink-button">Заказать</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Drinks;
