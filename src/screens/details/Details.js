import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
import { DetailsDailyWeatherCard, DetailWeatherCard } from './components';
import { WeatherTimelyCard } from '@app/commons';
import { Colors } from '@app/constants';
import { DetailsStyles as Styles } from '@app/assets/styles';

export default function Details() {
  const { latAPIResponse, fetching } = useSelector(state => state?.weather || {});

  const hourlyWeatherData = Array.isArray(latAPIResponse)
    ? latAPIResponse
    : [];

  const nextSevenDaysData = Array.isArray(latAPIResponse)
    ? latAPIResponse?.map((item, index) => {
      return index === 0
        ? { ...item, isSelected: true }
        : { ...item, isSelected: false };
    })
    : [];

  const [dailyData, setDailyData] = useState(nextSevenDaysData);
  const [selectedDailyCard, setSelectedDailyCard] = useState(0);
  console.warn("dailyData", dailyData)
  const tomorrow = moment().add(1, 'days').format('YYMMDD');

  const weatherTimelyCardRender = ({ item }) => (
    <WeatherTimelyCard
      temp={item?.main.temp || 0}
      image={item?.weather[0]?.icon}
      time={moment.unix(item?.dt + 900 || 1640995200).format('HH:mm')}
    />
  );

  const toggleDailyIsSelected = (itemId, index) => {
    setDailyData(
      dailyData.map(item =>
        item?.dt === itemId
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false },
      ),
    );

    setSelectedDailyCard(index);
  };

  const weatherDailyCardRender = ({ item, index }) => (
    <DetailsDailyWeatherCard
      day={moment.unix(item?.dt || 1640995200).format('dddd')}
      date={moment.unix(item?.dt || 1640995200).format('MMM D')}
      temp={Math.round(item?.main?.temp || 0)}
      image={item?.weather[0]?.icon}
      onPress={() => {
        toggleDailyIsSelected(item?.dt, index);
      }}
      isSelected={item?.isSelected}
    />
  );

  return (
    <View style={Styles.mainContainer}>
      <Spinner
        visible={fetching}
        color={Colors.white}
        overlayColor={Colors.overlaySpinnerBackground}
        animation="fade"
      />

      <View style={Styles.topContainer}>
        <FlatList
          horizontal
          data={hourlyWeatherData.filter(
            item => moment.unix(item?.dt).format('YYMMDD') < tomorrow,
          )}
          renderItem={weatherTimelyCardRender}
          keyExtractor={data => data?.dt}
          contentContainerStyle={{
            paddingHorizontal: wp('5%'),
            paddingVertical: wp('2%'),
          }}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: wp('5%') }} />}
        />
      </View>

      <View style={Styles.weatherCardContainer}>
        <DetailWeatherCard
          image={dailyData[selectedDailyCard]?.weather[0]?.icon}
          temp={Math.round(dailyData[selectedDailyCard]?.main?.temp) || 0}
          description={
            dailyData[selectedDailyCard]?.weather[0]?.description ||
            'service down'
          }
          humidity={dailyData[selectedDailyCard]?.main.humidity || 0}
          wind={dailyData[selectedDailyCard]?.wind.speed || 0}
          pressure={dailyData[selectedDailyCard]?.main.pressure || 0}
        />
      </View>

      <View style={Styles.botContainer}>
        <FlatList
          data={dailyData}
          renderItem={weatherDailyCardRender}
          keyExtractor={data => data.dt}
          contentContainerStyle={{
            paddingTop: hp('2%'),
            paddingBottom: hp('5%'),
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: hp('1.5%'),
              }}
            />
          )}
        />
      </View>
    </View>
  );
}
