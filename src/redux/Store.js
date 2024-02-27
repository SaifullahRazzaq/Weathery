import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {WeatherSlice, RecentSlice} from './slices';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['recentSearches'],
};

const rootReducer = combineReducers({
  weather: WeatherSlice,
  recent: persistReducer(persistConfig, RecentSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  // To disable "A non-serializable value was detected in an action" warning.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
