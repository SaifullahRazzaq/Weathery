import React from 'react';
import {View, Text} from 'react-native';
import {WeatherImage} from '@app/commons';
import {WeatherCardTopContentStyles as Styles} from '@app/assets/styles';

export default function WeatherCardTopContent({image, temp, description}) {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.leftContainer}>
        <WeatherImage image={image} styles={Styles.imageStyle} />
      </View>

      <View style={Styles.rightContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.tempText}>{temp}</Text>
          <Text style={{fontSize: 35}}>°</Text>
        </View>

        <Text
          style={Styles.descriptionText}
          numberOfLines={2}
          ellipsizeMode="tail">
          {description}
        </Text>

        <Text style={Styles.weatherNowText}>Weather now</Text>
      </View>
    </View>
  );
}
