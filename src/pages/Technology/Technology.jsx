import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Technology(request) {
  const [technologys, setTechnologys] = React.useState();
  const [technology, setTechnology] = React.useState();
  const [indexActive, setIndexActive] = React.useState(0);

  const location = useLocation();

  React.useEffect(() => {
    if (request.request) {
      setTechnologys(request.request.technology);
      setTechnology(request.request.technology[0]);
    }
  }, []);

  React.useEffect(() => {
    const windowScreen = window.innerWidth;
    if (location.pathname === '/technology') {
      const body = document.querySelector('body');
      if (windowScreen < 700) {
        body.style.backgroundImage =
          'url(assets/images/technology/background-technology-mobile.jpg)';
      } else if (windowScreen < 1023) {
        body.style.backgroundImage =
          'url(assets/images/technology/background-technology-tablet.jpg)';
      } else {
        body.style.backgroundImage =
          'url(assets/images/technology/background-technology-desktop.jpg)';
      }
    }
  }, [location.pathname]);

  function handleTec(number = 1) {
    const tec = technologys.find((_, index) => index === number);
    setTechnology(tec);
  }

  function pointerClass(i) {
    return `transition col-span-2 w-[4rem] h-[4rem] p-4 lg:p-3 lg:w-full text-3xl rounded-full 
    border border-slate-400 hover:bg-white hover:text-black cursor-pointer ${
      indexActive === i ? 'bg-white text-black' : ''
    }`;
  }

  if (technologys && technologys.length > 0) {
    return (
      <motion.section
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        className="motionSelection mt-5 md:mt-0 lg:mt-0 text-white grid grid-cols-1 lg:grid-cols-10"
        style={{ height: 'calc(100vh - 5.5rem)' }}
      >
        <div
          className="col-span-1 lg:col-span-10 self-center w-full
        lg:col-start-1 lg:col-end-10 lg:grid-cols-10 lg:justify-center pl-2 lg:pl-0 order-1 lg:pt-10"
        >
          <h2
            className="self-center uppercase mx-auto max-w-md text-2xl
          lg:text-center lg:mx-0 lg:text-3xl lg:col-start-2 lg:col-end-10 lg:max-w-lg lg:self-end"
          >
            <span className="text-slate-400 mr-2">03</span> Space launch 101
          </h2>
        </div>

        <div
          className="grid grid-cols-1 col-span-1 lg:grid-cols-10 lg:col-span-5 
        justify-items-center order-2 lg:order-1"
        >
          <div className="grid grid-cols-1 col-span-1 lg:grid-cols-10 lg:col-span-10">
            <nav
              className="flex space-x-9 w-full justify-center items-center col-span-1 
            lg:col-span-4 lg:grid lg:space-x-0 lg:space-y-20 lg:grid-cols-1 lg:w-[4rem] text-center 
            lg:mb-[10rem] lg:justify-self-center lg:items-start lg:self-start lg:pt-20"
            >
              {technologys.map((_, i) => (
                <div
                  key={`item-${i}`}
                  className="w-[4.5rem] h-[4.5rem] my-5 lg:my-0 lg:w-[100%] lg:h-[4rem] cursor-pointer"
                >
                  <div
                    className={pointerClass(i)}
                    onClick={(e) => {
                      handleTec(i);
                      setIndexActive(i);
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
              ))}
            </nav>

            {technology && (
              <div className="col-span-6 mx-auto px-5 max-w-sm lg:px-0 lg:pt-20 text-center lg:text-left">
                <div className="uppercase">The Terminology...</div>
                <h2 className="uppercase lg:text-2xl text-slate-400">
                  {technology.role}
                </h2>
                <p className="uppercase text-4xl lg:text-5xl mt-2 font-light">
                  {technology.name}
                </p>
                <p className="text-[1.2rem] mt-5">{technology.description}</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 col-span-1 lg:grid-cols-4 lg:col-span-5 order-1 lg:order-2">
          <div className="col-span-1 lg:col-span-5 lg:h-[70%]">
            {technology && (
              <img
                className="w-full h-full transition-transform"
                src={`${technology.images.landscape}`}
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

export default Technology;
