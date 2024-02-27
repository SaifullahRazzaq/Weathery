import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const baseURL = 'https://api.openweathermap.org/data/2.5';
import { addRecentSearch } from './RecentSlice';
const API_ID =
  // 'e4ab91ac3d05bfb0f2f2ec9bad5dea4a'
  '67019f5fc3e17bd1fdbf0de830e090e7'

const initialState = {
  cityAPIResponse: {},
  latAPIResponse: {},
  currentLocation: '',
  fetching: false,
  error: null,
};

// Function to call api. Used in various screens.
export const getCurrentWeather = createAsyncThunk(
  'get/currentWeather',
  // {dispatch} comes from thunkAPI object.
  async ({ cityName }, { dispatch, getState }) => {
    // console.log("check here===>", cityName)
    try {
      const state = getState();
      const cityAPIResponse = await axios.get(
        `${baseURL}/forecast?q=${cityName}&units=metric&appid=${API_ID}`,
      );
      const lat = cityAPIResponse?.data?.city?.coord?.lat
      const lon = cityAPIResponse?.data?.city?.coord?.lon
      console.log("res currentWeather===>", cityAPIResponse?.data)
      cityAPIResponse?.status === 200 &&
        cityAPIResponse?.data?.city?.name.toLowerCase() !=
        state.weather.currentLocation.toLowerCase()
        ? dispatch(addRecentSearch(cityAPIResponse?.data?.city?.name))
        : null;
      dispatch(updateCityData(cityAPIResponse?.data || {}));
      // await getLocationBadedData(lat, lon)
      dispatch(updateLatData(cityAPIResponse?.data?.list || {}));

      // RNBootSplash.hide();
    } catch (err) {
      dispatch(updateError(err?.response?.data || 'Error'));
    }
  },
);


const getLocationBadedData = async (lat, lon) => {
  const latAPIResponse = await axios.get(
    `${baseURL}/onecall?lat=${lat}&lon=${55.3667}&appid=${API_ID}&units=metric`,
  ).then((res))
  console.log("latApiRespomse===>", latAPIResponse)
}
export const getDeviceCity = createAsyncThunk(
  'get/deviceCity',
  async ({ lat, long }, { dispatch }) => {
    try {
      const response = await axios.get(
        `${baseURL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_ID}`,
      );
      // console.log("res getDeviceCity ====>", response?.data?.name)
      dispatch(updateCurrentLocation(response?.data?.name));
      dispatch(getCurrentWeather({ cityName: response?.data?.name }));
    } catch (err) {
      dispatch(updateError(err?.response?.data || 'Current City Error'));
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateCityData(state, action) {
      state.cityAPIResponse = action?.payload;
    },
    updateLatData(state, action) {
      state.latAPIResponse = action?.payload;
    },
    updateError(state, action) {
      state.error = action?.payload;
    },
    updateCurrentLocation(state, action) {
      state.currentLocation = action?.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCurrentWeather.pending, state => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(getCurrentWeather.fulfilled, state => {
        state.fetching = false;
        state.error = null;
      })
      .addCase(getCurrentWeather.rejected, (state, action) => {
        state.fetching = false;
        state.error = action;
      })
      .addCase(getDeviceCity.pending, state => {
        state.fetching = true;
        state.error = null;
      })
      .addCase(getDeviceCity.fulfilled, state => {
        state.fetching = false;
        state.error = null;
      })
      .addCase(getDeviceCity.rejected, (state, action) => {
        state.fetching = false;
        state.error = action;
      });
  },
});

// Exporting reducer from slice to use it in above getCurrentWeather function.
export const {
  updateCityData,
  updateLatData,
  updateError,
  updateCurrentLocation,
} = weatherSlice.actions;

export default weatherSlice.reducer;
