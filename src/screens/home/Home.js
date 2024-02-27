import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  PermissionsAndroid,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import RNBootSplash from 'react-native-bootsplash';
import moment from 'moment';
import { Colors, showError } from '@app/constants';
import { DataLoader } from '@app/commons';
import { HomeTopContent, HomeBotContent } from './components';
import { getCurrentWeather, getDeviceCity } from '@app/redux';
import { HomeStyles as Styles } from '@app/assets/styles';
import Geolocation from '@react-native-community/geolocation';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getDeviceCity());

    wait(1000).then(() => {
      setRefreshing(false);
    });
  }, []);

  const { cityAPIResponse, latAPIResponse, error, fetching } = useSelector(
    state => state?.weather || {},
  );
  console.log("satete", latAPIResponse)
  const [eachHourData, setEachHourData] = useState([]);
  const [selectedHourlyCard, setSelectedHourlyCard] = useState(0);
  const [todaysData, setTodaysData] = useState();

  const todaysDate = moment
    .unix(latAPIResponse?.current?.dt || 1640995200)
    .format('ddd, MMM D');

  useEffect(() => {
    RNBootSplash.hide();
    const permissionRequest = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        // console.log("granted", granted)
        if (granted === 'granted') {
          Geolocation.getCurrentPosition(
            //Will give you the current location
            async position => {
              console.log("position==>", position)
              dispatch(getDeviceCity({ lat: position.coords.latitude, long: position.coords.longitude }));
              dispatch(getCurrentWeather({ cityName: 'London' }));
            },
            error => {
              showError({ cod: 403, message: error.message });
            },
            {
              enableHighAccuracy: false,
              timeout: 30000,
              // maximumAge: 1000,
            },
          );

        } else {
          RNBootSplash.hide();
          dispatch(getCurrentWeather({ cityName: 'Pokhara' }));
          alert('Location permission denied');
        }
      } catch (err) {
        RNBootSplash.hide();
        alert(err);
      }
    };

    permissionRequest();
  }, []);


  useEffect(() => {
    console.log("latAPIResponse", latAPIResponse)
    const hourlyWeatherData =
      latAPIResponse.length
        ? latAPIResponse?.map((item, index) => {
          return index === 0
            ? { ...item, isSelected: true }
            : { ...item, isSelected: false };
        })
        : [];

    setEachHourData(hourlyWeatherData);

    setSelectedHourlyCard(0);
  }, [latAPIResponse]);
  useEffect(() => {
    error && showError(error);
  }, [error]);

  useEffect(() => {
    setTodaysData(
      Array.isArray(latAPIResponse) && latAPIResponse.length
        ? latAPIResponse?.[0]
        : [],
    );
  }, [latAPIResponse]);

  const navigateToDetails = () => {
    navigation.navigate('Details');
  };

  const toggleHourlyIsSelected = (itemId, index) => {
    setEachHourData(
      eachHourData.map(item =>
        item?.dt === itemId
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false },
      ),
    );

    setSelectedHourlyCard(index);
  };
  console.warn(eachHourData[selectedHourlyCard]?.main.temp)
  return (
    <ScrollView
      style={Styles.mainContainer}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor={Colors.lessWhite}
          colors={[Colors.weatherTimelyCardGradient]}
        />
      }>
      <LinearGradient
        style={Styles.topContainer}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[
          Colors.topContainerBackground,
          Colors.weatherTimelyCardGradient,
        ]}
        locations={[0.1, 0.8]}>
        {fetching ? (
          <DataLoader size={50} />
        ) : (
          <HomeTopContent
            location={cityAPIResponse?.city?.name || 'service down'}
            date={todaysDate}
            image={eachHourData[selectedHourlyCard]?.weather[0]?.icon}
            temp={Math.round(eachHourData[selectedHourlyCard]?.main.temp) || 0}
            description={
              eachHourData[selectedHourlyCard]?.weather[0]?.description ||
              'service down'
            }
            humidity={eachHourData[selectedHourlyCard]?.main?.
              humidity || 0}
            wind={eachHourData[selectedHourlyCard]?.main?.
              pressure || 0}
            visibility={eachHourData[selectedHourlyCard]?.main?.grnd_level || 0}
            highestTemp={todaysData?.temp?.main.temp_max || 0}
            lowestTemp={todaysData?.temp?.main.temp_min || 0}
          />
        )}
      </LinearGradient>

      <View style={Styles.bottomContainer}>
        <HomeBotContent
          onPressNavigate={navigateToDetails}
          hourlyData={eachHourData}
          fetching={fetching}
          toggleSelected={toggleHourlyIsSelected}
        />
      </View>
    </ScrollView>
  );
}
