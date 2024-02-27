import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {WeatherImage} from '@app/commons';
import {Colors} from '@app/constants';
import {DetailsDailyWeatherCardStyles as Styles} from '@app/assets/styles';

export default function DetailsDailyWeatherCard({
  day,
  date,
  temp,
  image,
  isSelected,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={
        isSelected
          ? {
              ...Styles.mainContainer,
              backgroundColor: Colors.dailyWeatherCardSelectedBackground,
              borderColor: Colors.topContainerBackground,
            }
          : {...Styles.mainContainer}
      }
      activeOpacity={0.6}
      onPress={onPress}>
      <View style={Styles.textContainer}>
        <Text style={Styles.dayText}>{day}</Text>

        <Text style={Styles.dateText}>{date}</Text>
      </View>

      <View>
        <Text style={Styles.tempText}>{temp}°</Text>
      </View>

      <View style={Styles.imageContainer}>
        <WeatherImage image={image} styles={Styles.imageStyle} />
      </View>
    </TouchableOpacity>
  );
}
