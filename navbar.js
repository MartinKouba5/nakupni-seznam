import React, { useState } from 'react';

const Navbar = () => {
  const [language, setLanguage] = useState('cz'); // Defaultní jazyk
  const [darkMode, setDarkMode] = useState(false); // Stav Dark Mode

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Implementujte logiku pro změnu barev stránky podle stavu darkMode
  };

  const iconStyle = {
    width: '30px',
    height: 'auto',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        {/* Emotikony pro výběr jazyka */}
        <span
          role="img"
          aria-label="Czech flag"
          onClick={() => handleLanguageChange('cz')}
          style={{ cursor: 'pointer', marginRight: '10px' }}
        >
          🇨🇿
        </span>
        <span
          role="img"
          aria-label="English flag"
          onClick={() => handleLanguageChange('en')}
          style={{ cursor: 'pointer', marginRight: '10px' }}
        >
          🇬🇧
        </span>
      </div>

      {/* Bootstrap switch for Dark Mode */}
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={darkMode}
          onChange={handleDarkModeToggle}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark Mode
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
