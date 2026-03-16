import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark-theme'
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark-theme' ? 'light-theme' : 'dark-theme'));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/projetos"  element={<AllProjects />} />
      </Routes>

      <button
        id="toggle-theme-btn"
        className="toggle-theme-btn"
        onClick={toggleTheme}
        aria-label="Alternar tema"
      >
        <i className="fa-solid fa-circle-half-stroke"></i>
      </button>
    </BrowserRouter>
  );
}
