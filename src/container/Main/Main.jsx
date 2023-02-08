import React from 'react'
import './Main.scss'
import '@fontsource/roboto'
import '@fontsource/comfortaa'
import TopHeader from '../../components/TopHeader/TopHeader'
import Header from '../../components/Header/Header'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import MainSpeedDial from '../../components/MainSpeedDial/MainSpeedDial'

function Main() {
  return (
    <div className='main'>
        <TopHeader/>
        <Header/>

        <div className="main-content">
          <div className="main-content-text">
            <h1>
              Успей заказать 
              <span className='red'> по АКЦИИ </span> 
              <span className='bold'>до 30 июля 
              <br /> 
              любой комбо 
              <br /> 
              </span> всего за 
              <br />
              <span className='bold'>1000 сом</span> 
            </h1>

            <button>Заказать суши</button>
          </div>
          
          <div className="carousel">
            <ImageCarousel/>
          </div>
          <div className="speed-dial">
            <MainSpeedDial/>
          </div>
          
          
        </div>

        <div className='benefits'>
          <div className="fast">
            <h4>Быстро</h4>
            <p>Оперативная и недорогая доставка суши в любой уголок Бишкека.</p>
          </div>
          <div className="delicious">
            <h4>Вкусно</h4>
            <p>Готовим только из свежих ингредиентов, без полуфабрикатов.</p>
          </div>
          <div className="free-delivery">
            <h4>Бесплатная доставка</h4>
            <p>Предоставляем бесплатную доставку, если сумма вашего заказа &gt; 800 cом.</p>
          </div>
        </div>    
    
    </div>
  )
}

export default Main