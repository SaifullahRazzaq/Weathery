import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import AD from 'react-native-vector-icons/AntDesign';
import {MoreWeatherDetails, WeatherImage} from '@app/commons';
import {HomeTopContentStyles as Styles} from '@app/assets/styles';
import {Colors} from '@app/constants';

export default function HomeTopContent({
  location,
  date,
  image,
  temp,
  description,
  humidity,
  wind,
  visibility,
  highestTemp,
  lowestTemp,
}) {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.backgroundImageContainer} opacity={0.05}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${image}@4x.png`,
          }}
          style={Styles.backgroundImage}
        />
      </View>

      <View>
        <Text style={Styles.locationText}>{location}</Text>
      </View>

      <View>
        <Text style={Styles.dateText}>{date}</Text>
      </View>

      <View style={Styles.highTempContainer} opacity={0.8}>
        <View style={Styles.highTempDataContainer}>
          <AD name="arrowup" size={15} color={Colors.lessWhite} />

          <Text style={Styles.highTempText}>{Math.round(highestTemp)}°</Text>
        </View>

        <View style={Styles.highTempDataContainer}>
          <AD name="arrowdown" size={15} color={Colors.lessWhite} />

          <Text style={Styles.highTempText}>{Math.round(lowestTemp)}°</Text>
        </View>
      </View>

      <View style={Styles.imageContainer}>
        <WeatherImage image={image} styles={Styles.imageStyle} />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={Styles.tempText}>{temp}</Text>
        <Text style={{fontSize: 40}}>°</Text>
        <Text style={Styles.tempText}>C</Text>
      </View>

      <View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={Styles.descriptionText}>
          {description}
        </Text>
      </View>

      <View>
        <Text style={Styles.weatherNowText}>Weather now</Text>
      </View>

      <View style={Styles.moreWeatherDetailsContainer}>
        <MoreWeatherDetails
          humidity={humidity}
          wind={wind}
          visibility={visibility}
        />
      </View>
    </View>
  );
}
