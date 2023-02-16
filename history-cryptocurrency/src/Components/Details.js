import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoins } from '../redux/DetailReducer';

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const coinsData = useSelector((state) => state.details);
  const { loading, details } = coinsData;

  useEffect(() => {
    dispatch(getCoins(params.id));
  }, [dispatch, params.id]);

  if (loading) {
    return (
      <div className="loader" />
    );
  }

  return (
    <div className="coin-details">
      <div className="hero">
        <img src={details.icon} alt="coin-icon" />
        <h2>{details.name}</h2>
      </div>
      <div className="details">
        <h2>
          {details.name}
          {' '}
          Details:
        </h2>
        <ul>
          <li>
            <span>Name</span>
            <span>{details.name}</span>
          </li>
          <li>
            <span>Symbol</span>
            <span>{details.symbol}</span>
          </li>
          <li>
            <span>Rank</span>
            <span>{details.rank}</span>
          </li>
          <li>
            <span>Price to USD</span>
            <span>
              {' $'}
              {details.price < 1000
                ? details.price.toFixed(2) : (details.price / 1000).toFixed(1)}
              {details.price > 1000 ? 'K' : ''}
            </span>
          </li>
          <li>
            <span>Daily Change</span>
            <span>
              {details.priceChange1d}
              %
            </span>
          </li>
          <li>
            <span>Volume</span>
            <span>
              $
              {(details.volume / 1000000000).toFixed(1)}
              B
            </span>
          </li>
          <li>
            <span>Market Cap</span>
            <span>
              $
              {(details.marketCap / 1000000000).toFixed(1)}
              B
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
