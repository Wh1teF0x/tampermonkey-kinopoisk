// ==UserScript==
// @name         Kinopoisk free
// @version      1.0.13
// @description  Смотреть фильмы онлайн бесплатно без регистрации и смс
// @author       @whi1tef0x - tg
// @match        https://www.kinopoisk.ru/series/*/*
// @match        https://www.kinopoisk.ru/film/*/*
// @downloadURL  https://raw.githubusercontent.com/Wh1teF0x/tampermonkey-kinopoisk/refs/heads/main/script.js
// @updateURL    https://raw.githubusercontent.com/Wh1teF0x/tampermonkey-kinopoisk/refs/heads/main/script.js
// @grant GM_addStyle
// @license MIT
// ==/UserScript==
function flicksbar() {
  const url = window.location.href;
  const kinopoiskId = url.match("/(series|film)/(?<id_kp>.+?)/");
  const flickbarUrl = `https://flicksbar.mom/film/${kinopoiskId[2]}`;

  const playBtn = document.createElement("button");

  playBtn.type = "button";
  playBtn.innerHTML = "Смотреть";
  playBtn.classList.add("playBtn");
  playBtn.onclick = () => window.open(`${flickbarUrl}`, "_blank");

  GM_addStyle(`
    .playBtn {  
      display: inline;
      position: fixed;
      z-index: 999999;
      bottom: 30px;
      right: 30px;
      height: 44px;
      padding: 9px 15px 9px 38px;
      margin-right: 1px;
      cursor: pointer;

      border: none;
      border-radius: 4.4px;

      font-family: Graphik Kinopoisk LC Web,Arial,Tahoma,Verdana,sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: #fff;

      background-color: #f60;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='%23fff'%3E %3Cpath fill-rule='evenodd' d='M3 1.3v9.4L10.311 6z'/%3E %3C/svg%3E");
      background-position: 15px 13px;
      background-size: 18px;
      background-repeat: no-repeat;
    }
  `);
  
  document.body.appendChild(playBtn);
}

window.onload = flicksbar();
