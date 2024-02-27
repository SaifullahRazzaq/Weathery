import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextStyles} from '@app/constants';

export const HomeTopContentStyles = StyleSheet.create({
  mainContainer: {
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    flex: 1,
    alignItems: 'center',
    paddingTop: hp('4%'),
    justifyContent: 'space-evenly',
    paddingBottom: hp('1%'),
  },
  imageContainer: {
    marginTop: hp('2%'),
    width: wp('45%'),
    height: hp('14%'),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  backgroundImageContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    right: wp('8%'),
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    height: '120%',
    width: '120%',
  },
  locationText: {
    ...TextStyles.lexendSemiBold24White,
  },
  dateText: {
    ...TextStyles.lexendRegular16LessWhite,
    marginTop: hp('0.6%'),
  },
  tempText: {
    ...TextStyles.lexendSemiBold60White,
  },
  descriptionText: {
    ...TextStyles.lexendRegular18White,
    // textAlign: 'center',
    paddingHorizontal: wp('5%'),
  },
  highTempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
    justifyContent: 'space-between',
    width: wp('20%'),
  },
  highTempDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherNowText: {
    ...TextStyles.lexendLight16LessWhite,
  },
  highTempText: {
    ...TextStyles.lexendRegular16LessWhite,
    fontSize: 14,
  },
  moreWeatherDetailsContainer: {
    marginTop: hp('2%'),
  },
});
