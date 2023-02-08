import React from "react";
import "./Pizza.scss";
import PizzaCard from "../../pizza.json";

function Pizza() {
  return (
    <>
      <div className="pizzas-wrap">
        <div className="pizzas-title-block">
          <p className="pizzas-name-title">Пицца</p>
        </div>
        <div className="pizzas-card-block">
          {PizzaCard.map((item) => (
            <div className="pizzas-card">
              <div>
                <div className="pizzas-star-hit">
                  <img src={item.sticker} alt="" />
                  <img src={item.stickerNew} alt="" />
                </div>
                <div className="pizzas-img-block">
                  <img className="pizzas-img" src={item.image} alt="" />
                </div>
                <div className="pizzas-content-block">
                  <p className="pizzas-title">{item.title}</p>
                  <span className="pizzas-quantity">{item.quantity}</span>
                  <div className="cost-and-button">
                    <span className="pizzas-cost">{item.cost}</span>
                    <button className="pizzas-button">Заказать</button>
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

export default Pizza;
