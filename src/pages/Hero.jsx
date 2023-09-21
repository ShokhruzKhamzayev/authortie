import React, { useEffect, useRef } from 'react'
import {gsap} from "gsap"
import { Timeline } from 'gsap/gsap-core'
import logo from '../assets/images/logo.png'
import mainContent from '../assets/images/main-content.png'
import mainContentLaptop from '../assets/images/mainContentLaptop.png'
import chats from '../assets/images/chats.svg'
import noti from '../assets/images/notifications.svg'
import profile from '../assets/images/profile.svg'
import { MdCancel } from 'react-icons/md'

export default function Hero() {
  let header = useRef(null),
    text_main = useRef(null),
    img_main = useRef(null),
    navPhone = useRef(),
    opener = useRef()

    
    const tl = new gsap.timeline()
    function navAction() {
      navPhone.current.classList.toggle('active')
    }

  useEffect(() => {

    tl.fromTo(header, {
      y: -200,
      duration: 1
    }, {
      y: 0
    })

    tl.fromTo(text_main, {
      opacity: 0,
      x: -200,
    }, {
      opacity: 1,
      x: 0,
      ease : 'elastic'
    })

    tl.fromTo(img_main, {
      opacity:0,
      x: 200
    }, {
      opacity: 1,
      x: 0,
      ease: 'ease'
    })
  })

  return (
    <div className="hero-section">
      <div className="nav-for-phone" ref={navPhone}>
        <div className="container">
          <div className="nav-header">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="canceler">
              <button onClick={navAction}>
                <MdCancel/>
              </button>
            </div>
          </div>
          <ul>
            <li><a href="#">Links</a></li>
            <li><a href="#">Links</a></li>
            <li><a href="#">Links</a></li>
            <li><a href="#">Links</a></li>
          </ul>
        </div>
      </div>
      <header ref={el => header = el}>
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="our company logo" />
            </a>
            <nav className='for-laptop'>
              <ul>
                <li><a href="#">Аналитика</a></li>
                <li><a href="#">Сообщество</a></li>
                <li><a href="#">Для организаций</a></li>
              </ul>
            </nav>
          </div>
          <div className="for-aprove btns">
            <button>Создать заявку</button>
            <div className="btn-for-nav " ref={opener} onClick={navAction}>
              <svg className='for-phone'
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="17"
                viewBox="0 0 26 17"
                fill="none"
              >
                <path
                  d="M26 17H11.5V15.1667H26V17ZM26 10H0V8.08333H26V10ZM26 3H0V1H26V3Z"
                  fill="#575756"
                />
              </svg>
              <img className='for-laptop' src={chats} alt="" />
              <img className='for-laptop' src={noti} alt="" />
              <img className='for-laptop' src={profile} alt="" />
            </div>
          </div>
          
        </div>
      </header>
      <main>
        <div className="container">
          <div className="text-main" ref={el => text_main = el}>
            <h1>Сообщество взаимопомощи между учёными со всего мира</h1>
            <p>
              Аналитика, соавторство, рецензирование и продвижение научных
              работ.
            </p>
            <button>Создать заявку</button>
          </div>
          <div className="img-main" ref={el => img_main = el}>
            <img className='for-phone' src={mainContent} alt="photo of group" />
            <img className='for-laptop' src={mainContentLaptop} alt="photo of group" />
          </div>
        </div>
      </main>
    </div>
  );
}
