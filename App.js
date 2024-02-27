import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Navigation from '@app/commons/Navigation';
import {store, persistor} from '@app/redux';
import {Colors} from '@app/constants';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={Colors.topContainerBackground} />

        <NavigationContainer>
          <Navigation />
        </NavigationContainer>

        <Toast />
      </PersistGate>
    </Provider>
  );
}
