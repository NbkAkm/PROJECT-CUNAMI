import React from "react";
import "../AboutDelivery/AboutDelivery.scss";

function AboutDelivery() {
  return (
    <>
      <div className="delivery-block">
        <h2 className="delivery-block-title">Доставка и оплата</h2>
        <p className="delivery-block-text">
          Доставка бесплатно в районе 5 км от CUNAMI SUSHI.
        </p>
        <p className="delivery-block-text">
          Что бы узнать точную стоимость свяжитесь с оператором.
        </p>
        <p className="delivery-block-text">
          На акционные блюда бесплатная доставка не предоставляется.{" "}
        </p>
        <h3 className="delivery-block-subtitle">Время доставки!</h3>
        <p className="delivery-block-text">
          Мы принимаем заказы по следующему графику:{" "}
          <span>Пн. - Вс. с 11:00 до 1:00</span>
        </p>
        <h3 className="delivery-block-subtitle">Быстрая доставка!</h3>
        <p className="delivery-block-text">
          Заказывайте и операторы уточнят время доставки для Вас.
        </p>
        <h3 className="delivery-block-subtitle">Оплата</h3>
        <p className="delivery-block-text">
          Оплата осуществляется наличными курьеру в момент доставки Вашего
          заказа или на электронный кошелек.
        </p>
        <p className="delivery-block-text">
          Если Вам потребуется сдача, скажите об этом оператору при оформлении
          заказа, либо введите эти данные при заказе online.
        </p>
      </div>
    </>
  );
}

export default AboutDelivery;
