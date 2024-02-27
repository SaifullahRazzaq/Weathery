import React from 'react';
import {View, Text} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import EI from 'react-native-vector-icons/Feather';
import Ion from 'react-native-vector-icons/Ionicons';
import {Colors} from '@app/constants';
import {MoreWeatherDetailsStyles as Styles} from '@app/assets/styles';

export default function MoreWeatherDetails({
  humidity,
  wind,
  visibility,
  thirdLabel = 'Visibility',
  pressure,
}) {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.horizontalLine} />

      <View style={Styles.weatherDetailsMainContainer}>
        <View style={Styles.weatherDetailsContainer}>
          <Ion
            name="md-water-outline"
            size={30}
            color={Colors.weatherDetailsIcon}
          />

          <Text style={Styles.unitText}>{humidity}%</Text>

          <Text style={Styles.descriptionText}>Humidity</Text>
        </View>

        <View style={Styles.weatherDetailsContainer}>
          <MCI
            name="weather-windy"
            size={30}
            color={Colors.weatherDetailsIcon}
          />

          <Text style={Styles.unitText}>{wind}m/h</Text>

          <Text style={Styles.descriptionText}>Wind</Text>
        </View>

        <View style={Styles.weatherDetailsContainer}>
          {pressure ? (
            <MCI
              name="waves-arrow-up"
              size={30}
              color={Colors.weatherDetailsIcon}
            />
          ) : (
            <EI name="eye" size={30} color={Colors.weatherDetailsIcon} />
          )}

          <Text style={Styles.unitText}>
            {pressure ? `${pressure}hG` : `${visibility}m`}
          </Text>

          <Text style={Styles.descriptionText}>{thirdLabel}</Text>
        </View>
      </View>
    </View>
  );
}
