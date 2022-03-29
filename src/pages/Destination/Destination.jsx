import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';

function Destination() {
  const [destinations, setDestinations] = React.useState();
  const [destination, setDestination] = React.useState();
  const [activeItem, setActiveItem] = React.useState('Moon');
  const [isLoading, setIsLoading] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    loadData();
  }, []);

  React.useEffect(() => {
    const windowScreen = window.innerWidth;

    if (location.pathname === '/destination') {
      const body = document.querySelector('body');
      if (windowScreen < 700) {
        body.style.backgroundImage =
          'url(./src/assets/destination/background-destination-mobile.jpg)';
      } else {
        body.style.backgroundImage =
          'url(./src/assets/destination/background-destination-desktop.jpg)';
      }
    }
  }, [location.pathname]);

  async function loadData() {
    setIsLoading(true);
    await fetch('src/data.json')
      .then((res) => res.json())
      .then((req) => {
        setDestinations(req.destinations);
        console.log(req);
        const destination = req.destinations.find(
          (item) => item.name === 'Moon',
        );
        setDestination(destination);
      })
      .catch((e) => console.log('erro'))
      .finally(() => setIsLoading(false));
  }

  function handleDestination(name = Moon) {
    const destination = destinations.find((item) => item.name === name);
    setDestination(destination);
  }

  if (destinations && destinations.length > 0) {
    return (
      <motion.section
        className="motionSelection mt-5 lg:mt-0 text-white grid grid-cols-1 gap-y-10 lg:grid-cols-10"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        style={{ height: 'calc(100vh - 6rem)' }}
      >
        <div className="grid col-span-5 justify-items-center items-start">
          <h2 className="text-2xl lg:text-3xl self-center mb-5 lg:mb-0 lg:pr-[4rem] uppercase">
            <span className="text-slate-400 mr-2">01</span> Pick your
            destination
          </h2>
          {destination && (
            <img
              className="animate-spin w-96 transition-transform rounded-full"
              src={`${destination.images.png}`}
              alt="europa"
              style={{ animation: 'spin 10s linear infinite' }}
            />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:col-span-5">
          <nav
            className="flex justify-center space-x-4 lg:grid grid-cols-1 col-span-4 
          lg:grid-cols-8 lg:col-span-4 justify-items-center items-end lg:items-center"
          >
            {destinations.map((item, i) => (
              <div key={`item-${i}`} className="lg:w-full cursor-pointer">
                <div
                  className={`col-span-1 p-2 w-full cursor-pointer border-b-4 text-2xl 
                  border-transparent hover:border-b-white ${
                    activeItem === item.name
                      ? 'border-b-white'
                      : 'hover:border-b-2'
                  }`}
                  onClick={(e) => {
                    handleDestination(e.target.innerText);
                    setActiveItem(item.name);
                  }}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </nav>

          <div className="col-span-1 text-center lg:text-left lg:col-span-5 lg:max-w-sm">
            {destination && (
              <>
                <p className="text-9xl font-light my-5">{destination.name}</p>
                <p className="mt-5 max-w-lg m-auto px-2 lg:px-0 lg:m-0">
                  {destination.description}
                </p>
                <div
                  className="border-t-2 mx-10 lg:mx-0 border-slate-500 mt-10 flex 
                flex-col lg:flex-row pt-5 text-lg"
                >
                  <div className="flex flex-col lg:mr-10">
                    Avg. distance{' '}
                    <span className="text-3xl mt-2 lg:mt-0">
                      {destination.distance}
                    </span>
                  </div>
                  <div className="flex flex-col mt-5 lg:mt-0">
                    Est. travel time{' '}
                    <span className="text-3xl mt-2 lg:mt-0">
                      {destination.travel}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.section>
    );
  }

  return null;
}

export default Destination;
