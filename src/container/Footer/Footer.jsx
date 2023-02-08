import React from 'react'
import './Footer.scss'
import { Link, animateScroll as scroll } from "react-scroll";

import wa from './../../assets/icons/wa.svg'
import ig from './../../assets/icons/ig.svg'
import tt from './../../assets/icons/tt.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
            <div className="footer-menu">
                <Link
                    className='nav-link nav-link-ltr footer-menu-link'
                    activeClass="active"
                    to="menu"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    МЕНЮ
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="rolls"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    РОЛЛЫ
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="sushi"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    СУШИ
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="sets"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    СЕТЫ
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="combo"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Комбо
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="pizza"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Пицца
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="drinks"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Напитки
                </Link>
            </div>
            <div className="footer-for-customers">
                <h5>ПОКУПАТЕЛЯМ</h5>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="menu"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Меню
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    О нас
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Контакты
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Отзывы
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="delivery"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Доставка
                </Link>
                <Link
                    className='nav-link nav-link-ltr'
                    activeClass="active"
                    to="cart"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Корзина
                </Link>
                
                
            </div>
            <div className="footer-contacts">
                <div>
                    <h5>ТЕЛЕФОН</h5>
                    <p>0 702 774 744</p>
                </div>
                <div>
                    <h5>АДРЕС</h5>
                    <p>БИШКЕК, 5-й МИКРОРАЙОН, 60/10</p>
                </div>
                <div>
                    <h5>РЕЖИМ РАБОТЫ</h5>
                    <p>ЕЖЕДНЕВНО С 11:00 ДО 2:00</p>
                </div>
            </div>

            <div className="footer-socials">
                <h5>СОЦИАЛЬНЫЕ СЕТИ</h5>
                <div className='footer-socials-link'>
                    <a href="https://api.whatsapp.com/send/?phone=996707455500&text&type=phone_number&app_absent=0">
                        <img src={wa} alt="" />
                        +996 702 774 744
                    </a>
                    <a href="https://www.instagram.com/cunami_sushi_kg/">
                        <img src={ig} alt="" />
                        cunami_sushi_kg
                    </a>
                    <a href="https://www.tiktok.com/@cunami_sushi_kg">
                        <img src={tt} alt="" />
                        cunami_sushi_kg
                    </a>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Footer