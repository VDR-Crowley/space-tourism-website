import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Crew.module.css';

function Crew() {
  const [crews, setCrews] = React.useState();
  const [crew, setCrew] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [indexActive, setIndexActive] = React.useState(0);

  const location = useLocation();

  React.useEffect(() => {});

  React.useEffect(() => {
    loadData();
  }, []);

  React.useEffect(() => {
    const windowScreen = window.innerWidth;

    if (location.pathname === '/crew') {
      const body = document.querySelector('body');
      if (windowScreen < 700) {
        body.style.backgroundImage =
          'url(src/assets/images/crew/background-crew-mobile.jpg)';
      } else {
        body.style.backgroundImage =
          'url(src/assets/images/crew/background-crew-desktop.jpg)';
      }
    }
  }, [location.pathname]);

  async function loadData() {
    setIsLoading(true);
    await fetch('src/data.json')
      .then((res) => res.json())
      .then((req) => {
        setCrews(req.crew);
        setCrew(req.crew[0]);
      })
      .catch((e) => console.log('erro'))
      .finally(() => setIsLoading(false));
  }

  function handleCrew(number = 1) {
    const crew = crews.find((item, index) => index === number);
    setCrew(crew);
  }

  function pointerClass(i) {
    return `col-span-1 p-3 lg:p-2 w-full rounded-full bg-slate-400 hover:bg-white cursor-pointer ${
      indexActive === i ? 'bg-white' : ''
    }`;
  }

  if (crews && crews.length > 0) {
    return (
      <motion.section
        className="motionSelection text-white grid grid-cols-1 py-5 lg:grid-cols-10"
        initial={{ x: '100%' }}
        animate={{
          x: 0,
        }}
        style={{ height: 'calc(100vh - 5.5rem)' }}
      >
        <div
          className="col-span-1 lg:col-start-1 lg:col-end-5 justify-center w-full 
        grid grid-cols-1 lg:grid-cols-10 lg:justify-center order-1 lg:pt-10"
        >
          <div className="grid mx-auto lg:mx-0 lg:col-start-2 lg:col-end-10 lg:max-w-lg lg:self-end">
            <h2
              className="text-2xl self-center uppercase mx-auto lg:order-1 flex text-center 
            mt-5 lg:mt-0 lg:gap-0 lg:text-left w-full lg:text-3xl"
            >
              <span className="text-slate-400 mr-2">02</span> Meet your crew
            </h2>
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-10 lg:col-start-1 lg:col-end-5 pb-5 
        px-5 lg:px-0 lg:pl-5 lg:pb-0 justify-items-center order-2 lg:order-1"
        >
          <div className="col-span-1 lg:col-span-10 grid lg:self-center grid-cols-1 order-3">
            {crew && (
              <div
                className="max-w-lg order-2 lg:order-1 lg:max-w-lg grid gap-y-2 
              lg:self-center text-center mt-5 lg:mt-0 lg:gap-y-0 lg:text-left"
              >
                <h2 className="uppercase lg:text-2xl text-slate-400">
                  {crew.role}
                </h2>
                <p className="text-3xl lg:text-5xl py-2 lg:py-8 font-light uppercase">
                  {crew.name}
                </p>
                <p className="mt-5">{crew.bio}</p>
              </div>
            )}

            <nav
              className="grid grid-cols-4 order-1 lg:order-2 lg:mt-[6rem] mb-2 w-[35%] 
            lg:w-[25%] justify-self-center lg:justify-self-start items-center self-end"
            >
              {crews.map((_, i) => (
                <div
                  key={`item-${i}`}
                  className="w-[50%] justify-self-center lg:justify-self-start cursor-pointer"
                >
                  <div
                    className={pointerClass(i)}
                    onClick={(e) => {
                      handleCrew(i);
                      setIndexActive(i);
                    }}
                  />
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="grid grid-cols-4 col-span-5 lg:col-span-6 items-end 
        justify-self-center border-b border-slate-500 lg:border-b-0 w-[90%] lg:w-auto 
        my-9 lg:my-0 lg:justify-self-stretch order-1 lg:order-2"
        >
          <div className="col-span-5 grid justify-center lg:justify-center lg:h-full">
            {crew && (
              <img
                className="w-44 lg:w-full lg:h-full transition-transform"
                src={`${crew.images.png}`}
                alt="europa"
              />
            )}
          </div>
        </div>
      </motion.section>
    );
  }

  return null;
}

export default Crew;
