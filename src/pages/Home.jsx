import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const styles = {
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
  };

  const location = useLocation();

  React.useEffect(() => {
    const windowScreen = window.innerWidth;
    if (location.pathname === '/') {
      const body = document.querySelector('body');
      if (windowScreen < 700) {
        body.style.backgroundImage =
          'url(assets/images/home/background-home-mobile.jpg)';
      } else if (windowScreen < 1023) {
        body.style.backgroundImage =
          'url(assets/images/home/background-home-tablet.jpg)';
      } else {
        body.style.backgroundImage =
          'url(assets/images/home/background-home-desktop.jpg)';
      }
    }
  }, [location.pathname]);

  return (
    <motion.div
      className="motionSelection overflow-hidden lg:py-10"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      style={{ height: 'calc(100vh - 5.5rem)' }}
    >
      <div
        className="pt-28 pb-16 lg:py-44 grid grid-cols-1 gap-y-10 lg:grid-cols-4"
        styles={styles}
      >
        <div
          className="text-white justify-self-end text-center lg:text-left max-w-lg 
          lg:max-w-xl col-span-1 lg:pl-5 lg:col-span-2 m-auto"
        >
          <p className="text-[1rem] lg:text-[1.2rem] uppercase">
            So, you want to travel to
          </p>
          <p className="text-[6rem] lg:text-[7rem] uppercase">Space</p>
          <p className="px-4 lg:px-0 lg:text-2xl">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          to="/destination"
          className="flex self-end items-center justify-self-center justify-center 
          w-44 h-44 text-[2rem] col-span-2 bg-white text-black rounded-[50%] 
          transition-all duration-300 hover:bg-black hover:text-white hover:scale-110"
        >
          <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            Explore
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}

export default Home;
