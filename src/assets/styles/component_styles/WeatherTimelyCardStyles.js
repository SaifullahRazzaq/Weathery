import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const WeatherTimelyCardStyles = StyleSheet.create({
  mainContainer: {
    height: hp('17%'),
    width: wp('20%'),
    borderRadius: 20,
    justifyContent: 'space-evenly',
    paddingVertical: hp('1%'),
    elevation: 3,
    shadowColor: Colors.headerInputOutline,
  },
  pressableContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: hp('12%'),
    width: wp('19%'),
  },
  temperatureText: {
    ...TextStyles.lexendRegular12LessWhite,
    fontSize: 14,
  },
  timeText: {
    ...TextStyles.lexendRegular12LessWhite,
  },
});
