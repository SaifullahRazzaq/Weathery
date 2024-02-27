import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '@app/constants';
import WeatherImage from './WeatherImage';
import {WeatherTimelyCardStyles as Styles} from '@app/assets/styles';

export default function WeatherTimelyCard({
  temp,
  image,
  time,
  onPress,
  isSelected = true,
}) {
  return (
    <LinearGradient
      style={Styles.mainContainer}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      colors={
        isSelected
          ? [
              Colors.weatherTimelyCardBackground,
              Colors.weatherTimelyCardGradient,
            ]
          : [
              Colors.weatherTimelyCardInactiveBackground,
              Colors.weatherTimelyCardInactiveGradient,
            ]
      }
      locations={[0.1, 0.8]}>
      <TouchableOpacity
        style={Styles.pressableContainer}
        activeOpacity={0.6}
        onPress={onPress}>
        <View>
          <Text
            style={
              isSelected
                ? {...Styles.temperatureText}
                : {
                    ...Styles.temperatureText,
                    color: Colors.inactiveWeatherDetailsCardText,
                  }
            }>
            {temp}°
          </Text>
        </View>

        <View style={Styles.imageContainer}>
          <WeatherImage image={image} styles={Styles.imageStyle} />
        </View>

        <View>
          <Text
            style={
              isSelected
                ? {...Styles.timeText}
                : {
                    ...Styles.timeText,
                    color: Colors.inactiveWeatherDetailsCardText,
                  }
            }>
            {time}
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}
