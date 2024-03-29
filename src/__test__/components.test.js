import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/ConfigureStore';
import Header from '../Components/Header';
import HomeList from '../Components/HomeList';
import Details from '../Components/Details';

describe('Tests for react components', () => {
  it('Header component should render correctly', () => {
    const { header } = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(header).toMatchSnapshot();
  });
  it('Coin list component should render correctly', () => {
    const { list } = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <HomeList />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(list).toMatchSnapshot();
  });
  it('Coin details component should render correctly', () => {
    const { details } = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Details />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(details).toMatchSnapshot();
  });
});
