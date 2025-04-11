// ==UserScript==
// @name         Flicksbar redirect
// @version      1.0.12
// @description  Смотреть фильмы онлайн бесплатно без регистрации и смс
// @author       @whi1tef0x - tg
// @match        https://www.kinopoisk.ru/series/*/*
// @match        https://www.kinopoisk.ru/film/*/*
// @downloadURL  https://raw.githubusercontent.com/Wh1teF0x/tampermonkey_kinopoisk/refs/heads/main/script.js
// @updateURL    https://raw.githubusercontent.com/Wh1teF0x/tampermonkey_kinopoisk/refs/heads/main/script.js
// @license MIT
// ==/UserScript==
function flicksbar() {
  const url = window.location.href;
  const kinopoiskId = url.match('/(series|film)/(?<id_kp>.+?)/');
  const flickbarUrl = `https://flicksbar.mom/film/${kinopoiskId[2]}`;

  const playBtn = document.createElement('button');

  playBtn.type = 'button';
  playBtn.innerHTML = 'Смотреть';
  playBtn.onclick = () => window.open(`${flickbarUrl}`, '_blank');

  playBtn.style.fontFamily = 'Graphik Kinopoisk LC Web,Arial,Tahoma,Verdana,sans-serif';
  playBtn.style.color = '#fff';
  playBtn.style.fontSize = '13px';
  playBtn.style.fontWeight = '500';

  playBtn.style.backgroundColor = '#f60';
  playBtn.style.backgroundImage = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='%23fff'%3E %3Cpath fill-rule='evenodd' d='M3 1.3v9.4L10.311 6z'/%3E %3C/svg%3E")`;
  playBtn.style.backgroundPosition = '15px 13px';
  playBtn.style.backgroundSize = '18px';
  playBtn.style.backgroundRepeat = 'no-repeat';

  playBtn.style.cursor = 'pointer';
  playBtn.style.border = '0';
  playBtn.style.borderRadius = '4.4px';
  playBtn.style.marginRight = '1px';

  playBtn.style.position = 'fixed';
  playBtn.style.zIndex = '999999';
  playBtn.style.display = 'inline';
  playBtn.style.bottom = '30px';
  playBtn.style.right = '30px';
  playBtn.style.padding = '9px 15px 9px 38px';
  playBtn.style.height = '44px';

  document.body.appendChild(playBtn);
}

window.onload = flicksbar();
