import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProfileHero from '@src/pagesSrc/User/ProfileHero';

const Header = ({ page }) => {
  console.log(page);
  return (
    <div>
      <Navbar page={page} />
      {page === 'home' && <Hero />}
      {page === 'user' && <ProfileHero />}
    </div>
  );
};

export default Header;
