import React from 'react';
import { Link } from 'react-router-dom';

function MenuHamburger() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('/');

  return (
    <header className="w-full flex mt-5 items-center justify-between max-w-screen-2xl mx-auto">
      <div className="pl-5">
        <img src="assets/images/shared/logo.svg" />
      </div>

      <div className="relative z-30 right-5" onClick={() => setIsOpen(!isOpen)}>
        <img
          className="p-2"
          src={`assets/shared/${
            !isOpen ? 'icon-hamburger' : 'icon-close'
          }.svg`}
          alt="menu hamburger"
        />
      </div>

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute bottom-0 top-[0px] overflow-hidden w-[100vw] 
          h-[100%] bg-transparent z-10"
          />
          <nav
            className="flex flex-col absolute h-[100%] w-[70%] right-0 top-[0px] m-0 
        text-white backdrop-blur-[18px] uppercase text-lg z-20 space-y-5 transition-all"
          >
            <Link
              to="/"
              onClick={() => setActiveItem('/')}
              className={`w-full p-5 mt-20 ${
                activeItem === '/'
                  ? 'pt-5 pb-5 border-r-[2px] border-transparent border-white'
                  : 'pt-5 pb-5 border-r-[5px] border-transparent transition-all duration-300 hover:border-white'
              }`}
            >
              <span className="pr-3">00</span>Home
            </Link>
            <Link
              to="/destination"
              onClick={() => setActiveItem('/destination')}
              className={`w-full p-5 ${
                activeItem === '/destination'
                  ? 'pt-5 pb-5 border-r-[2px] border-transparent border-white'
                  : 'pt-5 pb-5 border-r-[5px] border-transparent transition-all duration-300 hover:border-white'
              }`}
            >
              <span className="pr-3">01</span>Destination
            </Link>
            <Link
              to="/crew"
              onClick={() => setActiveItem('/crew')}
              className={`w-full p-5 ${
                activeItem === '/crew'
                  ? 'pt-5 pb-5 border-r-[2px] border-transparent border-white'
                  : 'pt-5 pb-5 border-r-[5px] border-transparent transition-all duration-300 hover:border-white'
              }`}
            >
              <span className="pr-3">02</span>Crew
            </Link>
            <Link
              to="/technology"
              onClick={() => setActiveItem('/technology')}
              className={`w-full p-5 ${
                activeItem === '/technology'
                  ? 'pt-5 pb-5 border-r-[2px] border-transparent border-white'
                  : 'pt-5 pb-5 border-r-[5px] border-transparent transition-all duration-300 hover:border-white'
              }`}
            >
              <span className="pr-3">03</span>Technology
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}

export default MenuHamburger;
