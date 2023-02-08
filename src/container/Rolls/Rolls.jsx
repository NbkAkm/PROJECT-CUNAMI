import React from "react";
import "./Rolls.scss";
import RollCard from "../../rolls.json";

function Rolls() {
  return (
    <>
      <div className="roll-wrap" id="rolls">
        <div className="roll-title-block">
          <p className="roll-name-title">Роллы</p>
        </div>
        <div className="roll-card-block">
          {RollCard.map((item) => (
            <div className="roll-card">
              <div>
                <div className="roll-star-hit">
                  <img src={item.sticker} alt="" />
                  <img src={item.stickerNew} alt="" />
                  <img src={item.stickerPer} alt="" />
                </div>
                <div className="roll-img-block">
                  <img className="roll-img" src={item.image} alt="" />
                </div>
                <div className="roll-content-block">
                  <p className="roll-title">{item.title}</p>
                  <span className="roll-quantity">{item.quantity}</span>
                  <div className="cost-and-button">
                    <span className="roll-cost">{item.cost}</span>
                    <button className="roll-button">Заказать</button>
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

export default Rolls;
