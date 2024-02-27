import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import moment from 'moment';
import { DataLoader, WeatherTimelyCard } from '@app/commons';
import { Colors } from '@app/constants';
import AD from 'react-native-vector-icons/AntDesign';
import { HomeBotContentStyles as Styles } from '@app/assets/styles';

export default function HomeBotContent({
  onPressNavigate,
  hourlyData,
  fetching,
  toggleSelected,
}) {
  console.log("hourly==>", hourlyData)
  const tomorrow = moment().add(1, 'days').format('YYMMDD');

  const weatherTimelyCardRender = ({ item, index }) => (
    // console.log("item render===>", item)
    <WeatherTimelyCard
      temp={Math.round(item?.main?.temp) || 0}
      image={item?.weather[0]?.icon}
      time={moment.unix(item?.dt + 900 || 1640995200).format('HH:mm')}
      isSelected={item?.isSelected}
      onPress={() => {
        toggleSelected(item?.dt, index);
      }}
    />
  );

  return (
    <View>
      <View style={Styles.textContainer}>
        <Text style={Styles.todayText}>Today</Text>

        <TouchableOpacity
          style={Styles.nextContainer}
          activeOpacity={0.5}
          onPress={onPressNavigate}>
          <Text style={Styles.nextText}>Next 7 Days</Text>

          <AD name="right" color={Colors.textLink} />
        </TouchableOpacity>
      </View>

      <View style={Styles.cardContainer}>
        {fetching ? (
          <DataLoader size={30} />
        ) : (
          <FlatList
            horizontal
            data={hourlyData.filter(
              item => moment.unix(item?.dt).format('YYMMDD') < tomorrow,
            )}
            renderItem={weatherTimelyCardRender}
            keyExtractor={data => data.dt}
            contentContainerStyle={{
              paddingHorizontal: wp('5%'),
              paddingBottom: wp('2%'),
            }}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: wp('5%'),
                }}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}
