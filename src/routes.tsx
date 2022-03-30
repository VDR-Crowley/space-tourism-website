import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import Technology from './pages/Technology/Technology';
import './App.css';

export default function ReactRoutes() {
  const location = useLocation();
  return (
    <div className="overflow-x-hidden max-w-screen-2xl mx-auto">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
    </div>
  );
}
