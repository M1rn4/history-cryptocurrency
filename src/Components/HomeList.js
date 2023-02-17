import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../redux/HomeReducer';
import banner from '../assets/banner.png';
import '../styles/allStyles.css';

const CoinsList = () => {
  const dispatch = useDispatch();
  const coinsArray = useSelector((state) => state.homes);
  const { loading, coinsData: coins } = coinsArray;
  const [search] = useState('');

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoins());
    }
  }, [dispatch, coins.length]);

  const searchedCoin = coins.filter((coin) => (coin.name.toLowerCase()
    .match(search.toLowerCase()) || coin.symbol.toLowerCase()
    .match(search.toLowerCase())) && coin.rank < 11);

  if (loading) {
    return (
      <div className="loader" />
    );
  }

  return (
    <div className="coins-container">
      <img src={banner} alt="banner" />
      <div className="coins-list">
        {searchedCoin.map((coin) => (
          <Link to={`/details/${coin.id}`} key={coin.id}>
            <div className="coin-card">
              <div className="coin-logo">
                <img src={coin.icon} alt="coin icon" />
              </div>
              <div className="coin-desc">
                <h2>{coin.name}</h2>
                <p>
                  Price:
                  {' $'}
                  {coin.price < 1000 ? coin.price.toFixed(2) : (coin.price / 1000).toFixed(1)}
                  {coin.price > 1000 ? 'K' : ''}
                </p>
                <p>
                  Rank:
                  {' '}
                  {coin.rank}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoinsList;
