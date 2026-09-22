import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/layout/LoadingScreen';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import ErrorBoundary from './components/common/ErrorBoundary';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          visibility: loaded ? 'visible' : 'hidden',
          transition: 'opacity 0.5s ease',
        }}
        aria-hidden={!loaded}
      >
        <ErrorBoundary>
          <Routes>
            <Route path="/"             element={<Home />}         />
            <Route path="/menu"         element={<Menu />}         />
            <Route path="/about"        element={<About />}        />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact"      element={<Contact />}      />
            <Route path="*"            element={<Home />}         />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}
