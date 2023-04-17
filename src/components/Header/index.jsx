import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Header = ({ page }) => {
  return (
    <div>
      <Navbar />
      {page === 'home' && <Hero />}
    </div>
  );
};

export default Header;
