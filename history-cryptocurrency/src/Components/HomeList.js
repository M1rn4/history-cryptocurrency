import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinsHome } from '../redux/HomeReducer';

const HomeList = () => {
  const dispatch = useDispatch();
  const coinsArray = useSelector((state) => state.coins);
  const loading = coinsArray?.loading;
  const coins = coinsArray?.coinsData || [];
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoinsHome());
    }
  }, [dispatch, coins.length]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchedCoin = coins.filter((coin) => coin.name.toLowerCase()
    .match(search.toLowerCase()) || coin.symbol.toLowerCase()
    .match(search.toLowerCase()));

  if (loading) {
    return (
      <div className="loader" />
    );
  }

  return (
    <div className="coins-container">   
      <div className="search-field">
        <input
          type="search"
          placeholder="Search cryptocurrency"
          onChange={handleChange}
          value={search}
        />
      </div>
      <div className="coins-list">
        {searchedCoin.map((coin) => (
          <Link to={`/details/${coin.id}`} key={coin.id}>
            <div className="coin-card">
              <div className="coin-logo">
                <img src={coin.icon} alt="coin icon" />
              </div>
              <div className="coin-desc">
                <h2>{coin.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeList;

