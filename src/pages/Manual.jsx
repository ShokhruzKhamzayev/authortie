import React from 'react'
import listFirst from "../assets/images/list-first.svg";
import listSecond from '../assets/images/list-second.svg'
import listThird from '../assets/images/list-third.svg'
import listFourth from "../assets/images/list-fourth.svg";

export default function Manual() {
  return (
    <div className="manual">
      <div className="starter-manual">
        <h1 className='same-header'>Как это работает</h1>
      </div>
      <div className="list-of-manual">
        <div className="manual-list">
          <div className="img-manual">
            <img src={listFirst} alt="as icon" />
          </div>
          <div className="text-manual">
            <p>Оцените привлекательность темы</p>
          </div>
        </div>
        <div className="arrow for-laptop">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="7" viewBox="0 0 21 7" fill="none">
            <path d="M18.4467 4.2L16.7267 6.013L17.6667 7L21 3.5L17.6667 0L16.7267 0.987L18.4467 2.8H0V4.2H18.4467Z" fill="#5A5A5A" />
          </svg>
        </div>
        <div className="manual-list">
          <div className="img-manual">
            <img src={listSecond} alt="" />
          </div>
          <div className="text-manual">
            <p>Выполните совместные исследования</p>
          </div>
        </div>
        <div className="arrow for-laptop">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="7" viewBox="0 0 21 7" fill="none">
            <path d="M18.4467 4.2L16.7267 6.013L17.6667 7L21 3.5L17.6667 0L16.7267 0.987L18.4467 2.8H0V4.2H18.4467Z" fill="#5A5A5A" />
          </svg>
        </div>
        <div className="manual-list">
          <div className="img-manual">
            <img src={listThird} alt="" />
          </div>
          <div className="text-manual">
            <p>Улучшите написанную работу</p>
          </div>
        </div>
        <div className="arrow for-laptop">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="7" viewBox="0 0 21 7" fill="none">
            <path d="M18.4467 4.2L16.7267 6.013L17.6667 7L21 3.5L17.6667 0L16.7267 0.987L18.4467 2.8H0V4.2H18.4467Z" fill="#5A5A5A" />
          </svg>
        </div>
        <div className="manual-list">
          <div className="img-manual">
            <img src={listFourth} alt="" />
          </div>
          <div className="text-manual">
            <p> Продвиньте свою работу</p>
          </div>
        </div>
      </div>
    </div>
  );
}
