import React from "react";
import "./Combo.scss";
import ComboCard from "../../combo.json";

function Combo() {
  return (
    <>
      <div className="combos-wrap">
        <div className="combos-title-block">
          <p className="combos-name-title">Комбо</p>
        </div>
        <div className="combos-card-block">
          {ComboCard.map((item) => (
            <div className="combos-card">
              <div>
                <div className="combos-star-hit">
                  <img src={item.sticker} alt="" />
                  <img src={item.stickerNew} alt="" />
                  <img src={item.stickerPer} alt="" />
                </div>
                <div className="combos-img-block">
                  <img className="combos-img" src={item.image} alt="" />
                </div>
                <div className="combos-content-block">
                  <p className="combos-title">{item.title}</p>
                  <span className="combos-quantity">{item.quantity}</span>
                  <div className="cost-and-button">
                    <span className="combos-cost">{item.cost}</span>
                    <button className="combos-button">Заказать</button>
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

export default Combo;
