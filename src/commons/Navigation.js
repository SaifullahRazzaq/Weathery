import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Home, Details} from '@app/screens';
import Header from './Header';
import DetailsHeader from './DetailsHeader';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          header: () => <DetailsHeader />,
        }}
      />
    </Stack.Navigator>
  );
}
