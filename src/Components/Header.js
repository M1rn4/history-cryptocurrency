import React from 'react';
import { Link } from 'react-router-dom';
import back from '../assets/arrow_back.svg';
import '../styles/allStyles.css';

const Header = () => (
  <header>
    <div className="left">
      <Link to="/">
        <img src={back} alt="back" />
      </Link>
      <h1>CryptoChronicles</h1>
      <p>where you can view the 10 most ranked cryptocurrencies</p>
    </div>
  </header>
);

export default Header;
