import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const DetailsDailyWeatherCardStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.dailyWeatherCardBackground,
    flexDirection: 'row',
    height: hp('10%'),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.dailyWeatherCardBackground,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('6%'),
  },
  textContainer: {
    width: wp('26%'),
  },
  imageContainer: {
    height: hp('10%'),
    width: wp('16%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: hp('10%'),
    width: wp('22%'),
  },
  dayText: {
    ...TextStyles.lexendRegular16Black,
  },
  dateText: {
    ...TextStyles.lexendRegular16Gray,
    opacity: 0.5,
  },
  tempText: {
    ...TextStyles.lexendRegular35Blue,
    width: wp('20%'),
  },
});
