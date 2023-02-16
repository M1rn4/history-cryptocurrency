import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCoins = createAsyncThunk('coins/fetchCoinsData', async () => {
  const API_KEY = 'fd64f4965729481aeadbf019575c85f8';
  const coins = ['ETHUSD', 'XRPUSD', 'LTCUSD', 'BCHUSD', 'BTCUSD'];

  const requests = coins.map((coin) => {
    return fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/crypto/${coin}?apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        data.historical.map((item) => ({
          close: item.close,
          low: item.low,
          high: item.high,
          open: item.open,
          volume: item.volume,
        }))
      );
  });

  const data = await Promise.all(requests);
  return data.flat()[0];
});

const initialState = { loading: false, coinsData: [], error: '' };

const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(getCoins.fulfilled, (state, action) => {
      const newState = { ...state, coinsData: action.payload, loading: false };
      return newState;
    });
    builder.addCase(getCoins.rejected, (state, action) => {
      const newState = { ...state, coinsData: [], error: action.error.message };
      return newState;
    });
  },
});


export default coinSlice.reducer;
