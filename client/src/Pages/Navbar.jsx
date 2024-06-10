import React from 'react';
import './Navbarcss.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img className="logo" src="https://pump-bot.com/wp-content/uploads/2023/05/BitgetFuturesTradingBotLogo-1024x274.webp" alt="logo" />
          <a className="navbar-brand" href="#" style={{ color: '#03aac7' }}><b></b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> &nbsp;&nbsp;&nbsp;

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className='logo3' src="https://icons.veryicon.com/png/o/transport/magic-wheel/workbench-selection.png" alt="" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> &nbsp;&nbsp;&nbsp;  


              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Buy Crypto
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> &nbsp;&nbsp;&nbsp;

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Market
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> &nbsp;&nbsp;&nbsp;

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Trade
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> &nbsp;&nbsp;&nbsp;

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Future
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> &nbsp;&nbsp;&nbsp;

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Copy
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> &nbsp;&nbsp;&nbsp;

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Bots
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> &nbsp;&nbsp;&nbsp;

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Earn
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> &nbsp;&nbsp;&nbsp;

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Web3
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> &nbsp;&nbsp;&nbsp;

              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Launchhub
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <a className="logo2" href="#"><img style={{ height: 25 }} src="https://img.bitgetimg.com/multiLang/web/467e96d3f84bb654b6d65c0f86a64c36.png" alt="logo2" /></a>
          </div>

          <a className="nav-link" href="#">Log in</a>        
          <button className='btn'>Sign up</button>
          <a className="nav-link" href="#"><img className='logo4' src="https://play-lh.googleusercontent.com/6rASDlXG9FqaDHXVlGSXnlZPlLRQvfeOHHDBcM-g2UEk68Asu_o07VWN-YcxSlIXfw" alt="logo4" /></a>        
          <a className="nav-link" href="#"><img className='logo5' src="https://th.bing.com/th/id/R.cbc36a02ca82b284986b02f0c8154235?rik=odcobVwyV%2b4xWA&riu=http%3a%2f%2fconvergentinfoware.com%2fpublic%2fassets%2fimages%2fmobile-menu.webp&ehk=kaRO2jVT3xXM5ATfbR5BnE%2f3RixEm40zL4XLg9ohRGc%3d&risl=&pid=ImgRaw&r=0" alt="logo5" /></a>        
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
