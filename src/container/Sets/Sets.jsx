import React from "react";
import "./Sets.scss";
import SetsCard from "../../sets.json";

function Sets() {
  return (
    <div id="sets">
      <div className="set">
        <h1>Сеты</h1>
        <div className="set-card-block">
          {SetsCard.map((item) => (
            <div className="set-card">
              <div>
                <div className="set-star-hit">
                  <img src={item.sticker} alt="" />
                  <img src={item.stickerNew} alt="" />
                  <img src={item.stickerPer} alt="" />
                </div>
                <div className="set-img-block">
                  <img className="set-img" src={item.image} alt="" />
                </div>
                <div className="set-content-block">
                  <p className="set-title">{item.title}</p>
                  <span className="set-quantity">{item.quantity}</span>
                  <span className="set-quantity1">{item.quantity1}</span>
                  <span className="set-quantity1">{item.quantity2}</span>
                  <span className="set-quantity1">{item.quantity3}</span>
                  <div className="cost-and-button">
                    <span className="set-cost">{item.cost}</span>
                    <button className="set-button">Заказать</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sets;
