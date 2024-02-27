import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextStyles} from '@app/constants';

export const WeatherCardTopContentStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: hp('15%'),
  },
  leftContainer: {
    width: wp('38%'),
    height: hp('14%'),
  },
  rightContainer: {
    width: wp('50%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imageStyle: {
    height: '100%',
    width: '120%',
  },
  tempText: {
    ...TextStyles.lexendSemiBold50White,
    fontSize: 45,
  },
  descriptionText: {
    ...TextStyles.lexendRegular16White,
    paddingHorizontal: wp('3%'),
    textAlign: 'center',
  },
  weatherNowText: {
    ...TextStyles.lexendLight14LessWhite,
  },
});
