import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Destination(request) {
  const [destinations, setDestinations] = React.useState();
  const [destination, setDestination] = React.useState();
  const [activeItem, setActiveItem] = React.useState('Moon');
  const location = useLocation();

  React.useEffect(() => {
    if (request.request) {
      setDestinations(request.request.destinations);
      setDestination(request.request.destinations[0]);
    }
  }, []);

  React.useEffect(() => {
    const windowScreen = window.innerWidth;

    if (location.pathname === '/destination') {
      const body = document.querySelector('body');
      if (windowScreen < 700) {
        body.style.backgroundImage =
          'url(assets/images/destination/background-destination-mobile.jpg)';
      } else if (windowScreen < 1023) {
        body.style.backgroundImage =
          'url(assets/images/destination/background-destination-tablet.jpg)';
      } else {
        body.style.backgroundImage =
          'url(assets/images/destination/background-destination-desktop.jpg)';
      }
    }
  }, [location.pathname]);

  function handleDestination(name = 'Moon') {
    const destination = destinations.find((item) => item.name === name);
    setDestination(destination);
  }

  if (destinations && destinations.length > 0) {
    return (
      <motion.section
        className="motionDestination mt-5 md:mt-0 lg:mt-0 py-5 text-white grid grid-cols-1 gap-y-10 lg:grid-cols-10"
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
              className="animate-spin w-64 md:w-72 lg:w-96 transition-transform rounded-full"
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
                <p className="text-9xl font-light my-5 lg:mt-0">
                  {destination.name}
                </p>
                <p className="mt-5 max-w-lg m-auto px-2 lg:px-0 lg:m-0 lg:text-[1.5rem]">
                  {destination.description}
                </p>
                <div
                  className="border-t-2 mx-10 lg:mx-0 border-slate-500 mt-10 flex 
                flex-col md:flex-row md:justify-center lg:justify-start pt-5 text-lg"
                >
                  <div className="flex flex-col md:mr-10">
                    Avg. distance{' '}
                    <span className="text-3xl mt-2 md:mt-0">
                      {destination.distance}
                    </span>
                  </div>
                  <div className="flex flex-col mt-5 md:mt-0">
                    Est. travel time{' '}
                    <span className="text-3xl mt-2 md:mt-0">
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
