import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const [activeItem, setActiveItem] = React.useState('/');

  React.useEffect(() => {
    setActiveItem(location.pathname);
  }, []);

  return (
    <div className="w-full flex mt-5 items-center justify-between max-w-screen-2xl mx-auto">
      <div className="pl-5">
        <img
          src="assets/images/shared/logo.svg"
          alt="estrela com circulo branco em volta"
        />
      </div>

      <div className="relative flex-1 md:hidden lg:block">
        <div className="absolute w-[90%] h-[1px] bg-slate-400 right-[-10px] z-10" />
      </div>

      <nav
        className="relative backdrop-blur-[100px] uppercase pl-10 pr-40 md:pl-5 md:pr-5 text-white 
      grid grid-cols-4 gap-5"
      >
        <Link
          className="display-inline-block text-center"
          to="/"
          onClick={() => {
            setActiveItem('/');
          }}
        >
          <p
            className={
              activeItem === '/'
                ? 'pt-5 pb-5 border-b-[2px] border-transparent border-white'
                : 'pt-5 pb-5 border-b-[2px] border-transparent transition-all duration-300 hover:border-white'
            }
          >
            00
            <span className="font-light ml-2">Home</span>
          </p>
        </Link>

        <Link
          className="display-inline-block text-center"
          to="/destination"
          onClick={() => {
            setActiveItem('/destination');
          }}
        >
          <p
            className={
              activeItem === '/destination'
                ? 'pt-5 pb-5 border-b-[2px] border-transparent border-white'
                : 'pt-5 pb-5 border-b-[2px] border-transparent transition-all duration-300 hover:border-white'
            }
          >
            01
            <span className="font-light ml-2">Destination</span>
          </p>
        </Link>

        <Link
          className="display-inline-block text-center"
          to="/crew"
          onClick={() => {
            setActiveItem('/crew');
          }}
        >
          <p
            className={
              activeItem === '/crew'
                ? 'pt-5 pb-5 border-b-[2px] border-transparent border-white'
                : 'pt-5 pb-5 border-b-[2px] border-transparent transition-all duration-300 hover:border-white'
            }
          >
            02
            <span className="font-light ml-2">Crew</span>
          </p>
        </Link>

        <Link
          className="display-inline-block text-center"
          to="/technology"
          onClick={() => {
            setActiveItem('/technology');
          }}
        >
          <p
            className={
              activeItem === '/technology'
                ? 'pt-5 pb-5 border-b-[2px] border-transparent border-white'
                : 'pt-5 pb-5 border-b-[2px] border-transparent transition-all duration-300 hover:border-white'
            }
          >
            03
            <span className="font-light ml-2">Technology</span>
          </p>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
