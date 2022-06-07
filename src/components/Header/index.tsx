import React from 'react';
import './style.scss';

const logo_url: object = new URL('../../img/logo.svg', import.meta.url);
const logo: string = logo_url.toString();

const Header = () => {
  return (
    <header className='hero-main-heading-container'>
      <img src={logo} className='logo' />
      <h1 className='hero-main-heading'>Calculator</h1>
    </header>
  );
};

export default Header;
