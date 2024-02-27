import React from 'react';
import {View} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import {DataLoaderStyles as Styles} from '@app/assets/styles';
import {Colors} from '@app/constants';

export default function DataLoader({size, color = Colors.gray}) {
  return (
    <View style={Styles.mainContainer}>
      <BallIndicator size={size} color={color} />
    </View>
  );
}
