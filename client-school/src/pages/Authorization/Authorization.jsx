import React from "react";
import "./Authorization.css";

export default function Authorization() {
  return (
    <div className="authorization">
      <div className="authorization_window">
        <h3>Войти в систему</h3>
        <label htmlFor="">Логин</label>
        <input type="text" />
        <label htmlFor="">Пароль</label>
        <input type="text" />
        <button>Sign in</button>
      </div>
    </div>
  );
}
