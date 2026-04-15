import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Archive from './Archive';

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>
  );
}
