import React from 'react';
import {Image, View} from 'react-native';
import {Images} from '@app/constants';

export default function WeatherImage({image, styles}) {
  return (
    <View>
      {image ? (
        <Image
          source={{uri: `https://openweathermap.org/img/wn/${image}@4x.png`}}
          resizeMode="cover"
          style={styles}
        />
      ) : (
        <Image source={Images.snow13d4x} resizeMode="cover" style={styles} />
      )}
    </View>
  );
}
