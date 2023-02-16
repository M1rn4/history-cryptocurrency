import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="left">
      <Link to="/">
      </Link>
      <h1>CryptoChronicles</h1>
    </div>
  </header>
);

export default Header;