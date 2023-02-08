import React from "react";
import "./Sushi.scss";
import SushiCard from "../../sushi.json";

function Sushi() {
  return (
    <>
      <div className="sushi-wrap" id="sushi">
        <div className="sushi-title-block">
          <p className="sushi-title-name">Суши</p>
        </div>
        <div className="sushi-card-block">
          {SushiCard.map((item) => (
            <div className="sushi-card">
              <div>
                <div className="sushi-star-hit">
                  <img src={item.sticker} alt="" />
                  <img src={item.stickerNew} alt="" />
                </div>
                <div className="sushi-img-block">
                  <img className="sushi-img" src={item.image} alt="" />
                </div>
                <div className="sushi-content-block">
                  <p className="sushi-title">{item.title}</p>
                  <span className="sushi-quantity">{item.quantity}</span>
                  <div className="cost-and-button">
                    <span className="sushi-cost">{item.cost}</span>
                    <button className="sushi-button">Заказать</button>
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

export default Sushi;
