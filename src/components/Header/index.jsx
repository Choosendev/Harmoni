import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Header = ({ page }) => {
  console.log(page);
  return (
    <div>
      <Navbar page={page} />
      {page === 'home' && <Hero />}
    </div>
  );
};

export default Header;
