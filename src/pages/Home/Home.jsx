import React from "react";
import "./Home.scss";

import Menu from "../../container/Menu/Menu";
import Main from "../../container/Main/Main.jsx";
import Sets from "../../container/Sets/Sets";
import AboutUs from "../../container/AboutUs/AboutUs";
import Footer from "../../container/Footer/Footer";
import Sushi from "../../container/Sushi/Sushi.jsx";
import Rolls from "../../container/Rolls/Rolls.jsx";
import Combo from "../../container/Combo/Combo";
import Pizza from "../../container/Pizza/Pizza";
import Drinks from "../../container/Drinks/Drinks";
import AboutDelivery from "../../container/AboutDelivery/AboutDelivery";

function Home() {
  return (
    <div className="home">
      <Main />
      <Menu />
      <Sets />
      <Sushi />
      <Rolls />
      <Combo />
      <Pizza />
      <Drinks />
      <AboutUs />
      <AboutDelivery />
      <Footer />
    </div>
  );
}

export default Home;
