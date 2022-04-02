import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import Technology from './pages/Technology/Technology';
import './App.css';
import { useFetch } from './hooks/useFetch';

export default function ReactRoutes() {
  const location = useLocation();
  let navigate = useNavigate();
  const { request } = useFetch('data.json');

  React.useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div className="overflow-x-hidden max-w-screen-2xl mx-auto">
      <Routes location={location}>
        <Route path="/" element={<Home />} exact />
        <Route
          path="/destination"
          element={<Destination request={request} />}
          exact
        />
        <Route path="/crew" element={<Crew request={request} />} exact />
        <Route
          path="/technology"
          element={<Technology request={request} />}
          exact
        />
      </Routes>
    </div>
  );
}
