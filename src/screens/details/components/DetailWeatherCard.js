import React from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import WeatherCardTopContent from './WeatherCardTopContent';
import {MoreWeatherDetails} from '@app/commons';
import {Colors} from '@app/constants';
import {DetailWeatherCardStyles as Styles} from '@app/assets/styles';

export default function DetailWeatherCard({
  image,
  temp,
  description,
  humidity,
  wind,
  pressure,
}) {
  return (
    <LinearGradient
      style={Styles.mainContainer}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      colors={[
        Colors.weatherTimelyCardGradient,
        Colors.weatherDetailsCardGradient,
      ]}
      locations={[0.1, 0.8]}>
      <View style={Styles.backgroundImageContainer} opacity={0.08}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${image}@4x.png`,
          }}
          style={Styles.backgroundImage}
        />
      </View>

      <WeatherCardTopContent
        image={image}
        temp={temp}
        description={description}
      />

      <View style={Styles.botContainer}>
        <MoreWeatherDetails
          humidity={humidity}
          wind={wind}
          // visibility={visibility}
          pressure={pressure}
          thirdLabel="Pressure"
        />
      </View>
    </LinearGradient>
  );
}
