import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import MenuHamburger from './components/MenuHamburger';

import history from './services/history';
import ReactRoutes from './routes';

function App() {
  const windowScreen = window.innerWidth;

  return (
    <BrowserRouter history={history}>
      {windowScreen < 700 && <MenuHamburger />}
      {windowScreen > 700 && <Header />}

      <ReactRoutes />
    </BrowserRouter>
  );
}

export default App;
