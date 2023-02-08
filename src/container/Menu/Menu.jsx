import React from "react";
import "../Menu/Menu.scss";
import MenuItems from "../../menu.json";

function Menu() {
  return (
    <div id="menu">
      <div>
        <h1 className="menu-top-title">Меню</h1>
      </div>
      <div className="card-block">
        {MenuItems.map((item) => (
          <div className="card">
            <div>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className="menu-block">
                <p className="menu-title">{item.title}</p>
                <p className="menu-title-pizza">{item.pizza}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
