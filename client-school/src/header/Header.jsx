import React from "react";
import headerBackground from "../assets/Header-background.svg";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header_text">
          <p>
            <span className="header_text_1">Следуй за</span> <br />
            <span className="header_text_2">белым</span> <br />
            <span className="header_text_3">кроликом</span>
          </p>
        </div>
        <div className="header_navbar">
          <a href="#">Главная</a>
          <a href="#">Условия</a>
          <a href="#">Отзывы</a>
          <a href="#">Связаться с нами</a>
        </div>
      </header>
      <div className="header_info">
        <div>
          <p className="header_info_text">
            Начните обучение <br /> будущей профессии <br /> уже сейчас
          </p>
          <button className="header_info_btn">Войти в систему</button>
        </div>
        <img src={headerBackground} alt="" className="header_img" />
      </div>
    </div>
  );
}
